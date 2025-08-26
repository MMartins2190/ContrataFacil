<header>
    <h1>ContrataFácil</h1>
</header>
<div class="main">
    <h1>Entrar no ContrataFácil</h1>
    <div class="login-container">
        <form method="POST">
            <div>
                <label for="user">Nome de usuário ou e-mail</label><br>
                <input type="text" id="user">
            </div>
            <div>
                <label for="password-input">Senha:</label>
                <a href="./forgor">Esqueceu a senha?</a><br>
                <input type="password" id="password-input">
            </div>
            <div>
                <input type="submit" id="login-submit">
            </div>
        </form>
    </div>
    <div class="sign-container">
        <h3 class="no-account">Não possui uma conta?</h3>
        <button>Criar uma conta</button>
    </div>
</div>

<style>
    *{
        border: none;
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: Arial, Helvetica, sans-serif;
    }

    a{
        text-decoration: none;
        color: black;
    }

    header{
        outline: 2px solid blue;
        display: flex;
        width: 100%;
        height: 10vh;
        padding: 2rem;
    }

    .main{
        outline: 2px solid orangered;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 2rem;
    }

    .login-container{
        height: 200px;
        width: 40%;
        display: flex;
        flex-direction: column;
        margin: 1rem 0 1rem 0;
        border-radius: 20px;
        border: 1px solid black;
        background-color: #d9d9d9;
        padding: 1.5rem;
    }
</style>