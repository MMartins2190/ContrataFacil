export async function load({url}){
    const id = url.searchParams.get("id");
    if (!isNaN(id) && Number(id) !== 0){
        const fetchData = await fetch(`http://127.0.0.1/empresas/${id}/`);
        const empresa = await fetchData.json();

        console.log("id", id, "\ndata", empresa);

        return {
            cnpj: empresa.cnpj,
            name: empresa.nome,
            email: empresa.email,
            description: empresa.descricao,
        }
    }
    else {
        console.log(`${id} não é um número`);
    }
}