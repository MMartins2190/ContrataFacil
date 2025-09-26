export async function load({url}){
    const id = url.searchParams.get("id");
    if (!isNaN(id) && id !== "0"){
        const fetchData = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        const dataJSON = await fetchData.json();

        console.log("id", id, "\ndata", dataJSON);

        return {
            struct: dataJSON.title,
            text: dataJSON.userId,
            reviewsidk: dataJSON.body,
            user: dataJSON.body,
        }
    }
    else {
        console.log(`${id} não é um número`);
    }
}