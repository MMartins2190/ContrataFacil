<!-- 
 -> Implementar limite de vagas exibidas
-->
<script>
    import Opening from '$lib/components/opening.svelte';
    let { data } = $props();
    console.log(data);
    import Header from '$lib/components/header.svelte';
</script>

<title>Home</title>

<Header />

<div class="arrow-nav">
    <i>L</i>
    <i>R</i>
</div>

<div class="filter">
    <form method="GET">
        <div class="fields">
            <div class="field">
                <label for="vacancy">Escolha uma Vaga</label>
                <input type="text" id="vacancy" placeholder="Digite uma vaga ou um cargo">
            </div>
            <div class="field">
                <label for="local">Escolha uma Localização</label>
                <input type="text" id="local" placeholder="Digite uma localização">
            </div>
            <div class="field">
                <label for="salary">Escolha um Salário</label>
                <input type="text" id="salary" placeholder="Digite um salário desejado">
            </div>
        </div>
        <div class="submit-area">
            <input class="pr-blue-btn" type="submit" value="Buscar"
            style:color=black
            style:border="1px solid black"
            style:border-radius=10px
            >
        </div>
    </form>
</div>

<div class="list-vacancies">
    <div class="list-desc">
        <h2>Vagas</h2>
        <a href="./openings" class="see-more pr-gray-btn">Ver mais</a>
    </div>
    
    <div class="vacancies-data" id="vacancies-data">
        {#each data.posts as post}
        <Opening name={post.title} description={post.body}/>
        {/each}
    </div>

</div>

<style>

    .arrow-nav{
        outline: 2px solid purple;
        background-color: rgb(100, 100, 100);
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 10vh;
    }
/* form */
    .filter{
        outline: 2px solid burlywood;
        margin: 1rem;
        padding: 1.5rem;
        background-color: #D9D9D9;
        display: flex;
        border-radius: 20px;
    }

    form{
        width: 100%;
    }

    .fields{
        outline: 2px solid darkcyan;
        display: flex;
        justify-content: space-evenly;
    }

    .field{
        outline: 2px solid orange;
        display: flex;
        flex-direction: column;
        width: 30%;
    }

    input[type="text"]{
        height: 2.5rem;
        border: 1px solid black;
        background-color: #D9D9D9;
        border-radius: 10px;
    }

    .submit-area{
        width: 100%;
        display: flex;
        justify-content: center;
        margin-top: 3rem;
    }
    input[type="submit"]{
        padding: 0.75rem 4rem;
        border: 1px solid black;
    }
/* bottom */
    .list-vacancies{
        outline: 2px solid red;
        margin: 1rem 5rem;
    }
    .list-desc{
        outline: 2px solid darkred;
        display: flex;
        justify-content: space-between;
        margin: 4rem 1rem 2rem 1rem;
    }
    .see-more{
        outline: 2px solid royalblue;
        padding: 0.5rem 1.5rem;
        border: 2px solid rgb(40, 40, 40);
        border-radius: 15px;
    }

    .vacancies-data{
        outline: 2px solid firebrick;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr;
    }
</style>