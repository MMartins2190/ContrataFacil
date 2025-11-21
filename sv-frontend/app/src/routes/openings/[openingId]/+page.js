import { PUBLIC_API_ROOT_URL } from "$env/static/public";

export async function load({parent, url, fetch}){
    const pathnameArray = url.pathname.split("/");
    const pathnameId = pathnameArray[2];

    if (!isNaN(pathnameId) && Number(pathnameId) > 0){
        async function currentOpening() {
            const fetchData = await fetch(`${PUBLIC_API_ROOT_URL}/vagas/${pathnameId}/`);
            if (!fetchData.ok) console.log(await fetchData.json());
            const openingJSON = await fetchData.json();
    
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
            const fetchData = await fetch(`${PUBLIC_API_ROOT_URL}/vagas/`);
            if (!fetchData.ok) console.log(await fetchData.json());
            const openingsJSON = await fetchData.json();
            const otherOpenings = openingsJSON.filter((opening => opening.id !== Number(pathnameId)));

            return otherOpenings;
        }

        async function curriculums() {
            const fetchData = await fetch(`${PUBLIC_API_ROOT_URL}/curriculos/`);
            if (!fetchData.ok) console.log(await fetchData.json());
            const curriculumsJSON = await fetchData.json();

            return curriculumsJSON;
        }

        async function candidacy() {
            const layoutData = await parent();
            const fetchData = await fetch(`${PUBLIC_API_ROOT_URL}/candidaturas/`);
            if (!fetchData.ok) console.log(await fetchData.json());
            const candidaciesJSON = await fetchData.json();
            const candidacy = candidaciesJSON.find(candidacy => candidacy.vaga === Number(pathnameId));

            return candidacy;
        }

        return {
            currentOpening: await currentOpening(),
            openings: await openings(),
            curriculums: await curriculums(),
            candidacy: await candidacy(), 
        }
    }
    else {
        console.warn("O identificador desse recurso não é um número válido");
    };
}