<div class="main">
    <div></div>

    <div class="container">
        <h1 class="title">Adicionar Vaga:</h1>

        <form method="post">
            <label>Vaga:
                <br><input type="text">
            </label>
            <label>Salário:
                <br>R$ <input type="number" min="0" placeholder="0.00">
            </label>
            <label>Descrição da vaga:
                <br><textarea name="vacancy-description" id="vacancy-description" cols="60" rows="100">Insípido</textarea>
            </label>
            <input type="submit" value="Enviar">
        </form>
    </div>

    <div></div>
</div>

<style>
    *{
        border: none;
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: Arial, Helvetica, sans-serif;
    }

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
    }

    form{
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    textarea{
        height: 40ch;
    }

    input[type="submit"]{
        background-color: blue;
        border-radius: 20px;
        color: white;
        padding: .5rem 1.5rem;
    }
</style>