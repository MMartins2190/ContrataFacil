<script>
    import Header from "$lib/components/header.svelte";

    let { data } = $props();
    let { cnpj = "", name = "", email = "", description = "" } = data;
</script>

<title>Cadastrar Empresa</title>

<Header />

<div class="main">
    <div></div>

    <div class="container">
        <h1 class="title" 
        style:font-weight=normal
        style:margin-bottom=3rem
        >Cadastrar Empresa</h1>

        <form method="post">
            <div class="field">
                <label for="vacancy-name">Nome:</label>
                <input name="titulo" id="vacancy-name" type="text" value={name}>
            </div>
            <div class="field">
                <label for="cnpj">CNPJ:</label>
                <input name="salario" type="number" min="0" placeholder="0.00" id="cnpj" value={cnpj}>
            </div>
            <div class="field">
                <label for="emailid">E-mail:</label>
                <input name="email" id="emailid" type="email" value={email}>
            </div>
            <div class="field">
                <label for="description">Descrição da Empresa:</label>
                <textarea name="descricao" id="description" cols="60" rows="100">{description}</textarea>
            </div>
            <div class="submit">
                {#if cnpj !== ""}
                    <input formaction="?/update" type="submit" class="sr-blue-btn" style:background-color=green value="Salvar">
                {:else}
                    <input formaction="?/create" type="submit" class="sr-blue-btn" value="Enviar">
                {/if}
                <input formaction="?/delete" type="submit" value="Detonar" style:background-color=red>
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

    input[type="text"], input[type="number"], input[type="email"] {
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