<script>
    // Na prática esse trecho provavelmente precisa ocorrer client-side
    // Aqui é mera demonstração
    let user = {
        isAuthenticated: false,
        name: "Jo`so",
        pfp: "facePic",
        // ...
    };
</script>

<header>
    <a href="/"><h1>ContrataFácil</h1></a>
    <nav>
        <a href="/openings" class={["nav-item", "nav-link"]}>Vagas</a>
        <a href="/curriculums" class={["nav-item", "nav-link"]}>Currículos</a>
        <a href="/enterprise" class={["nav-item", "nav-link"]}>Para Empresas</a>
        <a href="/about" class="{["nav-item", "nav-link"]}">Sobre</a>
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
        display: flex;
        width: auto;
        height: 10vh;
        padding: 0 3rem;
        align-items: center;
    }

    .nav-link:hover{
        color: rgb(81, 117, 184);
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

    /* .currentPage{
        border-bottom: 2px solid rgb(81, 117, 184);
    } */
</style>