const url = "http://127.0.0.1:8000/login/";

export const actions = {
    default: async ({request, fetch, cookies}) => {
        const data = await request.formData()
        try {
            const loginAttempt = await fetch(url,
        {
            method: "POST",
            body: data,
        })
        .then(res => res.json())
        .then(loginResponse=>{
            cookies.set("accessToken", loginResponse.access_token, { path: '/'});
            cookies.set("refreshToken", loginResponse.refresh_token, { path: '/'});
        });
        } catch (err) {
            console.warn("Erro de conexão", err);
        };
    }
}