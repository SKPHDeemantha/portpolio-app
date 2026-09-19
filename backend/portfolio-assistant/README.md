# Portfolio assistant update

`index.mjs` is a standalone replacement for the Lambda code supplied in this conversation. It preserves the existing Bedrock client, model ID, API request (`message`), and API response (`message`) format. The frontend requires no API changes.

The replacement includes updated employment, skills, projects, eight credential entries, verification links, and plain-text response guidance. It allows up to 1,200 output tokens for detailed questions and uses a temperature of 0.3. Actual model answers still need live verification.

## Apply to the existing Lambda

1. Open the existing portfolio chatbot Lambda in your AWS console.
2. Save a backup of its current code.
3. Replace the contents of its `index.mjs` with this folder's `index.mjs`. Keep the existing runtime, handler, dependencies, permissions, region, and API Gateway integration.
4. Deploy the Lambda code, then test through the portfolio chat. If the API invokes a version or alias, update that deployment as appropriate.

Example Lambda test event:

```json
{"body":"{\"message\":\"Tell me about Heshan's current job and newest certificates.\"}"}
```

Also ask about CNMS's current status, the Shimmers technology stack, and certification verification links. Confirm that CNMS is described as in development and that the AWS Coursera course is not presented as an AWS professional certification exam.

## Maintain the facts

`knowledge.md` is a readable copy of the expanded prompt. The same content is embedded in `index.mjs` so only one file needs to be copied to Lambda. Changes to this Markdown file do not automatically update the embedded prompt or deployed Lambda; keep both copies in sync when updating portfolio facts.

This update has not been deployed to AWS. The existing handler sends only the current question, so conversation memory is unchanged.
