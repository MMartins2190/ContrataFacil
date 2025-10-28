export async function load({url, fetch}){
    const pathnameArray = url.pathname.split("/");
    const pathnameId = pathnameArray[2];

    if (!isNaN(pathnameId) && Number(pathnameId) !== 0){
        const fetchData = await fetch(`http://127.0.0.1/curriculos/${pathnameId}/`);
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