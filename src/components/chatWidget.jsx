import { useState, useRef, useEffect } from "react";

export default function ChatWidget() {
    const [open, setOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const messagesEndRef = useRef(null);
    const inputRef = useRef(null);

    const suggestions = [
        "What are your skills?",
        "Tell me about your projects",
        "How can I contact you?",
    ];

    useEffect(() => {
        if (open) {
            setTimeout(() => inputRef.current?.focus(), 150);
        }
    }, [open]);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    const sendMessage = async () => {
        const trimmed = input.trim();
        if (!trimmed || isLoading) return;
        setError(null);

        const userMsg = {
            id: Date.now().toString(),
            role: "user",
            content: trimmed,
        };
        const updated = [...messages, userMsg];
        setMessages(updated);
        setInput("");
        setIsLoading(true);

        const asstId = (Date.now() + 1).toString();
        setMessages((prev) => [
            ...prev,
            { id: asstId, role: "assistant", content: "" },
        ]);

        try {
            const res = await fetch(
                "https://6qrcdw6ak2.execute-api.eu-north-1.amazonaws.com/chat",
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ message: trimmed }),
                }
            );

            if (!res.ok) {
                let errMsg = "API error";
                try {
                    const err = await res.json();
                    errMsg = err.error || errMsg;
                } catch {
                    // ignore parsing error
                }
                throw new Error(errMsg);
            }

            const data = await res.json();
            const reply = data.message || "No response received.";

            setMessages((prev) =>
                prev.map((m) => (m.id === asstId ? { ...m, content: reply } : m))
            );
        } catch (err) {
            const msg =
                err instanceof Error ? err.message : "Something went wrong.";
            setError(msg);
            setMessages((prev) =>
                prev.map((m) =>
                    m.id === asstId
                        ? { ...m, content: "Sorry, I ran into an error. Please try again." }
                        : m
                )
            );
        } finally {
            setIsLoading(false);
            inputRef.current?.focus();
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    };

    const autoResize = (el) => {
        el.style.height = "auto";
        el.style.height = `${Math.min(el.scrollHeight, 120)}px`;
    };

    const handleSuggestion = (q) => {
        setInput(q);
        setTimeout(() => inputRef.current?.focus(), 50);
    };

    return (
        <>
            {/* ── Chat Panel ─────────────────────────────────────── */}
            <div
                className={`fixed bottom-24 right-2 sm:right-5 z-50 w-[calc(100vw-1rem)] sm:w-[380px] flex flex-col rounded-3xl overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${open
                        ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
                        : "opacity-0 translate-y-8 scale-95 pointer-events-none"
                    }`}
                style={{
                    height: open ? "min(540px, 85dvh)" : "0",
                    background:
                        "linear-gradient(145deg, rgba(15,15,30,0.97) 0%, rgba(20,20,45,0.97) 100%)",
                    backdropFilter: "blur(24px)",
                    WebkitBackdropFilter: "blur(24px)",
                    boxShadow:
                        "0 32px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.06), inset 0 1px 0 rgba(255,255,255,0.08)",
                }}
            >
                {/* ── Header ─────────────────────────────────────────── */}
                <div
                    className="flex items-center gap-3 px-5 py-4 flex-shrink-0 relative overflow-hidden"
                    style={{
                        background:
                            "linear-gradient(135deg, rgba(99,102,241,0.3) 0%, rgba(168,85,247,0.3) 100%)",
                        borderBottom: "1px solid rgba(255,255,255,0.07)",
                    }}
                >
                    {/* Glow orb behind header */}
                    <div
                        className="absolute -top-6 -left-6 w-28 h-28 rounded-full pointer-events-none"
                        style={{
                            background:
                                "radial-gradient(circle, rgba(99,102,241,0.35) 0%, transparent 70%)",
                        }}
                    />

                    {/* AI avatar */}
                    <div
                        className="relative w-10 h-10 rounded-2xl flex-shrink-0 flex items-center justify-center"
                        style={{
                            background:
                                "linear-gradient(135deg, #6366f1 0%, #a855f7 50%, #ec4899 100%)",
                            boxShadow:
                                "0 0 0 2px rgba(99,102,241,0.4), 0 4px 16px rgba(99,102,241,0.4)",
                        }}
                    >
                        <svg
                            className="w-5 h-5 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z"
                            />
                        </svg>
                        {/* online dot */}
                        <span
                            className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full border-2 border-[#0f0f1e] bg-emerald-400 animate-pulse"
                        />
                    </div>

                    <div className="flex-1 min-w-0">
                        <p className="text-white font-semibold text-sm tracking-wide">
                            Heshan&apos;s AI
                        </p>
                        <p className="text-indigo-300 text-[11px] flex items-center gap-1 font-medium">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
                            Powered by nova &middot; Online
                        </p>
                    </div>

                    {/* Clear + Close */}
                    <div className="flex items-center gap-1">
                        {messages.length > 0 && (
                            <button
                                onClick={() => setMessages([])}
                                title="Clear chat"
                                className="w-8 h-8 rounded-xl flex items-center justify-center text-white/40 hover:text-white/80 hover:bg-white/10 transition-all duration-200"
                            >
                                <svg
                                    className="w-3.5 h-3.5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                    />
                                </svg>
                            </button>
                        )}
                        <button
                            onClick={() => setOpen(false)}
                            title="Close chat"
                            className="w-8 h-8 rounded-xl flex items-center justify-center text-white/40 hover:text-white/80 hover:bg-white/10 transition-all duration-200"
                        >
                            <svg
                                className="w-4 h-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* ── Messages Area ───────────────────────────────────── */}
                <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
                    {/* Welcome state */}
                    {messages.length === 0 && (
                        <div className="flex flex-col items-center justify-center h-full gap-5 text-center py-6">
                            <div
                                className="w-16 h-16 rounded-3xl flex items-center justify-center"
                                style={{
                                    background:
                                        "linear-gradient(135deg, rgba(99,102,241,0.2) 0%, rgba(168,85,247,0.2) 100%)",
                                    border: "1px solid rgba(99,102,241,0.3)",
                                    boxShadow: "0 0 40px rgba(99,102,241,0.15)",
                                }}
                            >
                                <svg
                                    className="w-8 h-8"
                                    fill="none"
                                    stroke="url(#chatGrad)"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                >
                                    <defs>
                                        <linearGradient id="chatGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                            <stop offset="0%" stopColor="#6366f1" />
                                            <stop offset="100%" stopColor="#a855f7" />
                                        </linearGradient>
                                    </defs>
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                                    />
                                </svg>
                            </div>

                            <div>
                                <p className="text-white font-semibold text-sm mb-1 tracking-wide">
                                    Hi there! 👋 I&apos;m Heshan&apos;s AI
                                </p>
                                <p className="text-white/40 text-xs leading-relaxed max-w-[220px] mx-auto">
                                    Ask me anything about his skills, projects, or experience.
                                </p>
                            </div>

                            <div className="flex flex-wrap justify-center gap-2 px-2">
                                {suggestions.map((q) => (
                                    <button
                                        key={q}
                                        onClick={() => handleSuggestion(q)}
                                        className="text-[11px] px-3 py-1.5 rounded-xl font-medium transition-all duration-200 hover:scale-105 active:scale-95"
                                        style={{
                                            background: "rgba(99,102,241,0.12)",
                                            border: "1px solid rgba(99,102,241,0.25)",
                                            color: "rgba(165,180,252,1)",
                                        }}
                                    >
                                        {q}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Messages */}
                    {messages.map((msg) => (
                        <div
                            key={msg.id}
                            className={`flex items-end gap-2.5 chatMsgIn ${msg.role === "user" ? "justify-end" : "justify-start"
                                }`}
                        >
                            {/* AI avatar */}
                            {msg.role === "assistant" && (
                                <div
                                    className="w-7 h-7 rounded-xl flex-shrink-0 flex items-center justify-center text-white text-[9px] font-bold mb-0.5"
                                    style={{
                                        background:
                                            "linear-gradient(135deg, #6366f1 0%, #a855f7 100%)",
                                        boxShadow: "0 2px 8px rgba(99,102,241,0.4)",
                                    }}
                                >
                                    AI
                                </div>
                            )}

                            {/* Bubble */}
                            <div
                                className={`max-w-[78%] px-4 py-2.5 text-sm leading-relaxed whitespace-pre-wrap break-words ${msg.role === "user"
                                        ? "rounded-2xl rounded-br-sm text-white"
                                        : "rounded-2xl rounded-bl-sm"
                                    }`}
                                style={
                                    msg.role === "user"
                                        ? {
                                            background:
                                                "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
                                            boxShadow: "0 4px 16px rgba(99,102,241,0.35)",
                                        }
                                        : {
                                            background: "rgba(255,255,255,0.06)",
                                            border: "1px solid rgba(255,255,255,0.08)",
                                            color: "rgba(226,232,240,0.95)",
                                        }
                                }
                            >
                                {msg.content === "" &&
                                    msg.role === "assistant" &&
                                    isLoading ? (
                                    <span className="inline-flex gap-1 items-center py-0.5 px-1">
                                        <span className="chatDot chatDot1" />
                                        <span className="chatDot chatDot2" />
                                        <span className="chatDot chatDot3" />
                                    </span>
                                ) : (
                                    msg.content
                                )}
                            </div>

                            {/* User avatar */}
                            {msg.role === "user" && (
                                <div
                                    className="w-7 h-7 rounded-xl flex-shrink-0 flex items-center justify-center text-[9px] font-bold mb-0.5"
                                    style={{
                                        background: "rgba(255,255,255,0.1)",
                                        border: "1px solid rgba(255,255,255,0.12)",
                                        color: "rgba(255,255,255,0.8)",
                                    }}
                                >
                                    You
                                </div>
                            )}
                        </div>
                    ))}
                    <div ref={messagesEndRef} />
                </div>

                {/* ── Error Banner ────────────────────────────────────── */}
                {error && (
                    <div
                        className="mx-4 mb-2 px-4 py-2.5 rounded-2xl flex items-center gap-2 text-xs flex-shrink-0"
                        style={{
                            background: "rgba(239,68,68,0.12)",
                            border: "1px solid rgba(239,68,68,0.25)",
                            color: "rgba(252,165,165,1)",
                        }}
                    >
                        <svg
                            className="w-3.5 h-3.5 flex-shrink-0"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                            <path
                                fillRule="evenodd"
                                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                                clipRule="evenodd"
                            />
                        </svg>
                        <span className="flex-1">{error}</span>
                        <button
                            onClick={() => setError(null)}
                            className="opacity-60 hover:opacity-100 transition-opacity ml-1"
                        >
                            <svg
                                className="w-3.5 h-3.5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>
                )}

                {/* ── Input Bar ───────────────────────────────────────── */}
                <div
                    className="flex gap-2.5 items-end px-4 py-3.5 flex-shrink-0"
                    style={{
                        borderTop: "1px solid rgba(255,255,255,0.06)",
                        background: "rgba(0,0,0,0.2)",
                    }}
                >
                    <textarea
                        ref={inputRef}
                        value={input}
                        onChange={(e) => {
                            setInput(e.target.value);
                            autoResize(e.target);
                        }}
                        onKeyDown={handleKeyDown}
                        placeholder="Ask me anything…"
                        rows={1}
                        disabled={isLoading}
                        className="flex-1 resize-none text-sm focus:outline-none disabled:opacity-40 transition-all placeholder:text-white/25 chatInput"
                        style={{
                            background: "rgba(255,255,255,0.05)",
                            border: "1px solid rgba(255,255,255,0.08)",
                            borderRadius: "16px",
                            padding: "10px 14px",
                            color: "rgba(226,232,240,0.95)",
                            minHeight: "42px",
                            maxHeight: "120px",
                            boxShadow: "inset 0 1px 0 rgba(255,255,255,0.04)",
                        }}
                        onFocus={(e) => {
                            e.target.style.border = "1px solid rgba(99,102,241,0.5)";
                            e.target.style.boxShadow =
                                "inset 0 1px 0 rgba(255,255,255,0.04), 0 0 0 3px rgba(99,102,241,0.1)";
                        }}
                        onBlur={(e) => {
                            e.target.style.border = "1px solid rgba(255,255,255,0.08)";
                            e.target.style.boxShadow =
                                "inset 0 1px 0 rgba(255,255,255,0.04)";
                        }}
                    />

                    <button
                        onClick={sendMessage}
                        disabled={!input.trim() || isLoading}
                        title="Send message"
                        className="w-10 h-10 flex-shrink-0 rounded-2xl flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 disabled:opacity-30 disabled:cursor-not-allowed disabled:scale-100"
                        style={{
                            background:
                                !input.trim() || isLoading
                                    ? "rgba(255,255,255,0.08)"
                                    : "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
                            boxShadow:
                                !input.trim() || isLoading
                                    ? "none"
                                    : "0 4px 16px rgba(99,102,241,0.45)",
                        }}
                    >
                        {isLoading ? (
                            <svg
                                className="w-4 h-4 animate-spin text-white"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <circle
                                    className="opacity-25"
                                    cx="12"
                                    cy="12"
                                    r="10"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                />
                                <path
                                    className="opacity-75"
                                    fill="currentColor"
                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                                />
                            </svg>
                        ) : (
                            <svg
                                className="w-4 h-4 text-white"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                strokeWidth={2.5}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                                />
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            {/* ── Floating Toggle Button ──────────────────────────── */}
            <button
                id="chat-widget-toggle"
                onClick={() => setOpen((v) => !v)}
                title={open ? "Close chat" : "Chat with Heshan's AI"}
                className="fixed bottom-6 right-5 z-50 w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95"
                style={{
                    background: open
                        ? "rgba(30,30,60,0.95)"
                        : "linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #ec4899 100%)",
                    boxShadow: open
                        ? "0 8px 32px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.08)"
                        : "0 8px 32px rgba(99,102,241,0.5), 0 0 0 1px rgba(99,102,241,0.3)",
                }}
            >
                <span
                    className={`absolute transition-all duration-300 ${open
                            ? "opacity-100 rotate-0 scale-100"
                            : "opacity-0 rotate-90 scale-50"
                        }`}
                >
                    <svg
                        className="w-5 h-5 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth={2.5}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </span>
                <span
                    className={`absolute transition-all duration-300 ${open
                            ? "opacity-0 -rotate-90 scale-50"
                            : "opacity-100 rotate-0 scale-100"
                        }`}
                >
                    <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                        />
                    </svg>
                </span>

                {/* Pulse ring when closed */}
                {!open && (
                    <span
                        className="absolute inset-0 rounded-2xl animate-ping"
                        style={{
                            background:
                                "linear-gradient(135deg, #6366f1 0%, #a855f7 100%)",
                            opacity: 0.18,
                        }}
                    />
                )}
            </button>

            {/* ── Global keyframe styles ──────────────────────────── */}
            <style>{`
        @keyframes chatMsgIn {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .chatMsgIn {
          animation: chatMsgIn 0.3s ease forwards;
        }
        @keyframes chatBounce {
          0%, 60%, 100% { transform: translateY(0); }
          30%           { transform: translateY(-6px); }
        }
        .chatDot {
          width: 6px; height: 6px;
          border-radius: 50%;
          display: inline-block;
        }
        .chatDot1 { background: #818cf8; animation: chatBounce 1.2s infinite 0s; }
        .chatDot2 { background: #c084fc; animation: chatBounce 1.2s infinite 0.2s; }
        .chatDot3 { background: #f472b6; animation: chatBounce 1.2s infinite 0.4s; }
        .chatInput::placeholder { color: rgba(255,255,255,0.25); }
      `}</style>
        </>
    );
}
