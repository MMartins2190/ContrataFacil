const usersUrl = 'http://127.0.0.1:8000/usuarios/';

export const handle = async ({ event, resolve }) => {
  const userId = event.cookies.get("userId");

  if (!userId) await resolve(event);
  
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
};