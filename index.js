addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const body = JSON.stringify({
    ip: request.headers.get('cf-connecting-ip')
  });
  const init = {
    headers: { 'content-type': 'application/json' }
  };

  return new Response(body, init);
}
