export async function load({ fetch }){
    const openings = async () => {
        const fetchOpenings = await fetch("http://127.0.0.1:8000/vagas/");
        return await fetchOpenings.json();
    }

    return {
       openings: await openings(),
    }
}