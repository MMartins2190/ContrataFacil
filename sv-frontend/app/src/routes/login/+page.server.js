const url = "http://127.0.0.1:8000/login/";

export const actions = {
    default: async ({request, fetch}) => {
        const data = await request.formData()
        try {
            const loginAttempt = await fetch(url,
        {
            method: "POST",
            body: data,
        }).then(res => res.json()).then(res=>console.log(res));
        } catch (err) {
            console.warn("Erro de conexão", err);
        };
    }
}