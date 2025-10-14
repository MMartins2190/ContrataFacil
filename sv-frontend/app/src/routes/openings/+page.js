export async function load({ fetch }){
    const posts = async () => {
        const fetchPosts = await fetch("http://127.0.0.1:8000/vagas/"); //CORS
        return await fetchPosts.json();
    }

    return {
        posts: await posts(),
    }
}