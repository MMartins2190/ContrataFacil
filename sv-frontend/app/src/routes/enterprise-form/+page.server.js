import { redirect } from "@sveltejs/kit";
import { PUBLIC_API_ROOT_URL } from "$env/static/public";

export const actions = {
    create: async ({request, fetch}) => {
        const data = await request.formData();
        const postData = await fetch(`${PUBLIC_API_ROOT_URL}/empresas/`, {
            method: "POST",
            body: data,
        });

        if (postData.ok) return redirect(303/ "/enterprise-intro");
        else console.log(await postData.json());
    },
    update: async ({request, fetch, url}) => {
        console.log(`UPDATE URL: ${url}\n RQUEST: ${request}`);
        const enterpriseId = url.searchParams.get("id");
        const data = await request.formData();
        console.log(`ID USADO: ${enterpriseId}\n`);

        const putData = await fetch(`${PUBLIC_API_ROOT_URL}/empresas/${enterpriseId}/`, {
            method: "PUT",
            body: data,
        });

        if (putData.ok) redirect(303, "/");
        else console.log(await putData.json());
        
    },
    delete: async ({request, fetch, url}) => {
        console.log(url, "\n", request);
        const enterpriseId = url.searchParams.get("id");

        const deleteData = await fetch(`${PUBLIC_API_ROOT_URL}/empresas/${enterpriseId}/`, {
            method: "DELETE",
        });

        if (deleteData.ok) redirect(303, "/");
        else console.log(await deleteData.json());
    },
}