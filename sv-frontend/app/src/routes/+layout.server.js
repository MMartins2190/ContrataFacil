export async function load({locals}) {
    const user = locals.user || {};
    console.log("Objeto usuário do LAYOUT servidor", user);

    return { user: user};
}