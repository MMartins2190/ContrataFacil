import { PUBLIC_API_ROOT_URL } from "$env/static/public";

export async function load({ fetch }){
    const curriculums = async () => {
        const fetchCurriculums = await fetch(`${PUBLIC_API_ROOT_URL}/curriculos/`);
        return await fetchCurriculums.json();
    }

    return {
        curriculums: await curriculums(),
    }
}