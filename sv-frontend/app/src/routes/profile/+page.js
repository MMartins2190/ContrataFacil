const apiUrl = "http://127.0.0.1:8000/usuarios/";
const accessToken = "pee";
const requestObj = {
    headers: {
        Authorization: `Bearer ${accessToken}`,
    },
    method: "GET"
};

export async function load({url, fetch}){
    const pathnameArray = url.pathname.split("/");
    // const pathnameId = pathnameArray[2];
    const pathnameId = 1;

    if (!isNaN(pathnameId) && pathnameId !== "0"){
        const fetchData = await fetch(`${apiUrl}${pathnameId}/`, requestObj);
        const dataJSON = await fetchData.json();

        console.log(dataJSON);

        return {
            profilePicture: dataJSON.title,
            name: "Faraday Oersted",
            password: dataJSON.body,
            email: "ligma",
            cpf: "000.000.000-00-X",
        }
    }
    else {
        console.log("n");
    }
}