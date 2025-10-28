export async function load({ fetch }){
    const curriculums = async () => {
        const fetchCurriculums = await fetch("http://127.0.0.1:8000/curriculos/");
        return await fetchCurriculums.json();
    }

    return {
        curriculums: await curriculums(),
    }
}