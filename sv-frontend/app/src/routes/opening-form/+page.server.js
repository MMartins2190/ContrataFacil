import { redirect } from "@sveltejs/kit";

const openingsURL = "http://127.0.0.1:8000/vagas/";

export const actions = {
    create: async ({request, fetch}) => {
        const data = await request.formData();

        fetch(openingsURL, {
            method: "POST",
            body: data,
        })
        .then(response => console.log(response))
        .catch(e => console.error(e))
    },
    update: async ({request, fetch, url}) => {
        console.log(url, "\n", request);
        const openingId = url.searchParams.get("id");
        const data = await request.formData();

        fetch(`${openingsURL}${openingId}/`, {
            method: "PUT",
            body: data,
        })
        .then(response => console.log(response))
        .catch(e => console.error(e))
    },
    delete: async ({request, fetch, url}) => {
        const openingId = url.searchParams.get("id");
        const data = await request.formData();

        fetch(`${openingsURL}${openingId}/`, {
            method: "DELETE",
        })
        .then(response => console.log(response))
        .catch(e => console.error(e))
    },
    redirect: () => {
        redirect(303, "/openings");
    }
}