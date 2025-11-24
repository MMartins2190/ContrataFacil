<script>
    import EnterpriseCurriculumItem from '$lib/components/enterprise-curriculum.svelte';
    import CandidateCurriculumItem from '$lib/components/candidate-curriculum.svelte';
    import Header from "$lib/components/header.svelte";

    const hints = [
      "Nome completo, cidade/estado (não precisa endereço completo), telefone, e-mail profissional e link do LinkedIn. O CPF é opcional e geralmente não é necessário na primeira etapa.",
      "Uma frase curta (2-3 linhas) explicando qual vaga você busca e o que você pode oferecer. Seja específico e alinhado com a vaga desejada.",
      "Exponha experiências profissionais em ordem cronológica reversa - Começando pela mais recente. Inclua: nome da empresa, cargo, período (mês/ano), e principalmente as realizações e resultados obtidos, não apenas as responsabilidades.",
      "Formação acadêmica relevante - Curso, instituição, período. Se você tem ensino superior, não precisa mencionar ensino fundamental. Para recém-formados, pode incluir TCC ou projetos acadêmicos relevantes.",
      "Adequação à vaga - Personalize o currículo para cada posição, destacando experiências e habilidades que se conectam diretamente com os requisitos da vaga anunciada.",
      "Não exponha informações pessoais desnecessárias - Embora ainda seja comum incluir foto, isso não é recomendado por boas práticas de recrutamento modernas e pode gerar discriminação contra o candidato.",
      "Seja conciso, exponha toda a informação necessária em uma página.",
      "Revise cuidadosamente. Erros gramaticais, de concordância ou ortografia causam péssima impressão. Mantenha formatação uniforme (fontes, espaçamentos, alinhamentos)."
    ];

    let { data } = $props();
    let modalHints = $state(false);
    let modalCreate = $state(false);
    let modalUpdate = $state(false);
    let fileInputValue = $state("Escolha um Currículo");
    let curriculumName = $state("");
    let curriculumId = $state("");
    let curriculums = data.curriculums;

    function toggleHints() {
      modalHints = !modalHints;
    }

    function toggleCreate() {
      modalCreate =  !modalCreate;
    }

    function toggleUpdate(curriculum = null) {
      return async () => {
        modalUpdate = !modalUpdate;
        if (curriculum) {
          curriculumId = curriculum.id;
          curriculumName = curriculum.nome;
          fileInputValue = curriculum.curriculoNome;
        }
      }
    }

    function filePicked(event) {
      if (event.target.files.length === 1) {
        fileInputValue = event.target.files[0].name;
      };
    }
    
</script>

<title>Currículos</title>

<div class="page">
  <Header />
  <button class="hints-toggler" onclick={toggleHints}>?</button>
  
  <main class="content">
    <h1>Meus Currículos:</h1>
    
    <div class="curriculos-grid">
      <button class="add-card" onclick={toggleCreate}>
        <span class="plus-icon">+</span>
      </button>
      
      {#each curriculums as curriculum }
      <button class="curriculum-wrapper" onclick={toggleUpdate(curriculum)}>
        <CandidateCurriculumItem
        id={curriculum.id}
        curriculumName={curriculum.nome}
        fileName={curriculum.arquivoNome}
        />
      </button>
      {/each}
    </div>
  </main>
  
  <button class="add-btn" onclick={toggleCreate}>
    <span class="plus-icon">+</span>
  </button>
</div>

{#if modalHints}
  <!-- svelte-ignore a11y_click_events_have_key_events -->
  <!-- svelte-ignore a11y_no_static_element_interactions -->
  <div class="modal-overlay" onclick={toggleHints}>
      <div class="modal-content" onclick={e => e.stopPropagation()}>
        <button class="close-btn" onclick={toggleHints} aria-label="Close modal">
            ×
        </button>
        <h1>Guia para criar um currículo</h1>
        <ol>
          {#each hints as hint}
            <li>{hint}</li>
          {/each}
        </ol>
      </div>
  </div>
{/if}

{#if modalCreate}
  <!-- svelte-ignore a11y_click_events_have_key_events -->
  <!-- svelte-ignore a11y_no_static_element_interactions -->
  <div class="modal-overlay" onclick={toggleCreate}>
      <div class="modal-content form-modal" onclick={e => e.stopPropagation()}>
        <button class="close-btn" onclick={toggleCreate} aria-label="Close modal">
            ×
        </button>
        <form method="POST" action="?/create" enctype="multipart/form-data">
          <input type="text" name="nome" placeholder="Nome do Currículo">
          <label class="pr-blue-btn" for="file-create">{fileInputValue}</label>
          <input
            onchange={filePicked} 
            type="file"
            name="curriculo" 
            accept=".pdf" 
            id="file-create"
            style:display="none"
            required
          >
          <input type="submit" class="pr-blue-btn" value="Criar">
        </form>
      </div>
  </div>
{/if}

{#if modalUpdate}
  <!-- svelte-ignore a11y_click_events_have_key_events -->
  <!-- svelte-ignore a11y_no_static_element_interactions -->
  <div class="modal-overlay" onclick={toggleUpdate()}>
      <div class="modal-content form-modal" onclick={e => e.stopPropagation()}>
        <button class="close-btn" onclick={toggleUpdate()} aria-label="Close modal">
            ×
        </button>
        <form method="POST" enctype="multipart/form-data">
          <input type="text" name="nome" value={curriculumName} placeholder="Nome do Currículo" required>
            <label class="pr-blue-btn" for="file-update">{fileInputValue}</label>
            <input
            onchange={filePicked} 
            type="file"
            name="curriculo" 
            accept=".pdf" 
            id="file-update"
            style:display="none"
            >
          <div>
            <input formaction="?/update&id={curriculumId}" type="submit" class="pr-blue-btn" value="Salvar">
            <input formaction="?/delete&id={curriculumId}" type="submit" class="pr-blue-btn"style:background="red" value="Apagar">
          </div>
        </form>
      </div>
  </div>
{/if}

<style>
  .page {
    min-height: 100vh;
    background-color: #f5f5f5;
    padding-bottom: 100px;
  }
  
  .content {
    padding: 2rem;
    max-width: 1400px;
    margin: 0 auto;
  }

  h1 {
    font-size: 2.5rem;
    font-weight: 500;
    margin: 0 0 5rem 0;
    color: #000;
  }

  .hints-toggler {
    position: fixed;
    top: 5rem;
    right: 2rem;
    height: 50px;
    width: 50px;
    background: #5b7bb4;
    color: white;
    border-radius: 100%;
  }
  
  .curriculos-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 1.5rem;
  }
  
  .add-card {
    aspect-ratio: 1;
    background: #5b7bb4;
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    transition: transform 0.2s, background 0.2s;
    cursor: pointer;
  }
  
  .add-card:hover {
    transform: scale(1.02);
    background: #4a6fa5;
  }
  
  .add-card .plus-icon {
    font-size: 6rem;
    color: white;
    font-weight: 300;
    line-height: 1;
  }

  .curriculum-wrapper {
    border-radius: 16px;
  }

  .curriculum-wrapper:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 12px rgba(91, 123, 180, 0.2);
  }
  
  .add-btn {
    cursor: pointer;
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    width: 80px;
    height: 80px;
    background: #5b7bb4;
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    transition: transform 0.2s, background 0.2s, box-shadow 0.2s;
    z-index: 100;
  }
  
  .add-btn:hover {
    transform: scale(1.05);
    background: #4a6fa5;
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
  }
  
  .add-btn .plus-icon {
    font-size: 3rem;
    color: white;
    font-weight: 300;
    line-height: 1;
  }

  /* Modais */

  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0.1);
    z-index: 101;
  }

  .modal-content {
    position: relative;
    background: #F6F7F9;
    max-height: 80vh;
    max-width: 60vw;
    border: 1px solid #4a6fa5;
    border-radius: 20px;
    padding: 2rem;
    overflow-y: scroll;
  }

  .close-btn {
    position: absolute;
    top: .5rem;
    right: .5rem;
    width: 32px;
    height: 32px;
    border: none;
    background: transparent;
    font-size: 2rem;
    line-height: 1;
    cursor: pointer;
    color: #666;
    transition: color 0.2s;
  }
  
  .close-btn:hover {
    color: #000;
  }

  .form-modal form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background-color: rgba(91, 123, 180, 0.2);
    gap: 4rem;
  }

  .form-modal input[type="text"] {
    font-size: 2ch;
    font-weight: 500;
    padding: 0 0 .2ch 0;
    background: none;
    border-bottom: 2px solid #4a6fa5;
    color: #4a6fa5;
    display: flex;
  }
  
  @media (max-width: 768px) {
    .content {
      padding: 1.5rem;
    }
    
    h1 {
      font-size: 2rem;
    }
    
    .curriculos-grid {
      grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
      gap: 1rem;
    }
    
    .add-btn {
      width: 64px;
      height: 64px;
      bottom: 1.5rem;
      right: 1.5rem;
    }
    
    .add-btn .plus-icon {
      font-size: 2.5rem;
    }
  }
</style>