<script>
    import { enhance } from "$app/forms";
    import { page } from "$app/state";
    import Header from "$lib/components/header.svelte";

    let id = page.url.searchParams.get("id");
    let { data } = $props();
    let { title = "", salary = "", description = "", requisites = "", boosted = false } = data;
    console.log(data);

</script>

<title>Adicionar Vaga</title>

<Header />

<div class="main">
    <div></div>

    <div class="container">
        <h1 class="title" 
        style:font-weight=normal
        style:margin-bottom=3rem
        >Adicionar Vaga:</h1>

        <form method="post" enctype="multipart/form-data" use:enhance>
            <div class="field">
                <label for="vacancy-name">Vaga:</label>
                <input name="titulo" id="vacancy-name" type="text" value={title} required>
            </div>
            <div class="field">
                <label for="salary">Salário:</label>
                <input name="salario" type="number" min="0" placeholder="0.00" id="salary" value={salary}>
            </div>
            <div class="field">
                <label for="vacancy-description">Descrição da vaga:</label>
                <textarea name="descricao" id="vacancy-description" cols="60" rows="100">{description}</textarea>
            </div>
            <div class="field">
                <label for="requisites">Requisitos:</label>
                <textarea name="requisitos" id="requisites" cols="60" rows="100">{requisites}</textarea>
            </div>
            <div>
                <label for="boosted">Impulsionada</label>
                {#if boosted}
                    <input type="checkbox" name="impulsionada" id="boosted" checked>
                {:else}
                    <input type="checkbox" name="impulsionada" id="boosted">
                {/if}
            </div>
            <div class="submit">
                {#if title !== ""}
                    <input formaction="?/update&id={id}" type="submit" class="sr-blue-btn" style:background-color=green value="Salvar">
                    <input formaction="?/delete&id={id}" type="submit" value="Detonar" style:background-color=red>
                {:else}
                    <input formaction="?/create" type="submit" class="sr-blue-btn" value="Enviar">
                {/if}
                <input type="submit" formaction="?/redirect" value="Shart">
            </div>
        </form>
    </div>

    <div></div>
</div>

<style>
    .main{
        width: 100vw;
        height: 100vh;
        display: grid;
        grid-template-columns: 30% 1fr 30%;
    }

    .container{
        background-color: #d9d9d9;
        border-radius: 20px;
        margin: 0.5rem 0;
        padding: 1rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        border: 1px solid black;
    }

    form{
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
    }

    .field{
        display: flex;
        flex-direction: column;
        width: 80%;
    }

    input[type="text"], input[type="number"]{
        height: 3ch;
        border-radius: 10px;
        border: 1px solid black;
        margin-top: 0.5ch;
    }

    input[type="submit"]{
        padding: 1rem 2rem;
        border-radius: 10px;
        border: 1px solid black;
    }

    textarea{
        height: 20ch;
        border: 1px solid black;
        border-radius: 10px;
        margin-top: 0.5ch;
    }
</style>