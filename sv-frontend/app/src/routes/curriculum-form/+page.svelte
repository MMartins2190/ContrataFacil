<script>
    import Loading from '$lib/components/loading.svelte';
    import Header from "$lib/components/header.svelte";

    let { data } = $props();
    let { struct = "", text = "", reviewsidk = "", user = ""} = data;
</script>

<!-- <Loading /> -->
<title>Novo Currículo</title>

<Header />

<div class="all-father">
    <form action="/add-curriculum" method="post">
        <textarea name="cv-presentation" id="cv-presentation-textarea" cols="100" rows="100">Apresentação Rápida</textarea>
        <div class="image-input">
            <label for="image">Selecionar arquivo: </label>
            <input id="image" type="file" value="Imagem" accept="image/*">
        </div>
        <button type="submit">Enviar</button>
    </form>
</div>

<style>
    .all-father{
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

    textarea, input, label, button{
        font: inherit;
    }

    textarea{
        border-radius: 20px;
        height: 50%;
        border: 2px solid rgb(80, 116, 183);
        padding: 0.5rem;
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