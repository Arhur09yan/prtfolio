import { convertToModelMessages, streamText, type UIMessage } from "ai";
import { createOpenAI } from "@ai-sdk/openai";

const SYSTEM_PROMPT = `You are an AI assistant representing a React and Next.js developer.
Provide concise answers about experience, skills, and projects.`;

const apiKey = process.env.OPENROUTER_API_KEY;
const modelId = process.env.AI_MODEL || "openai/gpt-3.5-turbo";
const baseURL = "https://openrouter.ai/api/v1";

const openai = createOpenAI({ apiKey, baseURL });

export async function POST(req: Request) {
  if (!apiKey) {
    return new Response(
      JSON.stringify({ error: "Missing API key in .env.local" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }

  const { messages }: { messages: UIMessage[] } = await req.json();

  const prompt = [
    { role: "system" as const, content: SYSTEM_PROMPT },
    ...convertToModelMessages(messages),
  ];

  try {
    const result = streamText({
      model: openai(modelId),
      messages: prompt,
      maxOutputTokens: 500,
      abortSignal: req.signal,
    });

    return result.toUIMessageStreamResponse();
  } catch (error: any) {
    console.error("Chatbot error:", error);

    const code = error?.code || error?.type;
    const statusCode = error?.statusCode || 500;
    const message =
      statusCode === 401 || code === "invalid_api_key"
        ? "Invalid API key"
        : code === "insufficient_quota"
        ? "Quota exceeded"
        : error?.message || "Unexpected error";

    return new Response(JSON.stringify({ error: message }), {
      status: statusCode,
      headers: { "Content-Type": "application/json" },
    });
  }
}
