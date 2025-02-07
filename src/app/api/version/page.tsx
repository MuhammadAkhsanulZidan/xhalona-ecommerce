export const dynamic = "force-dynamic"; // Ensures fresh data on every request

export default function Page() {
  return new Response(
    JSON.stringify({ version: "0.1" }),
    {
      status: 200,
      headers: { "Content-Type": "application/json" },
    }
  );
}
