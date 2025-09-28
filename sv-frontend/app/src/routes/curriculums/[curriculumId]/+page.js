export async function load({url, fetch}){
    const pathnameArray = url.pathname.split("/");
    const pathnameId = pathnameArray[2];

    if (!isNaN(pathnameId) && pathnameId !== "0"){
        const fetchData = await fetch(`https://jsonplaceholder.typicode.com/comments/${pathnameId}`);
        const dataJSON = await fetchData.json();

        console.log(dataJSON);

        return {
            structure: dataJSON.name,
            text: dataJSON.body,
            review: dataJSON.title,
            user: {},
        }
    }
    else {
        console.log("n");
    }
}