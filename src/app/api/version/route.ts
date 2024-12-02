export async function GET() {
  return new Response(JSON.stringify({ version: '0.0.1' }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}
