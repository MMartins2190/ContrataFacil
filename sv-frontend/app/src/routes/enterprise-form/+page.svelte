<script>
    import Header from "$lib/components/header.svelte";

    let { data } = $props();
    let {
        id,
        cnpj = "",
        name = "",
        email = "",
        description = ""
        } = data;
</script>

<title>Cadastrar Empresa</title>


<Header />
<main>
    <div class="container">
        <h1>Cadastrar Empresa</h1>

        <form method="post">
            <div class="field">
                <label for="vacancy-name">Nome:</label>
                <input class="form-input" name="nome" id="vacancy-name" type="text" value={name}>
            </div>
            <div class="field">
                <label for="cnpj">CNPJ:</label>
                <input
                class="form-input"
                name="cnpj"
                type="text"
                placeholder="XX.XXX.XXX/0001-XX"
                id="cnpj"
                value={cnpj}>
            </div>
            <div class="field">
                <label for="emailid">E-mail:</label>
                <input class="form-input" name="email" id="emailid" type="email" value={email}>
            </div>
            <div class="field">
                <label for="description">Descrição da Empresa:</label>
                <textarea
                class="form-input"
                name="descricao"
                id="description"
                cols="60"
                rows="100"
                style:height="15ch"
                >{description}</textarea>
            </div>
            <div class="submit">
                {#if id}
                    <input
                    formaction="?/update"
                    type="submit"
                    class="pr-blue-btn"
                    value="Salvar"
                    >
                    <input
                    formaction="?/delete" 
                    type="submit" 
                    class="pr-blue-btn" 
                    value="Excluir" 
                    style:background-color=red>
                {:else}
                    <input formaction="?/create" type="submit" class="pr-blue-btn" value="Enviar">
                {/if}
            </div>
        </form>
    </div>
</main>

<style>
    main {
        margin-top: 10vh;
        width: 100vw;
        height: 90vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .container {
        background-color: #d9d9d9;
        border-radius: 20px;
        margin: 0.5rem 0;
        padding: 1rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        border: 1px solid black;
        margin: 1rem 0 2rem 0
    }

    h1 {
        font-weight: 500;
        font-size: 3ch;
    }

    form {
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
    }

    .field {
        display: flex;
        flex-direction: column;
        width: 80%;
        gap: 0.2ch;
    }
</style>