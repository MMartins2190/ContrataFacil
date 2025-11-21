import { PUBLIC_API_ROOT_URL } from "$env/static/public";

export async function load({ fetch }){
    const openings = async () => {
        const fetchOpenings = await fetch(`${PUBLIC_API_ROOT_URL}/vagas`);
        return await fetchOpenings.json();
    }

    return {
       openings: await openings(),
    }
}