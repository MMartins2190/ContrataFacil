const usersUrl = "http://127.0.0.1:8000/usuarios/";
const openingsUrl = "http://127.0.0.1:8000/vagas/";
const candidaciesUrl = "http://127.0.0.1:8000/candidaturas/";

export async function load({fetch}){
    const pathnameId = 1; // Definido por cookie;

    if (!isNaN(Number(pathnameId)) && Number(pathnameId) > 0) {
        async function usuario() {
            const fetchData = await fetch(`${usersUrl}${pathnameId}/`);
            const userJSON = await fetchData.json();
    
            return {
                profilePicture: userJSON.foto_perfil,
                username: userJSON.username,
                email: userJSON.email,
                cpf: userJSON.cpf,
                telephone: userJSON.telefone,
            }
        }

        async function openings() {
            const fetchData = await fetch(openingsUrl);
            const openingsJSON = await fetchData.json();

            return openingsJSON;
        }

        async function candidacies() {
            const fetchData = await fetch(candidaciesUrl);
            const candidaciesJSON = await fetchData.json();

            return candidaciesJSON;
        }

        return {
            user: await usuario(),
            openings: await openings(),
            candidacies: await candidacies(),
        };
    }
    else {
        console.log("Identificador inválido");
    }
}