export async function load({url}){
    const id = url.searchParams.get("id");
    if (!isNaN(id) && id !== "0"){
        const fetchData = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        const dataJSON = await fetchData.json();

        console.log("id", id, "\ndata", dataJSON);

        return {
            cnpj: dataJSON.title,
            name: dataJSON.userId,
            email: dataJSON.body,
            description: dataJSON.body,
        }
    }
    else {
        console.log(`${id} não é um número`);
    }
}