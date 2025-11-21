import { PUBLIC_API_ROOT_URL } from "$env/static/public";

export async function load({ fetch }){
    const openings = async () => {
        const fetchOpenings = await fetch(`${PUBLIC_API_ROOT_URL}/vagas`);
        if (!fetchOpenings.ok) console.log("Erro em buscar vagas");
        const openingsJSON = await fetchOpenings.json();
        return openingsJSON.filter(item => item.impulsionada === true);
    }

    return {
        openings: await openings(),
    }
}