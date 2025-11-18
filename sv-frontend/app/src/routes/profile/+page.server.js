const openingsUrl = "http://127.0.0.1:8000/vagas/";
const candidaciesUrl = "http://127.0.0.1:8000/candidaturas/";

export async function load(event) {
    const user = event.locals.user || {};
    console.log("Objeto usuário", user);

    async function openings() {
        const fetchData = await fetch(openingsUrl);
        const openingsJSON = await fetchData.json();

        return openingsJSON;
        }

    async function candidacies() {
        const fetchData = await fetch(candidaciesUrl);
        const candidaciesJSON = await fetchData.json();

        return candidaciesJSON;
    }    

    return {
        user: user,
        openings: await openings(),
        candidacies: await candidacies(),
    };
}