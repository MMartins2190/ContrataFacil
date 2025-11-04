const apiUrl = "http://127.0.0.1:8000/vagas/";
const accessToken = "pee";
const requestObj = {
    headers: {
        Authorization: `Bearer ${accessToken}`,
    },
    method: "GET"
};

export async function load({url, fetch}){
    const id = url.searchParams.get("id");
    if (!isNaN(id) && Number(id) !== 0){
        const fetchData = await fetch(`${apiUrl}${id}/`, requestObj);
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