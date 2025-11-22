<!--
-->
-->
<script>
    import Header from "$lib/components/header.svelte";
    import Opening from "$lib/components/opening-item.svelte";
    
    let { data } = $props();
    let openingsList = $state(data.openings);
    let searchTitle = $state("");
    let searchLocal = $state("");
    let searchSalary = $state("");
    // Mude no futuro
    const empresa = true;

    async function searchFilter(e) {
        e.preventDefault();
        const titleWords = searchTitle.split(" ");
        const titleLetters = searchTitle.split();
        const localWords = searchLocal.split(" ");
        const localLetters = searchLocal.split();
        

        openingsList.map(opening => {
            opening.relevance = 0;
            if (searchTitle === opening.titulo) {
                opening.relevance += 1000;
            };
            if (searchTitle.toLowerCase() === opening.titulo.toLowerCase()) {
                opening.relevance += 800;
            };
            for (const titleWord of titleWords) {
                if (opening.titulo.toLowerCase().includes(titleWord.toLowerCase())) {
                    opening.relevance += 100;
                };
            };
            for (const titleLetter of titleLetters) {
                if (opening.titulo.toLowerCase().includes(titleLetter.toLowerCase())) {
                    opening.relevance += 10;
                }
            }
            return opening;
        })

        
        return openingsList.sort((opA, opB) => opB.relevance - opA.relevance);
    }

    $inspect(openingsList, searchTitle, searchLocal, searchSalary);
</script>

<title>Vagas</title>

<Header/>
<div class="page">
    
    <h1>Vagas</h1>
    
    <div class="list-vacancies">
        <form onsubmit={searchFilter}>
            <div class="form-grid">
                <div class="search-field">
                    <label for="search-opening">Escolha uma vaga</label>
                    <input class="form-input" id="search-opening" type="text" bind:value={searchTitle} placeholder="Digite uma vaga...">
                </div>
                <div class="search-field">
                    <label for="search-local">Defina um local</label>
                    <input class="form-input" id="search-local" type="text" bind:value={searchLocal} placeholder="Digite um local...">
                </div>
                <div class="search-field">
                    <label for="search-salary">Escolha o salário</label>
                    <input class="form-input" id="search-salary" type="text" bind:value={searchSalary} placeholder="Digite um salário...">
                </div>
            </div>
            <div class="search-field">
                <input class="pr-blue-btn" type="submit" value="Buscar">
            </div>
        </form>
        {#if empresa}
            <a href="/opening-form" class="pr-blue-btn">Criar nova vaga</a>
        {/if}
        {#if openingsList.length === 0}
            <h2>Não há nenhuma vaga disponível ¯\_(ツ)_/¯</h2>
            {:else}
            <div class="vacancies-data" id="vacancies-data">
                {#each openingsList as opening}
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

    form {
        display: flex;
        flex-direction: column;
        align-self: center;
        align-items: center;
        font: inherit;
        background: rgb(217, 217, 217);
        border-radius: 20px;
        border: 2px solid #4a6fa5;
        width: 80%;
        padding: 3rem 3rem 1rem 3rem;
        margin: 0 0 3rem 0;
    }

    form > .form-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 1rem;
        margin: 0 0 1rem 0;
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