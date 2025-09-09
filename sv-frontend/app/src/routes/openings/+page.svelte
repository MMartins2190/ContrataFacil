<script>
    import Opening from "$lib/components/opening.svelte";
    
    let { data } = $props();
    console.log(data);
</script>

<div class="list-vacancies">
    <input class="search-vacancies" id="search-input" name="query" type="search" placeholder="Procure por uma vaga   %lupa%">
    <div class="vacancies-data" id="vacancies-data">
        {#each data.users as user}
        <Opening name={user.name}/>
        {/each}
    </div>
</div>
<style>
    *{
        border: none;
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: Arial, Helvetica, sans-serif;
    }

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
        margin: 1rem 5rem;
        outline: 2px solid yellowgreen;
    }
    .vacancies-data{
        outline: 2px solid lightslategray;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr;
    }
</style>