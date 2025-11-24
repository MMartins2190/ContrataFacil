import { PUBLIC_API_ROOT_URL } from "$env/static/public";

export async function load({url, fetch}){
    const id = url.searchParams.get("id");
    if (!isNaN(Number(id)) && Number(id) > 0){
        const fetchData = await fetch(`${PUBLIC_API_ROOT_URL}/empresas/${id}/`);
        const empresa = await fetchData.json();

        console.log("id", id, "\ndata", empresa);

        return {
            id: empresa.id,
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