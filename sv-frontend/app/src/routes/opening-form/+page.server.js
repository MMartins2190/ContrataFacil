const openingsURL = "http://127.0.0.1:8000/vagas/";

export const actions = {
    create: async ({request, fetch}) => {
        const data = await request.formData();
        console.log("Criar", data);

        fetch(openingsURL, {
            method: "POST",
            body: data,
        }).catch(e => console.error(e))
    },
    update: async ({request, fetch, url}) => {
        const openingId = url.pathname.split("/")[2];
        const data = await request.formData();
        console.log("Alterar", data);

        fetch(openingsURL + openingId, {
            method: "PUT",
            body: data,
        }).catch(e => console.error(e))
    },
    delete: async ({request, fetch}) => {
        const data = await request.formData();
        console.log("Apagar", data);

        fetch(openingsURL, {
            method: "DELETE",
        }).catch(e => console.error(e))
    },
}