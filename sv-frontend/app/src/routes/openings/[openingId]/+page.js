export async function load({url, fetch}){
    const pathnameArray = url.pathname.split("/");
    const pathnameId = pathnameArray[2];

    if (!isNaN(pathnameId) && pathnameId !== "0"){
        const fetchData = await fetch(`https://jsonplaceholder.typicode.com/posts/${pathnameId}`);
        const dataJSON = await fetchData.json();

        console.log(dataJSON);

        return {
            title: dataJSON.title,
            salary: 1212,
            description: dataJSON.body,
            requisites: dataJSON.body,
            boosted: true,
        }
    }
    else {
        console.log("n");
    }
}