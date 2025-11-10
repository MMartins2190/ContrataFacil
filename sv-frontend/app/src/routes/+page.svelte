<script>
    import Header from "$lib/components/header.svelte";
    import woman from "$lib/assets/woman-filter.png";
</script>

<title>ContrataFácil</title>

<Header />
<div class="body">
    <div class="main-content">
        <main>
            <h1>Encontre talentos com facilidade</h1>
            <p class="introduction">Uma plataforma inteligente de currículo com foco em filtragem e categorização para facilitar contratações.</p>
            <a href="/homepage" class="pr-blue-btn get-started">Começar Agora</a>
            <button class="outline-btn">Entrar com Linkedin</button>
        </main>
        <img src={woman} alt="Mulher usando filtro no computador">
    </div>
    <section class="quick-explanation">
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
    </section>
    <h2>Para Empresas</h2>
    <section class="for-enterprise">
        <p class="enterprise-description">Revolucione seu RH com a plataforma de Recrutamento e Seleção da ContrataFácil</p>
        <p class="enterprise-description">Automatize processos, encontre talentos ideais e reduza o tempo de contratação em até 78% com nossa plataforma de Inteligência Comportamental.</p>
        <a href="/for-enterprise" class="pr-blue-btn begin">Começar</a>
    </section>

    <footer>

    </footer>
</div>

<style>
    .body{
        height: 110vh;
    }

    h1 {
        font-size: 5ch;
    }

    .introduction {
        font-size: 2ch;
        font-weight: 500;
    }

    .main-content {
        height: 60vh;
        display: flex;
    }

    /* Mexer depois */
    img {
        outline: 2px solid red;
        aspect-ratio: 1/1;
    }

    main{
        padding: 2rem;
        width: 60%;
        display: flex;
        flex-direction: column;
    }

    p{
        margin: 1.5ch 0;
    }

    .get-started{
        width: 60%;
        padding: .75rem;
        margin: 1rem 0;
        border-radius: 20px;
        text-align: center;
    }

    .outline-btn{
        width: 60%;
        background-color: white;
        color: rgb(80, 100, 150);
        padding: .75rem;
        border: 2px solid rgb(80, 100, 150);
        border-radius: 20px;
    }
    .outline-btn:hover{
        color: rgb(120, 120, 200);
        border: 2px solid rgb(120, 120, 200);
    }

    .quick-explanation {
        margin: 2rem 0 0 0;
        padding: 2rem 2rem 3rem 2rem;
        background: rgb(217, 217, 217);     
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

    h2 {
        font-weight: 600;
        font-size: 2ch;
        margin: 2rem 0 0.5rem 2rem 
    }

    .for-enterprise {
        background: rgb(217 217 217);
        padding: 2rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
    }

    .enterprise-description {
        font-weight: 500;
        font-size: 1.5ch;
    }

    .begin {
        padding: 1rem 3rem;
        border-radius: 20px;
    }

    footer {
        background-color: rgb(217 217 217);
        margin: 2rem 0 0 0;
        height: 10vh;
    }
</style>