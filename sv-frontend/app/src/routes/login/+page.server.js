const apiUrl = "http://127.0.0.1:8000/login/";

export const actions = {
    default: async ({request, fetch}) => {
        const formData = await request.formData();
        try {
            const loginAttempt = await fetch(apiUrl,
        {
            method: "POST",
            body: formData,
        })
        .then(res => "Nada");
        } catch (err) {
            console.warn("Erro de conexão", err);
        };
    }
}