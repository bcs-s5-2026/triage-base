# Support chat

Requires Node.js 20.9 or newer.

```sh
npm install
npm run dev
```

Open http://localhost:3033 and send a message.
Both `npm run dev` and `npm run start` use port 3033.
The Send button is disabled when the message is empty or contains only spaces,
and while a request is in progress. Enter some text to enable it.

The client page posts `{ "message": "your text" }` to `/api/chat`.
The App Router handler in `app/api/chat/route.ts` returns
`{ "answer": "Hello, you just said: your text" }`.
Invalid JSON or an empty/non-string message returns HTTP 400 with an `error`.

This is an echo-only flow. No LLM or environment settings are used yet.
The triage route and LLM client remain placeholders.

```sh
npm run typecheck
npm run build
```
