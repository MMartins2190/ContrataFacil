<script>
    import Header from "$lib/components/header.svelte";
    import Opening from "$lib/components/opening-item.svelte";
    
    let { data } = $props();
    let openingList = $state(data.openings);

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
                <input id="search-opening" type="text" name="searchOpening" placeholder="Digite uma vaga...">
            </div>
            <div class="search-field">
                <label for="search-local">Defina um local</label>
                <input id="search-local" type="text" name="searchLocal" placeholder="Digite um local...">
            </div>
            <div class="search-field">
                <label for="search-salary">Escolha o salário</label>
                <input id="search-salary" type="number" name="searchSalary" placeholder="Digite um salário...">
            </div>
            <div class="search-field">
                <input class="pr-blue-btn" type="submit" value="Buscar">
            </div>
        </form>
        <a href="/opening-form">Criar nova vaga</a>
        {#if openingList.length === 0}
            <h2>Não há nenhuma vaga disponível ¯\_(ツ)_/¯</h2>
            {:else}
            <div class="vacancies-data" id="vacancies-data">
                {#each openingList as opening}
                    <Opening
                        id={opening.id}
                        titulo={opening.titulo}
                        salario={opening.salario}
                        requisitos={opening.requisitos}
                    />
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

    input, label {
        font: inherit;
    }

    form{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        align-self: center;
        font: inherit;
        background: rgb(217, 217, 217);
        border-radius: 20px;
        border: 2px solid #4a6fa5;
        width: 80%;
        padding: 3rem;
        margin-bottom: 5rem;
    }

    .search-field > input[type="submit"] {
        place-self: center;
    }
    
    .list-vacancies {
        display: flex;
        flex-direction: column;
        margin: 3rem 5rem;
    }
    .vacancies-data{
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
</style>