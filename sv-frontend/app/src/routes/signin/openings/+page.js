export async function load({ fetch }){
    const posts = async () => {
        const fetchPosts = await fetch("https://jsonplaceholder.typicode.com/posts/");
        return await fetchPosts.json();
    }

    return {
        posts: await posts(),
    }
}