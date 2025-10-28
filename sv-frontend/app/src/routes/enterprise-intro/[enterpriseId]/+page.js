export async function load({url, fetch}){
    const pathnameArray = url.pathname.split("/");
    const pathnameId = pathnameArray[2];

    if (!isNaN(pathnameId) && Number(pathnameId) !== 0){
        const fetchData = await fetch(`http://127.0.0.1/empresas/${pathnameId}/`);
        const empresa = await fetchData.json();

        console.log(empresa);

        return {
            cnpj: empresa.title,
            name: empresa.nome,
            email: empresa.email,
            description: empresa.descricao,
        }
    }
    else {
        console.log("n");
    }
}