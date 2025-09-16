<script>
</script>

<title>Login</title>

<header>
    <h1 style:font-weight=600>ContrataFácil</h1>
</header>
<main>
    <div class="start-column"></div>
    <div class="mid-column">
        <h1 style:font-weight=600 style:justify-self=center>Entrar no ContrataFácil</h1>
        
            <form method="POST" class="login-container">
                <div class="field">
                    <label for="user">Nome de usuário ou e-mail</label><br>
                    <input type="text" id="user">
                </div>
                <div class="field">
                    <div class="password-labels">
                        <label for="password-input">Senha:</label>
                        <a href="./forgor" style:margin-left=auto>Esqueceu a senha?</a><br>
                    </div>
                    <input type="password" id="password-input">
                </div>
                <div style:place-items=center style:display=grid style:outline="1px solid blue">
                    <input class="sr-blue-btn" type="submit" id="login-submit" value="Logar">
                </div>
            </form>
        
        <div class="sign-container">
            <h3 class="no-account">Não possui uma conta?</h3>
            <button class="sr-blue-btn"
            style:padding="0.5rem 3rem"
            style:border-radius="20px"
            style:margin-top="auto"
            style:border="1px solid black"
            >Criar uma conta</button>
        </div>
        <div class="empty-space"></div>
    </div>
    <div class="end-column"></div>
</main>

<style>
    header{
        outline: 1px solid blue;
        padding: 1rem;
        height: 10vh;
    }

    main{
        display: grid;
        height: 90vh;
        grid-template-columns: 30% 1fr 30%;
    }
    
    .mid-column{
        background-color: rgba(0, 100, 0, 0.2);
        display: grid;
        grid-template-rows: 1fr 6fr 4fr 1fr;
        gap: 1rem;
    }

    form{
        background-color: #d9d9d9;
        display: grid;
        border: 1px solid black;
        padding: 2rem;
        border-radius: 10px;
    }

    .field{
        outline: 1px solid pink;
    }

    label, input, button{
        font: inherit;
    }

    .password-labels{
        outline: 2px solid yellow;
        display: flex;
    }

    input[type="text"], input[type="password"]{
        width: 100%;
        height: 5ch;
        border-radius: 10px;
        margin-top: 0.5ch;
        border: 1px solid black;
    }

    input[type="submit"]{
        padding: 0.5rem 3rem;
        border-radius: 20px;
        border: 1px solid black;
    }

    .sign-container{
        background-color: #d9d9d9;
        border: 1px solid black;
        display: flex;
        flex-direction: column;
        padding: 2rem;
        align-items: center;
        border-radius: 10px;
    }

    .login-container, .sign-container{
        outline: 1px solid rebeccapurple;
    }
    
</style>