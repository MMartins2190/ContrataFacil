const apiUrl = "http://127.0.0.1:8000/curriculos/";
const accessToken = "pee";
const requestObj = {
    headers: {
        Authorization: `Bearer ${accessToken}`,
    },
    method: "GET"
};

export async function load({ fetch }){
    const curriculums = async () => {
        const fetchCurriculums = await fetch(apiUrl, requestObj);
        return await fetchCurriculums.json();
    }

    return {
        curriculums: await curriculums(),
    }
}