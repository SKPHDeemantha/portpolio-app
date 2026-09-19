import { useEffect, useRef } from "react";
import { Bot } from "lucide-react";
import * as THREE from "three";
import { RoundedBoxGeometry } from "three/addons/geometries/RoundedBoxGeometry.js";

export default function ChatRobot() {
    const mountRef = useRef(null);

    useEffect(() => {
        const mount = mountRef.current;
        let renderer;
        try {
            renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        } catch {
            return;
        }
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.setSize(112, 112);
        renderer.setClearColor(0x000000, 0);
        renderer.domElement.className = "absolute inset-0 h-full w-full";
        mount.appendChild(renderer.domElement);
        mount.firstElementChild.style.visibility = "hidden";

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(35, 1, 0.1, 50);
        camera.position.set(0, 0.35, 6.8);
        camera.lookAt(0, 0.1, 0);
        scene.add(new THREE.HemisphereLight(0xd7faff, 0x403078, 2.5));
        const light = new THREE.DirectionalLight(0xffffff, 4);
        light.position.set(-3, 4, 5);
        scene.add(light);
        const rim = new THREE.DirectionalLight(0xa78bfa, 5);
        rim.position.set(3, 1, -2);
        scene.add(rim);

        const shell = new THREE.MeshStandardMaterial({ color: 0xe3edff, metalness: 0.35, roughness: 0.25 });
        const dark = new THREE.MeshStandardMaterial({ color: 0x08152c, metalness: 0.35, roughness: 0.2 });
        const glow = new THREE.MeshStandardMaterial({ color: 0x67e8f9, emissive: 0x22d3ee, emissiveIntensity: 2 });
        const violet = new THREE.MeshStandardMaterial({ color: 0x8b5cf6, metalness: 0.4, roughness: 0.3 });
        const robot = new THREE.Group();
        scene.add(robot);
        const box = (parent, width, height, depth, radius, material, x, y, z) => {
            const mesh = new THREE.Mesh(new RoundedBoxGeometry(width, height, depth, 3, radius), material);
            mesh.position.set(x, y, z);
            parent.add(mesh);
            return mesh;
        };
        const head = new THREE.Group();
        head.position.y = 0.5;
        robot.add(head);
        box(head, 1.45, 1.04, 0.9, 0.24, shell, 0, 0, 0);
        box(head, 1.19, 0.68, 0.16, 0.18, dark, 0, -0.02, 0.44);
        const eyes = [-0.29, 0.29].map(x => box(head, 0.15, 0.25, 0.07, 0.07, glow, x, 0.02, 0.54));
        box(head, 0.24, 0.045, 0.06, 0.02, glow, 0, -0.19, 0.54);
        box(head, 0.07, 0.28, 0.07, 0.025, violet, 0, 0.6, 0);
        const antenna = new THREE.Mesh(new THREE.SphereGeometry(0.095, 16, 12), glow);
        antenna.position.set(0, 0.78, 0);
        head.add(antenna);
        [-0.79, 0.79].forEach(x => box(head, 0.18, 0.38, 0.4, 0.08, violet, x, 0, 0));
        box(robot, 0.95, 0.69, 0.65, 0.22, shell, 0, -0.48, 0);
        box(robot, 0.3, 0.1, 0.05, 0.035, glow, 0, -0.43, 0.33);
        const arms = [-1, 1].map(side => {
            const arm = new THREE.Group();
            arm.position.set(side * 0.65, -0.27, 0);
            box(arm, 0.23, 0.53, 0.3, 0.11, shell, 0, -0.14, 0);
            robot.add(arm);
            return arm;
        });
        [-0.26, 0.26].forEach(x => box(robot, 0.29, 0.2, 0.42, 0.09, violet, x, -0.89, 0.06));
        const halo = new THREE.Mesh(new THREE.TorusGeometry(0.82, 0.018, 8, 64), glow);
        halo.rotation.x = Math.PI / 2;
        halo.position.y = -1.13;
        scene.add(halo);

        const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
        let hovered = false;
        let frame;
        const enter = () => { hovered = true; };
        const leave = () => { hovered = false; };
        const button = mount.closest("button");
        button.addEventListener("pointerenter", enter);
        button.addEventListener("pointerleave", leave);
        button.addEventListener("focus", enter);
        button.addEventListener("blur", leave);
        const render = (now = 0) => {
            const t = reducedMotion.matches ? 0 : now / 1000;
            robot.position.y = Math.sin(t * 2) * 0.08;
            robot.rotation.y = -0.22 + Math.sin(t * 0.8) * 0.16;
            head.rotation.z = Math.sin(t * 1.2) * 0.045;
            arms[0].rotation.z = -0.16;
            arms[1].rotation.z = hovered ? 2.25 + Math.sin(t * 9) * 0.25 : 0.18 + Math.sin(t * 2) * 0.08;
            const blink = t % 4.7;
            eyes.forEach(eye => { eye.scale.y = blink > 4.5 ? 0.15 : 1; });
            halo.scale.setScalar(1 + Math.sin(t * 2) * 0.04);
            renderer.render(scene, camera);
            if (!reducedMotion.matches && !document.hidden) frame = requestAnimationFrame(render);
        };
        const restart = () => {
            cancelAnimationFrame(frame);
            if (!document.hidden) render(performance.now());
        };
        document.addEventListener("visibilitychange", restart);
        reducedMotion.addEventListener("change", restart);
        render();

        return () => {
            cancelAnimationFrame(frame);
            document.removeEventListener("visibilitychange", restart);
            reducedMotion.removeEventListener("change", restart);
            button.removeEventListener("pointerenter", enter);
            button.removeEventListener("pointerleave", leave);
            button.removeEventListener("focus", enter);
            button.removeEventListener("blur", leave);
            scene.traverse(object => { object.geometry?.dispose(); });
            [shell, dark, glow, violet].forEach(material => material.dispose());
            renderer.dispose();
            renderer.domElement.remove();
            mount.firstElementChild.style.visibility = "";
        };
    }, []);

    return (
        <span ref={mountRef} className="relative block h-28 w-28" aria-hidden="true">
            <Bot className="absolute inset-0 m-auto h-16 w-16 text-cyan-200 drop-shadow-lg" />
        </span>
    );
}
