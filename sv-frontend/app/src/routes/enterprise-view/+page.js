export async function load({url, fetch}){
    const pathnameArray = url.pathname.split("/");
    // const pathnameId = pathnameArray[2];
    const pathnameId = 1;

    if (!isNaN(pathnameId) && pathnameId !== "0"){
        const fetchData = await fetch(`https://jsonplaceholder.typicode.com/posts/${pathnameId}`);
        const dataJSON = await fetchData.json();

        console.log(dataJSON);

        return {
            cnpj: dataJSON.title,
            name: "XPTechO Industries",
            email: "ligma",
            description: dataJSON.body,
        }
    }
    else {
        console.log("n");
    }
}