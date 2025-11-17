<script>
    import Header from "$lib/components/header.svelte";
    import Opening from "$lib/components/opening-item.svelte";
    
    let { data } = $props();
    let openingList = $state(data.openings);
    const empresa = true;

    function searchOpenings(event) {
        event.preventDefault();
        console.log(event);
    }
</script>

<title>Vagas</title>

<Header/>
<div class="page">
    
    <h1>Vagas</h1>
    
    <div class="list-vacancies">
        <form onsubmit={searchOpenings} method="get">
                <div class="search-field">
                    <label for="search-opening">Escolha uma vaga</label>
                    <input class="form-input" id="search-opening" type="text" name="searchOpening" placeholder="Digite uma vaga...">
                </div>
                <div class="search-field">
                    <label for="search-local">Defina um local</label>
                    <input class="form-input" id="search-local" type="text" name="searchLocal" placeholder="Digite um local...">
                </div>
                <div class="search-field">
                    <label for="search-salary">Escolha o salário</label>
                    <input class="form-input" id="search-salary" type="text" name="searchSalary" placeholder="Digite um salário...">
                </div>
            <div class="search-field">
                <input class="pr-blue-btn" type="submit" value="Buscar">
            </div>
        </form>
        {#if empresa}
            <a href="/opening-form" class="pr-blue-btn">Criar nova vaga</a>
        {/if}
        {#if openingList.length === 0}
            <h2>Não há nenhuma vaga disponível ¯\_(ツ)_/¯</h2>
            {:else}
            <div class="vacancies-data" id="vacancies-data">
                {#each openingList as opening}
                    <div class="opening-wrapper">
                        <Opening
                            id={opening.id}
                            titulo={opening.titulo}
                            salario={opening.salario}
                            requisitos={opening.requisitos}
                        />
                    </div>
                {/each}
            </div>
        {/if}
    </div>
</div>
<style>
    .page {
        min-height: 90vh;
    }
    
    h1 {
        font-weight: 700;
        text-align: center;
        margin: 2rem 0 0 0;
    }
    
    .list-vacancies {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 2rem 0 0 0;
    }

    input, label {
        font: inherit;
    }

    form{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 1rem;
        align-self: center;
        font: inherit;
        background: rgb(217, 217, 217);
        border-radius: 20px;
        border: 2px solid #4a6fa5;
        width: 80%;
        padding: 3rem;
        margin: 0 0 3rem 0;
    }

    .search-field > input[type="submit"] {
        grid: center;
    }
    

    .vacancies-data{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        background: repeating-linear-gradient(
            to bottom,
            rgba(81, 117, 184, .1),
            rgba(121, 170, 255, 0.1));
        gap: 1rem;
        margin: 2rem 0 2rem 0;
        padding: .5rem;
        width: 80%;
        border-radius: 20px;
    }

    .opening-wrapper {
        height: 300px;
    }
</style>