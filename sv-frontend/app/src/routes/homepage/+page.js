export async function load({ fetch }){
    const users = async () => {
        const fetchUsers = await fetch("https://jsonplaceholder.typicode.com/users/");
        return await fetchUsers.json();
    }

    return {
        users: await users(),
    }
}