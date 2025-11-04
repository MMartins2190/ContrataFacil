const apiUrl = "http://127.0.0.1:8000/vagas/";
const accessToken = "pee";
const requestObj = {
    headers: {
        Authorization: `Bearer ${accessToken}`,
    },
    method: "GET"
};

export async function load({url, fetch}){
    const pathnameArray = url.pathname.split("/");
    const pathnameId = pathnameArray[2];

    if (!isNaN(pathnameId) && Number(pathnameId) !== 0){
        const fetchData = await fetch(`${apiUrl}${pathnameId}/`, requestObj);
        const curriculumJSON = await fetchData.json();

        console.log(curriculumJSON);

        return {
            curriculumFile: curriculumJSON.curriculumFile,
            review: curriculumJSON.avaliacoesla,
            usuario: curriculumJSON.usuario,
        }
    }
    else {
        console.log("n");
    }
}