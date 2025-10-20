export async function load({ fetch }){
    const posts = async () => {
        const fetchPosts = await fetch("https://jsonplaceholder.typicode.com/posts/");
        const postsJSON = await fetchPosts.json();
        return postsJSON.slice(0, 6);
    }

    return {
        posts: await posts(),
    }
}