<script>
    import Header from '$lib/components/header.svelte';
</script>

<title>Para Empresas</title>

<div class="page">
    <Header />
    <h1 class="title">Revolucione seu RH com a plataforma de Recrutamento e Seleção da ContrataFácil</h1>
    <p class="description">
        Automatize processos, encontre talentos ideais e reduza o tempo de contratação em até 78% com nossa plataforma de Inteligência Comportamental.
    </p>
    <div class="btn-space">
        <a href="/enterprise-form" class="pr-blue-btn" style:background="gray">Cadastrar Empresa</a>
    </div>
</div>

<style>
    .page {
        min-height: 100vh;
    }

    .title {
        margin: 3.5rem 3.5rem 0 3.5rem;
        font-size: 6ch;
        font-weight: 600;
    }

    .description {
        margin: 4rem 3rem 0 3rem;
        font-size: 3ch;
    }

    .btn-space {
        position: fixed;
        bottom: 10%;
        width: 100%;
        display: flex;
        justify-content: center;
    }

    a {
        padding: 1rem 5rem;
        font-size: 2ch;
    }
</style>