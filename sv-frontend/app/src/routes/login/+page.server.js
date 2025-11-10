import { redirect } from "@sveltejs/kit";

const apiUrl = "http://127.0.0.1:8000/login/";

export const actions = {
    default: async ({request, fetch}) => {
        const formData = await request.formData();
            const loginAttempt = await fetch(apiUrl,
        {
            method: "POST",
            body: formData,
        })
        .then(res => "OK");

        if (loginAttempt === "OK") {
            redirect(303, "/homepage");
        }
}}