<script>
    import { enhance } from "$app/forms";
    import Header from "$lib/components/header.svelte";
</script>

<title>Login</title>

<Header />
<main>
    <div class="start-column"></div>
    <div class="mid-column">
        <h1>Entrar no ContrataFácil</h1>
        
            <form method="POST" class="login-container" use:enhance>
                <div class="field">
                    <label for="username">Nome de usuário ou e-mail</label><br>
                    <input type="text" id="username" name="username">
                </div>
                <div class="field">
                    <div class="password-labels">
                        <label for="password-input">Senha:</label>
                        <a href="./forgor" style:margin-left=auto>Esqueceu a senha?</a><br>
                    </div>
                    <input type="password" id="password-input" name="senha">
                </div>
                <div 
                style:place-items=center 
                style:display=grid>
                    <input class="sr-blue-btn" type="submit" id="login-submit" value="Logar">
                </div>
            </form>
        
        <div class="sign-container">
            <h3 class="no-account">Não possui uma conta?</h3>
            <a href="/signin" class="sr-blue-btn"
            style:padding="0.5rem 3rem"
            style:border-radius="20px"
            style:margin-top="auto"
            style:border="1px solid black"
            >Criar uma conta</a>
        </div>
        <div class="empty-space"></div>
    </div>
    <div class="end-column"></div>
</main>

<style>
    h1 {
        font-weight: 600;
        justify-self: center;
    }

    main{
        display: grid;
        height: 90vh;
        grid-template-columns: 30% 1fr 30%;
    }
    
    .mid-column{
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

    label, input, a{
        font: inherit;
    }

    .password-labels{
        display: flex;
    }

    input[type="text"], input[type="password"]{
        width: 100%;
        height: 5ch;
        padding: 1ch;
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
</style>