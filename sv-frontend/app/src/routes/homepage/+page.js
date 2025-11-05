
export async function load({ fetch }){
    const openings = async () => {
        const fetchOpenings = await fetch("http://127.0.0.1:8000/vagas/");
        const openingsJSON = await fetchOpenings.json();
        return openingsJSON.slice(0, 6);
    }

    return {
        openings: await openings(),
    }
}