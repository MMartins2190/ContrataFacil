<script>
    import Loading from '$lib/components/loading.svelte';
</script>

<Loading />
<title>Novo Currículo</title>

<div class="all-father">
    <textarea name="cv-presentation" id="cv-presentation-textarea" cols="100" rows="100">Apresentação Rápida</textarea>
    <div>
        <label for="image">Selecionar arquivo: </label>
        <input id="image" type="file" value="Imagem" accept="image/*">
    </div>
    <button>Enviar</button>
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

    textarea, input, label, button{
        font: inherit;
    }

    textarea{
        border-radius: 20px;
        height: 50%;
        border: 2px solid rgb(80, 116, 183);
        padding: 0.5rem;
    }

    .all-father > div{
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