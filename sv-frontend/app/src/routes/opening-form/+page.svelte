<script>
    import { enhance } from "$app/forms";
    import { page } from "$app/state";
    import Header from "$lib/components/header.svelte";

    const plano_pago = true;

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
                <input class="form-input" name="titulo" id="vacancy-name" type="text" value={title} required>
            </div>
            <div class="field">
                <label for="salary">Salário:</label>
                <input class="form-input" name="salario" type="number" min="0" placeholder="0.00" id="salary" value={salary}>
            </div>
            <div class="field">
                <label for="vacancy-description">Descrição da vaga:</label>
                <textarea class="form-input" name="descricao" id="vacancy-description" cols="60" rows="100">{description}</textarea>
            </div>
            <div class="field">
                <label for="requisites">Requisitos:</label>
                <textarea class="form-input" name="requisitos" id="requisites" cols="60" rows="100">{requisites}</textarea>
            </div>
            <div>
                {#if plano_pago}
                    <label for="boosted">Impulsionar</label>
                    {#if boosted}
                        <input type="checkbox" name="impulsionada" id="boosted" checked>
                    {:else}
                        <input type="checkbox" name="impulsionada" id="boosted">
                    {/if}
                {/if}
            </div>
            <div class="submit">
                {#if title !== ""}
                    <input formaction="?/update&id={id}" type="submit" class="pr-blue-btn" value="Salvar">
                    <input formaction="?/delete&id={id}" type="submit" value="Detonar" class="pr-blue-btn">
                {:else}
                    <input formaction="?/create" type="submit" class="pr-blue-btn" value="Enviar">
                {/if}
            </div>
        </form>
    </div>

    <div></div>
</div>

<style>
    .main {
        width: 100vw;
        height: 100vh;
        display: grid;
        grid-template-columns: 30% 1fr 30%;
    }

    .container {
        background: linear-gradient(to bottom, #d9d9d9, #f5f5f5);
        margin: 0.5rem 0;
        padding: 1rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        border: 1px solid black;
    }
    
    form {
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
    }
    
    .field {
        display: flex;
        flex-direction: column;
        width: 80%;
    }
    
    textarea {
        height: 10ch;
    }

    input[type="submit"] {
        padding: 1rem 2rem;
        border-radius: 10px;
        border: 1px solid black;
    }

    input[type="submit"][value="Salvar"] {
        background: linear-gradient(rgb(50, 100, 50), rgb(100, 150, 100));
    }

    input[type="submit"][value="Detonar"] {
        background: linear-gradient(rgb(100, 50, 50), rgb(150, 80, 80));
    }
</style>