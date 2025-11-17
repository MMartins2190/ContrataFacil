import { redirect } from "@sveltejs/kit";

const openingsURL = "http://127.0.0.1:8000/vagas/";

export const actions = {
    create: async ({request, fetch}) => {
        const data = await request.formData();
        const postData = await fetch(openingsURL, {
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
        const putData = await fetch(`${openingsURL}${openingId}/`, {
            method: "PUT",
            body: data,
        });

        if (putData.ok) redirect(303, "/openings")
        else console.error(putData);
    },
    delete: async ({request, fetch, url}) => {
        const openingId = url.searchParams.get("id");
        const data = await request.formData();
        const putData = await fetch(`${openingsURL}${openingId}/`, {
            method: "DELETE",
        });

        if (putData.ok) redirect(303, "/openings")
        else console.error(putData);
    },
}