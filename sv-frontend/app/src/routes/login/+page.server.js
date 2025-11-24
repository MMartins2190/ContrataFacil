import { redirect } from "@sveltejs/kit";
import { PUBLIC_API_ROOT_URL } from "$env/static/public";

export const actions = {
    default: async ({request, fetch, cookies}) => {
        const data = await request.formData();
        const loginAttempt = await fetch(`${PUBLIC_API_ROOT_URL}/login/`, {
            method: "POST",
            body: data,
        });
        if (loginAttempt.ok) {
            console.log("Deu certo!");
            const responseBody = await loginAttempt.json();
            console.log(responseBody);
            cookies.set("userId", JSON.stringify(responseBody.user), {
                path: '/',
                sameSite: 'lax',
                httpOnly: true,
                secure: false,
                maxAge: 60 * 60 * 24 * 2,
            });
            redirect(303, "/");
        } else {
            console.log(loginAttempt);
        };
}}