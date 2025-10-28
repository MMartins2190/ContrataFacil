<script>
    import Loading from '$lib/components/loading.svelte';
    import Header from "$lib/components/header.svelte";

    let { data } = $props();
    let { curriculums = null, user = ""} = data;
</script>

<title>Novo Currículo</title>

<Header />

<main>
    <form method="post">
        <div class="image-input">
            <label for="image">Selecionar arquivo: </label>
            <input id="image" type="file" value="Imagem" accept="image/*">
        </div>
        <input formaction="?/create" type="submit" value="Enviar">
    </form>
</main>

<style>
    main{
        width: 100vw;
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
    }

    form{
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    input, label, button{
        font: inherit;
    }

    .image-input{
        border: 2px solid rgb(80, 116, 183);
        border-radius: 20px;
        padding: 0.5rem;
    }

    button{
        background-color: white;
        border: 2px solid rgb(80, 116, 183);
        padding: 0.25rem 2rem;
        border-radius: 20px;
    }
</style>