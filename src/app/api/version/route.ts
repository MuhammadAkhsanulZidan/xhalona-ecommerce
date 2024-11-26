export async function GET() {
  return new Response(JSON.stringify({ version: '0.0' }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}
