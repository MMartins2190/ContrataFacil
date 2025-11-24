import { PUBLIC_API_ROOT_URL } from "$env/static/public";

export async function load({url, fetch}){
    const pathnameArray = url.pathname.split("/");
    const pathnameId = pathnameArray[2];

    if (!isNaN(pathnameId) && Number(pathnameId) > 0) {
        async function enterprise() {
            const fetchData = await fetch(`${PUBLIC_API_ROOT_URL}/empresas/${pathnameId}/`);
            const enterpriseJSON = await fetchData.json();
    
            return {
                id: enterpriseJSON.id,
                cnpj: enterpriseJSON.cnpj,
                name: enterpriseJSON.nome,
                email: enterpriseJSON.email,
                description: enterpriseJSON.descricao,
                paid: enterpriseJSON.plano_pago,
            }
        }

        async function openings() {
            const fetchData = await fetch(`${PUBLIC_API_ROOT_URL}/vagas/`);
            const openingsJSON = await fetchData.json();
    
            return openingsJSON;
        }

        return {
            empresa: await enterprise(),
            openings: await openings(),
        }
    }
    else {
        console.log("ID inválido");
    }
}