import { redirect } from "@sveltejs/kit";

const apiUrl = "http://127.0.0.1:8000/login/";

export const actions = {
    default: async ({request, fetch, cookies}) => {
        const data = await request.formData();
        const loginAttempt = await fetch(apiUrl, {
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