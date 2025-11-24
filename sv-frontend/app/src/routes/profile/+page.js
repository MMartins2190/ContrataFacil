import { PUBLIC_API_ROOT_URL } from "$env/static/public";

export const load = async ({ parent, fetch }) => {
    async function openings() {
        const fetchData = await fetch(`${PUBLIC_API_ROOT_URL}/vagas/`);
        const openingsJSON = await fetchData.json();

        return openingsJSON;
        }

    async function candidacies() {
        const fetchData = await fetch(`${PUBLIC_API_ROOT_URL}/candidaturas/`);
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