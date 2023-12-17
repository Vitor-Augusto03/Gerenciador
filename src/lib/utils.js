export const BACKEND_URL = 'http://localhost:3001/';

export function fetchApi(
  url,                    // string
  method,                 // 'GET' | 'POST' | 'DELETE'
  body = undefined,       // any
  authToken = undefined,  // string
) {
  const fullUrl = BACKEND_URL + url

  const headers = {};

  if (body !== undefined) {
    headers['Content-Type'] = 'application/json';
  }

  if (authToken !== undefined) {
    headers['Authorization'] = 'Bearer ' + authToken;
  }

  return fetch(fullUrl, {
    method,
    headers,
    body: body !== undefined ? JSON.stringify(body) : undefined,
  });
}
