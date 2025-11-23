import { PUBLIC_API_ROOT_URL } from "$env/static/public";

export const actions = {
    create: async ({request, fetch, locals}) => {
        const requestData = await request.formData();
        // Isso opera na presunção que todo usuário é um candidato!!!!!!!!!!!!!!!!!!!!!!!!
        requestData.append("candidato", locals.user.id);
        requestData.append("curriculoNome", requestData.get("curriculo").name);
        const postData = await fetch(`${PUBLIC_API_ROOT_URL}/curriculos/`, {
            method: "POST",
            body: requestData,
        });

        if (postData.ok) return;
        else console.log(postData);
    },
    update: async ({request, fetch, url, locals}) => {
        const id = url.searchParams.get("id");
        const requestData = await request.formData();
        requestData.append("curriculoNome", requestData.get("curriculo").name);
        requestData.append("candidato", locals.user.id);
        const putData = await fetch(`${PUBLIC_API_ROOT_URL}/curriculos/${id}/`, {
            method: "PUT",
            body: requestData,
        });

        if (putData.ok) return;
        else console.error(putData);
    },
    delete: async ({fetch, url, locals}) => {
        const id = url.searchParams.get("id");
        const deleteData = await fetch(`${PUBLIC_API_ROOT_URL}/curriculos/${id}/`, {
            method: "DELETE",
        });

        if (deleteData.ok) return;
        else console.error(deleteData);
    },
}