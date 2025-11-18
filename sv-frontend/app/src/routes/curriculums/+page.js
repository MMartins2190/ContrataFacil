const curriculumsUrl = "http://127.0.0.1:8000/curriculos/";
const usersUrl = "http://127.0.0.1:8000/usuarios/";


export async function load({ fetch }){
    const curriculums = async () => {
        const fetchCurriculums = await fetch(curriculumsUrl);
        return await fetchCurriculums.json();
    }
    const users = async () => {
        const fetchUsers = await fetch(usersUrl);
        return await fetchUsers.json();
    }

    return {
        curriculums: await curriculums(),
        users: await users(),
    }
}