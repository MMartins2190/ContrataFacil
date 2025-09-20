export async function load({url}){
    const id = url.searchParams.get("id");
    if (Number(id)){
    const fetchData = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const dataJSON = await fetchData.json();

    console.log("id", id, "\ndata", dataJSON);

    return {
        id: Number(id),
        name: dataJSON.title,
        salary: dataJSON.userId,
        description: dataJSON.body,
        requisites: dataJSON.body,
        boosted: false,
    }
    }
}