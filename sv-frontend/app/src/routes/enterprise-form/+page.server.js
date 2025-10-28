import { redirect } from "@sveltejs/kit";

const enterpriseURL = "http://127.0.0.1:8000/empresas/";

export const actions = {
    create: async ({request, fetch}) => {
        const data = await request.formData();

        fetch(enterpriseURL, {
            method: "POST",
            body: data,
        })
        .then(response => console.log(response))
        .catch(e => console.error(e))
    },
    update: async ({request, fetch, url}) => {
        console.log(url, "\n", request);
        const enterpriseId = url.searchParams.get("id");
        const data = await request.formData();

        fetch(`${enterpriseURL}${enterpriseId}/`, {
            method: "PUT",
            body: data,
        })
        .then(response => console.log(response))
        .catch(e => console.error(e))
    },
    delete: async ({request, fetch, url}) => {
        const enterpriseId = url.searchParams.get("id");
        const data = await request.formData();

        fetch(`${enterpriseURL}${enterpriseId}/`, {
            method: "DELETE",
        })
        .then(response => console.log(response))
        .catch(e => console.error(e))
    },
    redirect: () => {
        redirect(303, "/empresas");
    }
}