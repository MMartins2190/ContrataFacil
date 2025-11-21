import { redirect } from "@sveltejs/kit";
import { PUBLIC_API_ROOT_URL } from "$env/static/public";

export const actions = {
    create: async ({request, fetch}) => {
        const data = await request.formData();
        const postData = await fetch(`${PUBLIC_API_ROOT_URL}/vagas/`, {
            method: "POST",
            body: data,
        });

        if (postData.ok) {
            redirect(303, "/openings");
        } else {
            console.log(postData);
            console.log(data);
        }

    },
    update: async ({request, fetch, url}) => {
        const openingId = url.searchParams.get("id");
        const data = await request.formData();
        const putData = await fetch(`${PUBLIC_API_ROOT_URL}/vagas/${openingId}/`, {
            method: "PUT",
            body: data,
        });

        if (putData.ok) redirect(303, "/openings")
        else console.error(putData);
    },
    delete: async ({request, fetch, url}) => {
        const openingId = url.searchParams.get("id");
        const data = await request.formData();
        const putData = await fetch(`${PUBLIC_API_ROOT_URL}/vagas/${openingId}/`, {
            method: "DELETE",
        });

        if (putData.ok) redirect(303, "/openings")
        else console.error(putData);
    },
}