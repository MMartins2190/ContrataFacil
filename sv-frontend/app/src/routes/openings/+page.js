import { PUBLIC_API_ROOT_URL } from "$env/static/public";

export async function load({ fetch, parent }) {
    const parentData =  await parent();
    const openings = async () => {
        const fetchOpenings = await fetch(`${PUBLIC_API_ROOT_URL}/vagas`);
        return await fetchOpenings.json();
    }
    
    return {
        user: parentData.user,
        openings: await openings(),
    }
}