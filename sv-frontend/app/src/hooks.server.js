// src/hooks.server.ts
import { redirect } from '@sveltejs/kit';

const API_BASE = 'http://127.0.0.1:8000/';

// Helper: call the auth/user endpoint on the API and return user JSON or null
async function fetchUserFromApi(token) {
  if (!token) return null;

  try {
    const res = await fetch(`${API_BASE}/usuarios/`, {
      headers: { Authorization: `Token ${token}` },
      // server -> API; cookies are not sent automatically; we pass token header explicitly
    });
    if (!res.ok) return null;
    return await res.json();
  } catch (err) {
    console.error('fetchUserFromApi error', err);
    return null;
  }
}

export const handle = async ({ event, resolve }) => {
  // 1) Read the auth token from incoming cookie (HttpOnly cookie set by the API)
  const token = event.cookies.get('auth_token');

  // 2) Optionally: short-circuit if token missing
  if (!token) {
    event.locals.user = null;
    // let the request continue; pages can check event.locals.user
    return resolve(event);
  }

  // 3) Validate the token by calling the backend once per request,
  //    and populate event.locals.user if valid.
  //    Note: this is per-request — cheap enough if backend is fast,
  //    but we avoid additional backend calls by storing the user here.
  const user = await fetchUserFromApi(token);

  if (!user) {
    // token invalid/expired -> remove local user and optionally clear cookie
    event.locals.user = null;
    // If you prefer to clear cookie automatically, uncomment:
    event.cookies.delete('auth_token', { path: '/' });
    return resolve(event);
  }

  // 4) Attach useful auth info to event.locals for downstream server code & loads
  event.locals.user = user;
  event.locals.token = token;

  // 5) Proceed to resolve the request. You can inspect/modify response after resolve if needed.
  const response = await resolve(event);

  return response;
};

// Optional: intercept server-side fetches so they automatically forward auth token
export const handleFetch = async ({ request, event, fetch }) => {
  // Only forward the token to our API origin
  const url = new URL(request.url);
  if (url.origin === (new URL(API_BASE)).origin) {
    const token = event.locals.token ?? event.cookies.get('auth_token');
    if (token) {
      // Clone headers and add Authorization
      const headers = new Headers(request.headers);
      if (!headers.has('Authorization')) {
        headers.set('Authorization', `Token ${token}`);
      }
      request = new Request(request, { headers });
    }
  }
  return fetch(request);
};
