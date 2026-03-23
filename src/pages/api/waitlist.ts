import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  const data = await request.formData();
  const email = data.get('email');

  console.log('New waitlist signup:', email);

  return new Response(null, {
    status: 302,
    headers: {
      Location: '/',
    },
  });
};