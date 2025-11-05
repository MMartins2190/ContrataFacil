export async function load({fetch}){
    const fetchToken = await fetch("http://127.0.0.1:8000/csrf/");

    return {
        csrfToken: await fetchToken.json()
    }
}