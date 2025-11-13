const openingsUrl = "http://127.0.0.1:8000/vagas/";
const curriculumsUrl = "http://127.0.0.1:8000/curriculos/";
const candidaciesUrl = "http://127.0.0.1:8000/candidaturas/";

export async function load({url, fetch}){
    const pathnameArray = url.pathname.split("/");
    const pathnameId = pathnameArray[2];

    if (!isNaN(pathnameId) && Number(pathnameId) !== 0){
        async function openings() {
            const fetchData = await fetch(`${openingsUrl}${pathnameId}/`);
            const openingsJSON = await fetchData.json();
    
            console.log(openingsJSON);
    
            return {
                title: openingsJSON.titulo,
                // salary: openingsJSON.salario,
                description: openingsJSON.descricao,
                requisites: openingsJSON.requisitos,
                boosted: openingsJSON.impulsionada,
            }
        }
        return {
            openings: openings(), 
        }
    }
    else {
        console.warn("O identificador desse recurso não é um número válido");
    }
}