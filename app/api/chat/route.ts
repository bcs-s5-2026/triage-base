export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  if (
    typeof body !== "object" ||
    body === null ||
    !("message" in body) ||
    typeof body.message !== "string" ||
    !body.message.trim()
  ) {
    return Response.json(
      { error: "Please provide a non-empty message string." },
      { status: 400 },
    );
  }

  return Response.json({
    answer: `Hello, you just said: ${body.message}`,
  });
}
