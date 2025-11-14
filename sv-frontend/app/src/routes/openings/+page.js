const apiUrl = "http://127.0.0.1:8000/vagas/";
const requestAuth = {
    method: "GET",
    credentials: "include",
}

export async function load({ fetch }){
    const openings = async () => {
            const fetchOpenings = await fetch(apiUrl, requestAuth);
            return await fetchOpenings.json();
    }

    return {
       openings: await openings(),
    }
}