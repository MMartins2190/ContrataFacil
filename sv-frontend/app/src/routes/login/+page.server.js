import { redirect } from "@sveltejs/kit";

const apiUrl = "http://127.0.0.1:8000/login/";

export const actions = {
    default: async ({request, fetch, cookies}) => {
        try {
        const data = await request.formData();
        const loginAttempt = await fetch(apiUrl, {
            method: "POST",
            body: data,
        });
        if (loginAttempt.ok) {
            cookies.set("auth_token", true, {
                path: '/',
                sameSite: 'lax',
                httpOnly: true,
                secure: false,
                maxAge: 60 * 60 * 24 * 2,
            });
            redirect(303, "/");
        } else {
            console.error(loginAttempt);
        }
    }
    catch (e) { console.error(e); }
}}