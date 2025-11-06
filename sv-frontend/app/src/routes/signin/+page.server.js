const urlString = "http://127.0.0.1:8000/usuarios/";

export const actions = {
    default: async ({ request, fetch }) => {
        const requestData = request.formData();
        fetch(urlString, {
            method: "POST",
            body: requestData,
        })
        .then(res => {
            if (res.ok) console.log("All fine and dandy");
        })
        .catch(err => console.warn("All shits and giggles", err));
    }
}