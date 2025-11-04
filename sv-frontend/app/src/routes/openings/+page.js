const apiUrl = "http://127.0.0.1:8000/vagas/";
const requestObj = {
    headers: {
        Authorization: `Bearer ${accessToken}`,
    },
    credentials: 'include',
    method: "GET",
};

export async function load({ fetch }){
    const openings = async () => {
        const fetchOpenings = await fetch(apiUrl, requestObj);
        return await fetchOpenings.json();
    }

    return {
       openings: await openings(),
    }
}