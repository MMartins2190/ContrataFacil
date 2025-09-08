export async function load({ fetch }){
    try{
    const users = async () => {
        const fetchUsers = await fetch("https://jsonplaceholder.typicode.com/users/");
        return await fetchUsers.json();
    }

    return {
        users: await users(),
    }
    }
    catch(e){
        console.error(e);
    }
}