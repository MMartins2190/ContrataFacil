export async function load({url}){
    const id = url.searchParams.get("id");
    if (!isNaN(id) && Number(id) !== 0){
        const fetchData = await fetch(`http://127.0.0.1/posts/${id}/`);
        const curriculo = await fetchData.json();

        console.log("id", id, "\ndata", curriculo);

        return {
            curriculums: curriculo.curriculos,
            user: curriculo.usuario
        }
    }
    else {
        console.log(`${id} não é um número`);
    }
}