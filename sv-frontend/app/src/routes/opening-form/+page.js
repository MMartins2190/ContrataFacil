import { PUBLIC_API_ROOT_URL } from "$env/static/public";

export async function load({url, fetch}){
    const id = url.searchParams.get("id");
    if (!isNaN(id) && Number(id) > 0){
        const fetchData = await fetch(`${PUBLIC_API_ROOT_URL}/vagas/${id}/`);
        const openingJSON = await fetchData.json();

        return {
            title: openingJSON.titulo,
            salary: openingJSON.salario,
            description: openingJSON.descricao,
            requisites: openingJSON.requisitos,
            boosted: openingJSON.impulsionada,
        }
    }
}