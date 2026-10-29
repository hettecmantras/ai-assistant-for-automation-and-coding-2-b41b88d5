export async function apiFetch(url, options = {}) {
  const response = await fetch(url, { headers: { 'Content-Type': 'application/json', ...(options.headers || {}) }, ...options });
  let body;
  try { body = await response.json(); } catch { throw Object.assign(new Error('The server returned an invalid response.'), { serverFailure: response.status >= 500 }); }
  if (!response.ok) { const error = new Error(body.error || 'Request failed.'); error.status = response.status; throw error; }
  return body;
}