import { PUBLIC_API_ROOT_URL } from "$env/static/public";

export const actions = {
    create: async ({request, fetch, locals}) => {
        const requestData = await request.formData();
        // Isso opera na presunção que todo usuário é um candidato!!!!!!!!!!!!!!!!!!!!!!!!
        requestData.append("candidato", locals.user.id);
        const postData = await fetch(`${PUBLIC_API_ROOT_URL}/curriculos/`, {
            method: "POST",
            body: requestData,
        });

        if (postData.ok) return;
        else console.log(postData);

    },
    update: async ({request, fetch}) => {
        const data = await request.formData();
        const putData = await fetch(`${PUBLIC_API_ROOT_URL}/curriculos//`, {
            method: "PUT",
            body: data,
        });

        if (putData.ok) return;
        else console.error(putData);
    },
    delete: async ({request, fetch}) => {
        const data = await request.formData();
        const putData = await fetch(`${PUBLIC_API_ROOT_URL}/curriculos//`, {
            method: "DELETE",
        });

        if (putData.ok) return;
        else console.error(putData);
    },
}