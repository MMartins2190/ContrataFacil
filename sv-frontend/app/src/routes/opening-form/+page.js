export async function load({url, fetch}){
    const id = url.searchParams.get("id");
    if (!isNaN(id) && id !== "0"){
        const fetchData = await fetch(`http://127.0.0.1:8000/vagas/${id}`);
        const dataJSON = await fetchData.json();

        console.log("id", id, "\ndata", dataJSON);

        return {
            title: openingsJSON.titulo,
            // salary: openingsJSON.salario,
            description: openingsJSON.descricao,
            requisites: openingsJSON.requisitos,
            boosted: openingsJSON.impulsionado,
        }
    }
    else {
        console.log(`${id} não é um número`);
    }
}