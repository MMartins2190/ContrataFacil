<div class="all-father">
    <textarea name="cv-presentation" id="cv-presentation-textarea" cols="100" rows="100"></textarea>
    <label>Selecionar arquivo: <input type="file" value="Imagem" accept="image/*"></label>
    <button>Enviar</button>
</div>

<style>
    *{
        border: none;
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: Arial, Helvetica, sans-serif;
    }

    .all-father{
        width: 100vw;
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        outline: 2px solid purple;
    }

    textarea{
        height: 50%;
        border: 3px solid blue;
    }

    label{
        border: 3px solid blue;
    }

    button{
        background-color: white;
        border: 3px solid blue;
        padding: 0.25rem 2rem;
    }
</style>