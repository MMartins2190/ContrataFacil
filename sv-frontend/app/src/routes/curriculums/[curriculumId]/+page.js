const curriculumsUrl = "http://127.0.0.1:8000/curriculos/";
const candidatesUrl = "http://127.0.0.1:8000/candidatos/";
const candidaciesUrl = "http://127.0.0.1:8000/candidaturas/";
const openingsUrl = "http://127.0.0.1:8000/vagas/";

export async function load({url, fetch}){
    const pathnameArray = url.pathname.split("/");
    const pathnameId = pathnameArray[2];

    if (!isNaN(pathnameId) && Number(pathnameId) > 0){
        async function currentCurriculum() {
            const fetchData = await fetch(`${curriculumsUrl}${pathnameId}/`);
            const curriculumJSON = await fetchData.json();

            return {
                curriculo: curriculumJSON.curriculo,
                // usuario: curriculumJSON.usuario,
            }
        }
        
        // async function candidates() {
        //     const fetchData = await fetch(candidatesUrl);
        //     const candidatesJSON = await fetchData.json();

        //     return candidatesJSON;
        // }

        async function candidacies() {
            const fetchData = await fetch(candidaciesUrl);
            const candidaciesJSON = await fetchData.json();

            return candidaciesJSON;
        }

        async function openings() {
            const fetchData = await fetch(openingsUrl);
            const openingsJSON = await fetchData.json();

            return openingsJSON;
        }

        return {
            currentCurriculum: await currentCurriculum(),
            // candidates: await candidates(),
            candidacies: await candidacies(),
            openings: await openings(),
        }
    }
    else if (Number(pathnameId === 0)) {
        console.log("Hora de criar um novo currículo");
    }
    else {
        console.log("Identificador de recurso é inválido");
    }
}