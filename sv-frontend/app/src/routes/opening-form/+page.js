const apiUrl = "http://127.0.0.1:8000/vagas/";

export async function load({url, fetch}){
    const id = url.searchParams.get("id");
    if (!isNaN(id) && Number(id) > 0){
        const fetchData = await fetch(`${apiUrl}${id}/`);
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