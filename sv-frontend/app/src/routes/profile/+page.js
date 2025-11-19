const openingsUrl = "http://127.0.0.1:8000/vagas/";
const candidaciesUrl = "http://127.0.0.1:8000/candidaturas/";

export const load = async ({ parent, fetch }) => {
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
    const parentData = await parent();
    console.log("data front layout", parentData);

    return {
        user: parentData.user,
        openings: await openings(),
        candidacies: await candidacies(),
    };
}