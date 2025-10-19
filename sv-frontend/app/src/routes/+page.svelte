<script>
    import Header from "$lib/components/header.svelte";
</script>

<title>ContrataFácil</title>

<Header />
<div class="body">
    <main>
        <h1>Encontre talentos com facilidade</h1>
        <p>Uma plataforma inteligente de currículo com foco em filtragem e categorização para facilitar contratações.</p>
        <a href="/homepage" class="pr-blue-btn get-started">Começar Agora</a>
        <button class="outline-btn">Entrar com Linkedin</button>
    </main>
    <div class="bottom">
        <h3><strong>Como Funciona</strong> em 3 passos simples</h3>
        <div class="steps">
            <div class="step">
                <div class="circle"></div>
                <span>Cadastro rápido com Linkedin</span>
            </div>
            <div class="step">
                <div class="circle"></div>
                <span>Categorização Inteligente</span>
            </div>
            <div class="step">
                <div class="circle"></div>
                <span>Contrata com assertividade</span>
            </div>
        </div>
    </div>
</div>

<style>
    .body{
        height: 90vh;
        padding: 3rem;
    }

    main{
        height: 60vh;
        width: 20rem;
        display: flex;
        flex-direction: column;
    }

    p{
        margin: 1.5ch 0;
    }

    .get-started{
        padding: .75rem;
        margin: 1rem 0;
        border-radius: 100vw;
    }

    .outline-btn{
        background-color: white;
        color: rgb(80, 100, 150);
        padding: 1rem;
        border: 2px solid rgb(80, 100, 150);
        border-radius: 100vw;
    }
    .outline-btn:hover{
        color: rgb(120, 120, 200);
        border: 2px solid rgb(120, 120, 200);
    }

    .steps{
        margin: 2rem 4rem 0 0;
        display: flex;
        justify-content: space-evenly;
    }
    .step{
        display: inline;
    }

    .circle{
        display: inline-block;
        width: 3ch;
        height: 3ch;
        border-radius: 100%;
        background-color: rgb(80, 100, 150);
    }
</style>