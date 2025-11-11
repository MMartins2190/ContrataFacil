const apiUrl = "http://127.0.0.1:8000/vagas/";

export async function load({ fetch }){
    const openings = async () => {
        const fetchOpenings = await fetch(apiUrl);
        const openingsJSON = await fetchOpenings.json();
        return openingsJSON.filter(item => item.impulsionada === true);
    }

    return {
        openings: await openings(),
    }
}