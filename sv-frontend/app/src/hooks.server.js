import { redirect } from "@sveltejs/kit";

const usersUrl = 'http://127.0.0.1:8000/usuarios/';

export const handle = async ({ event, resolve }) => {
  const userId = event.cookies.get("userId");
  const path = event.url.pathname;
  console.log("~~User's requested route ", path);

  if (!userId && (path === "/login" || path === "/signin")) {
    console.log(`~~${userId} is falsy AND the ${path} is allowed`);
    return await resolve(event);
  }
  else if (!userId) {
    console.log(`~~${userId} is falsy but the ${path} is not allowed`);
    throw redirect(303, "/login");
  }
  else {
    console.log(`~~${userId} is truthy! Server should fetch corresponding user`);
    try {
      const res = await fetch(`${usersUrl}${userId}`);
      if (!res.ok) {
        console.error("~~O servidor não gostou.", res.statusText);
        return await resolve(event);
      };
      event.locals.user = await res.json();
      return await resolve(event);
    } 
    catch (err) {
      console.error('~~Erro ao tentar pegar usuário', err);
      return await resolve(event);
    }
  }
}
