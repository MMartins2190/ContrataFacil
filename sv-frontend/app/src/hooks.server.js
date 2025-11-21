import { redirect } from "@sveltejs/kit";
import { PUBLIC_API_ROOT_URL } from "$env/static/public";

export const handle = async ({ event, resolve }) => {
  const userId = event.cookies.get("userId");
  const path = event.url.pathname;
  const isPathAllowed = path === "/login" || path === "/signin" || path === "/";
  console.log("~~User's requested route ", path);

  if (isPathAllowed) {
    console.log(`~~User's ${path} doesn't require user information`);
    return await resolve(event);
  }
  else if (!userId) {
    console.log(`~~${userId} is falsy and ${path} is not allowed`);
    throw redirect(303, "/login");
  }
  else {
    console.log(`~~${userId} is truthy! Server should fetch corresponding user`);
    try {
      const res = await fetch(`${PUBLIC_API_ROOT_URL}/usuarios/${userId}`);
      if (!res.ok) {
        console.error(`~~O servidor deu erro: ${res.statusCode} ${res.statusText}`);
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
