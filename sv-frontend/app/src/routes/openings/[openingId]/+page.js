const openingsUrl = "http://127.0.0.1:8000/vagas/";
const curriculumsUrl = "http://127.0.0.1:8000/curriculos/";
const candidaciesUrl = "http://127.0.0.1:8000/candidaturas/";

export async function load({url, fetch}){
    const pathnameArray = url.pathname.split("/");
    const pathnameId = pathnameArray[2];

    if (!isNaN(pathnameId) && Number(pathnameId) > 0){
        async function currentOpening() {
            const fetchData = await fetch(`${openingsUrl}${pathnameId}/`);
            const openingJSON = await fetchData.json();
    
            console.log(openingJSON);
    
            return {
                id: openingJSON.id,
                title: openingJSON.titulo,
                salary: openingJSON.salario,
                description: openingJSON.descricao,
                requisites: openingJSON.requisitos,
                boosted: openingJSON.impulsionada,
            }
        }

        async function openings() {
            const fetchData = await fetch(openingsUrl);
            const openingsJSON = await fetchData.json();
            const otherOpenings = openingsJSON.filter((opening => opening.id !== Number(pathnameId)));

            return otherOpenings;
        }

        async function curriculums() {
            const fetchData = await fetch(curriculumsUrl);
            const curriculumsJSON = await fetchData.json();

            return curriculumsJSON;
        }

        async function candidacies() {
            const fetchData = await fetch(candidaciesUrl);
            const candidaciesJSON = await fetchData.json();

            return candidaciesJSON;
        }

        return {
            currentOpening: await currentOpening(),
            openings: await openings(),
            curriculums: await curriculums(),
            candidacies: await candidacies(), 
        }
    }
    else if (Number(pathnameId) === 0) return
    else {
        console.warn("O identificador desse recurso não é um número válido");
    };
}