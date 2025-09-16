<script>
    //External data and auth
    let user = {
        isAuthenticated: false,
        name: "Jo`so",
        pfp: "facePic",
        // ...
    };
</script>

<header>
    <h1>ContrataFácil</h1>
    <nav>
        <a href="#top" class="nav-item">Vagas</a>
        <a href="#top" class="nav-item">Currículos</a>
        <a href="#top" class="nav-item">Para Empresas</a>
        <a href="#top" class="nav-item">Sobre</a>
        <div class="user">
            {#if user.isAuthenticated}
                <a href="/userprofile">
                    <p style="display: inline;">{user.name || "Nome"}</p>
                    <i>{user.pfp || "I"}</i>
                </a>
                {:else}
                    <button class="pr-blue-btn nav-item">Entrar</button>
            {/if}
        </div>
    </nav>
</header>

<style>
     header{
        outline: 2px solid blue;
        display: flex;
        width: auto;
        height: 10vh;
        padding: 0 3rem;
        align-items: center;
    }

    nav{
        outline: 1px solid red;
        margin-left: auto;
        display: flex;
        align-items: center;
    }

    .nav-item{
        margin: 0 1.5vw 0 0;
    }

    button{
        margin-left: 0.5vw;
        padding: 0.2rem 0.75rem;
        border-radius: 3px;
    }
</style>