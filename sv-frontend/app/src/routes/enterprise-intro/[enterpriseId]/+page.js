const enterpriseUrl = "http://127.0.0.1:8000/empresas/";
const openingsUrl = "http://127.0.0.1:8000/vagas/";

export async function load({url, fetch}){
    const pathnameArray = url.pathname.split("/");
    const pathnameId = pathnameArray[2];

    if (!isNaN(pathnameId) && Number(pathnameId) > 0) {
        async function enterprise() {
            const fetchData = await fetch(`${enterpriseUrl}${pathnameId}/`);
            const enterpriseJSON = await fetchData.json();
    
            return {
                cnpj: enterpriseJSON.cnpj,
                name: enterpriseJSON.nome,
                email: enterpriseJSON.email,
                description: enterpriseJSON.descricao,
                paid: enterpriseJSON.plano_pago,
            }
        }

        async function openings() {
            const fetchData = await fetch(openingsUrl);
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