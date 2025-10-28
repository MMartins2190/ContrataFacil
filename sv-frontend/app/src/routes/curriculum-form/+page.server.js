import { redirect } from "@sveltejs/kit";

const curriculumsURL = "http://127.0.0.1:8000/curriculos/";

export const actions = {
    create: async ({request, fetch}) => {
        const data = await request.formData();

        fetch(curriculumsURL, {
            method: "POST",
            body: data,
        })
        .then(response => console.log(response))
        .catch(e => console.error(e))
    },
    update: async ({request, fetch, url}) => {
        console.log(url, "\n", request);
        const curriculumId = url.searchParams.get("id");
        const data = await request.formData();

        fetch(`${curriculumsURL}${curriculumId}/`, {
            method: "PUT",
            body: data,
        })
        .then(response => console.log(response))
        .catch(e => console.error(e))
    },
    delete: async ({request, fetch, url}) => {
        const curriculumId = url.searchParams.get("id");
        const data = await request.formData();

        fetch(`${curriculumsURL}${curriculumId}/`, {
            method: "DELETE",
        })
        .then(response => console.log(response))
        .catch(e => console.error(e))
    },
    redirect: () => {
        redirect(303, "/curriculums");
    }
}