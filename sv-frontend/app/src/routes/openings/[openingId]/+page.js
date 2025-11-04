const apiUrl = "http://127.0.0.1:8000/vagas/";
const accessToken = "pee";
const requestObj = {
    headers: {
        Authorization: `Bearer ${accessToken}`,
    },
    method: "GET"
};

export async function load({url, fetch}){
    const pathnameArray = url.pathname.split("/");
    const pathnameId = pathnameArray[2];

    if (!isNaN(pathnameId) && pathnameId !== "0"){
        const fetchData = await fetch(`${apiUrl}${pathnameId}/`, requestObj);
        const openingsJSON = await fetchData.json();

        console.log(openingsJSON);

        return {
            title: openingsJSON.titulo,
            // salary: openingsJSON.salario,
            description: openingsJSON.descricao,
            requisites: openingsJSON.requisitos,
            boosted: openingsJSON.impulsionado,
        }
    }
    else {
        console.warn("Houve uma falha ao carregar este conteúdo");
    }
}