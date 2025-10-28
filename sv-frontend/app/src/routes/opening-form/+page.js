export async function load({url, fetch}){
    const id = url.searchParams.get("id");
    if (!isNaN(id) && Number(id) !== 0){
        const fetchData = await fetch(`http://127.0.0.1:8000/vagas/${id}/`);
        const openingsJSON = await fetchData.json();

        return {
            title: openingsJSON.titulo,
            // salary: openingsJSON.salario,
            description: openingsJSON.descricao,
            requisites: openingsJSON.requisitos,
            boosted: openingsJSON.impulsionado,
        }
    }
}