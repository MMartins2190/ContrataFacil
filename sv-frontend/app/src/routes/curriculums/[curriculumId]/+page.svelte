<script>
    import Header from "$lib/components/header.svelte";

    const hints = [
        "Dados pessoais básicos - Nome completo, cidade/estado (não precisa endereço completo), telefone, e-mail profissional e link do LinkedIn. O CPF é opcional e geralmente não é necessário na primeira etapa.",
        "Objetivo profissional claro - Uma frase curta (2-3 linhas) explicando qual vaga você busca e o que você pode oferecer. Seja específico e alinhado com a vaga desejada.",
        "Experiências profissionais em ordem cronológica reversa - Começando pela mais recente. Inclua: nome da empresa, cargo, período (mês/ano), e principalmente as realizações e resultados obtidos, não apenas as responsabilidades.",
        "Formação acadêmica relevante - Curso, instituição, período. Se você tem ensino superior, não precisa mencionar ensino fundamental. Para recém-formados, pode incluir TCC ou projetos acadêmicos relevantes.",
        "Adequação à vaga - Personalize o currículo para cada posição, destacando experiências e habilidades que se conectam diretamente com os requisitos da vaga anunciada.",
        "Evite incluir Foto, estado civil, idade, ou informações pessoais desnecessárias. Isso não é recomendado por boas práticas de recrutamento modernas e pode gerar discriminação. Evite também mencionar religião, time de futebol, ou informações irrelevantes.",
        "Seja conciso. Profissionais com menos de 10 anos de experiência devem ter currículo de 1 página. Apenas profissionais muito experientes justificam 2 páginas.",
    ]
    let { data } = $props();
    let modalDisplay = $state(false);
    const user = {
        id: 1,
        username: "João Bonifácio",
    };

    function toggleModal() {
        modalDisplay = !modalDisplay;
    }
</script>

<title>{"Nome do currículo"}</title>

<Header/>
<div class="page">

    <div class="file-contents">
        <input type="file" name="curriculo">
    </div>
    <div class="info-bar">
        <button class="ia-btn">IA</button>
        <h1>{"Nome do currículo"}</h1>
        <button class="hint-btn" onclick={toggleModal}>?</button>
    </div>

    {#if modalDisplay}
    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div class="modal-overlay" onclick={closeModal}>
        <div class="modal-content" onclick={e => e.stopPropagation()}>
            <h1>Dicas de criação de um currículo</h1>
            <ol>
                {#each hints as hint}
                    <li class="sidebar-item">{hint}</li>
                {/each}
            </ol>
        </div>
    </div>
{/if}
</div>

<style>
    .page {
        display: flex;
        flex-direction: column;
    }

    .file-contents {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 70vh;
    }

    .info-bar {
        height: 20vh;
        display: flex;
        justify-content: space-between;
        background: #5b7bb4;
        align-items: center;
        color: white;
    }

    .modal-overlay {
        position: fixed;
        inset: 0 0 0 0;
        z-index: 999;
        background-color: rgba(0, 0, 0, 0.6);
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .modal-content {
        width: 100%;
        height: 100%;
        max-width: 800px;
        max-height: 800px;
        padding: 2rem;
        background: #5865C7;
        border-radius: 20px;
        color: white;
        overflow-y: scroll;
    }

    .modal-content h1 {
        margin: 1rem 0;
    }
</style>