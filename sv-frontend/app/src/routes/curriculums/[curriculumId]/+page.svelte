<script>
    import Header from "$lib/components/header.svelte";
    import Opening from "$lib/components/opening-item.svelte";

    const curriculumsUrl = "http://127.0.0.1:8000/curriculos/";
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

    async function registerCurriculum(e) {
        const file = e.target.files?.[0];
        if (!file) {
            return;
        }
        const bodyData = new FormData();
        bodyData.append("curriculo", file);
        bodyData.append("candidato", user.id);
    
        try {
            const postData = await fetch(curriculumsUrl, {
                method: "POST",
                body: bodyData,
            });
            if (postData.ok) alert("Currículo criado")
            else console.log(postData);

        } catch (error) {
            console.warn(error);
        }
    }

    function showModal() {
        modalDisplay = true;
    }

    function closeModal() {
        modalDisplay = false;
    }

</script>

<title>{user.username}</title>

<Header />
<div class="page-container">
    <main class="main-content">
        <input type="file" name="curriculo" onchange={registerCurriculum}>
    </main>
    
    <aside class="sidebar">
        <div class="sidebar-content">
            <div class="sidebar-header">
                <h2>{user.username}</h2>
                <button onclick={showModal}>?</button>
            </div>
        </div>
    </aside>
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

<style>
    .page-container {
        display: grid;
        grid-template-columns: 1fr;
        min-height: 90vh;
    }

    .main-content {
        overflow-y: auto;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .sidebar {
        background-color: #5865C7;
        color: white;
        padding: 2rem;
        overflow-y: auto;
        box-shadow: -4px 0 12px rgba(0, 0, 0, 0.1);
    }

    .sidebar-header h2 {
        color: white;
        font-size: 1.5rem;
        margin-bottom: 1.5rem;
        font-weight: 600;
    }

    .sidebar-header {
        display: flex;
        justify-content: space-between;
    }

    .sidebar-header button {
        width: 50px;
        height: 50px;
        border-radius: 100%;
        background: linear-gradient(hsl(233, 50%, 56%), hsl(233 50% 60%));
        color: white;
        cursor: pointer;
    }
    .sidebar-header button:hover {
        background: linear-gradient(hsl(233 70% 50%), hsl(250 72% 42%));
    }

    .sidebar-item {
        background-color: rgba(255, 255, 255, 0.1);
        color: white;
        padding: 1rem;
        margin-bottom: 0.75rem;
        border-radius: 8px;
        transition: all 0.2s ease;
        border: 1px solid rgba(255, 255, 255, 0.2);
    }

    .sidebar-item:hover {
        background-color: rgba(255, 255, 255, 0.2);
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
    }

    /*******
      Modal
    *******/

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

    /* Responsive design */
    @media (max-width: 1024px) {
        .sidebar {
            order: -1;
            min-height: auto;
            position: relative;
        }

        .sidebar-content {
            position: static;
        }

        .main-content {
            padding: 1.5rem;
        }
    }

    @media (max-width: 768px) {
        .main-content {
            padding: 1rem;
        }

        .sidebar {
            padding: 1.5rem;
        }

        .sidebar h2 {
            font-size: 1.25rem;
        }
    }
</style>