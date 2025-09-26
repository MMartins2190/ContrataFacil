export async function load({url, fetch}){
    const pathnameArray = url.pathname.split("/");
    const pathnameId = pathnameArray[2];

    if (!isNaN(pathnameId) && pathnameId !== "0"){
        const fetchData = await fetch(`https://jsonplaceholder.typicode.com/posts/${pathnameId}`);
        const dataJSON = await fetchData.json();

        console.log(dataJSON);

        return {
            title: dataJSON.title,
            salary: dataJSON.userId,
            description: dataJSON.body,
            requisites: dataJSON.body,
            boosted: false,
        }
    }
    else {
        console.log("n");
    }
}