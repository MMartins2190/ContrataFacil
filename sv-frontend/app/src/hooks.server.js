import { redirect } from "@sveltejs/kit";

const usersUrl = 'http://127.0.0.1:8000/usuarios/';

export const handle = async ({ event, resolve }) => {
  const userId = event.cookies.get("userId");
  const currentPath = event.url.pathname;
  const isAcceptedRoute = currentPath === "/login" || currentPath === "/signin";

  if (!userId && isAcceptedRoute) {
    console.log("Was going to be redirected, but user going to right place");
    return await resolve(event);
  }
  else if (!userId) {
    console.log("Redirected, as userId is falsy!")
    throw redirect(303, "/login");
  }
  else {
    console.log(isAcceptedRoute, "May be false, and ", userId, "Is not a myth");
    try {
      const res = await fetch(`${usersUrl}${userId}`);
      if (!res.ok) {
        console.error("O servidor não gostou.", res.statusText);
        return await resolve(event);
      };
      event.locals.user = await res.json();
      return await resolve(event);
    } 
    catch (err) {
      console.error('Erro ao tentar pegar usuário', err);
      return await resolve(event);
    }
  }
}