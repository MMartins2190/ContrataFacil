<script>
    import Opening from "$lib/components/opening.svelte";
    
    let { data } = $props();
</script>

<title>Vagas</title>

<div class="list-vacancies">
    <input class="search-vacancies" id="search-input" name="query" type="search" placeholder="Procure por uma vaga   %lupa%">
    <div class="vacancies-data" id="vacancies-data">
        {#each data.posts as post}
        <Opening name={post.title} description={post.body}/>
        {/each}
    </div>
</div>
<style>
    .search-vacancies{
        outline: 2px solid purple;
        background-color: #d9d9d9;
        border-radius: 30px;
        width: 100%;
        height: 4rem;
        font-size: 3ch;
        margin-bottom: 5rem;
    }
    
    .list-vacancies{
        margin: 3rem 5rem;
        outline: 2px solid yellowgreen;
    }
    .vacancies-data{
        outline: 2px solid lightslategray;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr;
    }
</style>