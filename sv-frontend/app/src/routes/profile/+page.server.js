import { PUBLIC_API_ROOT_URL } from "$env/static/public";
import { redirect } from "@sveltejs/kit";

export const actions = {
    update: async ({request, fetch, locals}) => {
            console.log("UPDATE");
            const requestData = await request.formData();
            console.log("request", requestData)
            const putData = await fetch(`${PUBLIC_API_ROOT_URL}/usuarios/${locals.user.id}/`, {
                method: "PUT",
                body: requestData,
            });
    
            if (putData.ok) return;
            else console.error(putData);
    },
    logout: async ({cookies}) => {
        cookies.set("userId", 0, {
                path: '/',
                sameSite: 'lax',
                httpOnly: true,
                secure: false,
                maxAge: -1,
            });
        return redirect(303, "/");
    },
    delete: async ({fetch, locals}) => {
        console.log("DELETE ACCOUNT");
        const deleteData = await fetch(`${PUBLIC_API_ROOT_URL}/usuarios/${locals.user.id}/`, {
            method: "DELETE",
        });

        if (deleteData.ok) return redirect(303, "/");
        else console.error(deleteData);
    }
}