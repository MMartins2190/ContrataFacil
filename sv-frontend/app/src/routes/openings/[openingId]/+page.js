export async function load({url, fetch}){
    const pathnameArray = url.pathname.split("/");
    const pathnameId = pathnameArray[2];

    if (!isNaN(pathnameId) && pathnameId !== "0"){
        const fetchData = await fetch(`http://127.0.0.1:8000/vagas/${pathnameId}`);
        const openingsJSON = await fetchData.json();

        console.log(openingsJSON);

        return {
            title: openingsJSON.titulo,
            salary: openingsJSON.salario,
            description: openingsJSON.descricao,
            requisites: openingsJSON.requisitos,
            boosted: true,
        }
    }
    else {
        console.log("n");
    }
}