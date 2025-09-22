export async function load({url}){
    const id = url.searchParams.get("id");
    if (!isNaN(id) && id !== "0"){
        const fetchData = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        const dataJSON = await fetchData.json();

        console.log("id", id, "\ndata", dataJSON);

        return {
            struct: dataJSON.title,
            salary: dataJSON.userId,
            description: dataJSON.body,
            requisites: dataJSON.body,
            boosted: false,
        }
    }
    else {
        console.log(`${id} não é um número`);
    }
}