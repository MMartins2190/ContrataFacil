<script>
    import Header from "$lib/components/header.svelte";
    import Opening from "$lib/components/opening-item.svelte";
    
    let { data } = $props();
    let openingsList = $state(data.openings);
    let searchTitle = $state("");

    function searchFilter() {
        const titleWords = searchTitle.split(" ");
        const titleLetters = searchTitle.split();

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
</script>

<title>Vagas</title>

<Header/>
<div class="page">
    
    <h1>Vagas</h1>
    
    <div class="list-vacancies">
        {#if data.user.empresa}
            <a href="/opening-form" class="pr-blue-btn">Criar nova vaga</a>
        {/if}
            <div class="search-field">
                <label for="search-opening">Escolha uma vaga</label>
                <input
                oninput={searchFilter}
                class="form-input"
                id="search-opening"
                type="text"
                bind:value={searchTitle}
                placeholder="Digite uma vaga...">
            </div>
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
        font-weight: 500;
        text-align: center;
        margin: 2rem 0 0 0;
    }
    
    .list-vacancies {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 2rem 0 0 0;
        gap: 2rem;
    }

    input, label {
        font: inherit;
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
        height: 270px;
    }
</style>