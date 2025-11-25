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
          fileInputValue = curriculum.arquivo_nome;
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
        fileName={curriculum.arquivo_nome}
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
      <div class="modal-content hints-modal" onclick={e => e.stopPropagation()}>
        <button class="close-btn" onclick={toggleHints} aria-label="Close modal">
            ×
        </button>
        <h2 class="modal-title">Guia para criar um currículo</h2>
        <ol class="hints-list">
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
        <h2 class="modal-title">Criar Novo Currículo</h2>
        <form method="POST" action="?/create" enctype="multipart/form-data">
          <input type="text" name="nome" placeholder="Nome do Currículo" required>
          <label class="pr-blue-btn file-label" for="file-create">
            <span class="file-icon">📄</span>
            {fileInputValue}
          </label>
          <input
            onchange={filePicked} 
            type="file"
            name="curriculo" 
            accept=".pdf" 
            id="file-create"
            style:display="none"
            required
          >
          <button type="submit" class="pr-blue-btn submit-btn">Criar</button>
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
        <h2 class="modal-title">Editar Currículo</h2>
        <form method="POST" enctype="multipart/form-data">
          <input type="text" name="nome" value={curriculumName} placeholder="Nome do Currículo" required>
          <label class="pr-blue-btn file-label" for="file-update">
            <span class="file-icon">📄</span>
            {fileInputValue}
          </label>
          <input
            onchange={filePicked} 
            type="file"
            name="curriculo" 
            accept=".pdf" 
            id="file-update"
            style:display="none"
          >
          <div class="form-actions">
            <button formaction="?/update&id={curriculumId}" type="submit" class="pr-blue-btn submit-btn">Salvar</button>
            <button formaction="?/delete&id={curriculumId}" type="submit" class="pr-blue-btn delete-btn">Apagar</button>
          </div>
        </form>
      </div>
  </div>
{/if}

<style>
  .page {
    min-height: 100vh;
    background: linear-gradient(135deg, #f5f7fa 0%, #f0f2f5 100%);
    padding-bottom: 100px;
  }
  
  .content {
    padding: 2rem;
    max-width: 1400px;
    margin: 0 auto;
  }

  h1 {
    font-size: 2.5rem;
    font-weight: 600;
    margin: 0 0 3rem 0;
    color: #1a202c;
    letter-spacing: -0.5px;
  }

  .hints-toggler {
    position: fixed;
    top: 5rem;
    right: 2rem;
    height: 50px;
    width: 50px;
    background: #5b7bb4;
    color: white;
    border: none;
    border-radius: 50%;
    font-size: 1.5rem;
    font-weight: 600;
    cursor: pointer;
    box-shadow: 0 4px 12px rgba(91, 123, 180, 0.3);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: 100;
  }

  .hints-toggler:hover {
    background: #4a6fa5;
    transform: scale(1.1);
    box-shadow: 0 6px 20px rgba(91, 123, 180, 0.4);
  }

  .hints-toggler:active {
    transform: scale(0.95);
    box-shadow: 0 2px 8px rgba(91, 123, 180, 0.3);
  }
  
  .curriculos-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 1.5rem;
  }
  
  .add-card {
    aspect-ratio: 1;
    background: linear-gradient(135deg, #5b7bb4 0%, #4a6fa5 100%);
    border: 2px dashed rgba(255, 255, 255, 0.3);
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
    box-shadow: 0 2px 8px rgba(91, 123, 180, 0.15);
  }
  
  .add-card:hover {
    transform: translateY(-4px) scale(1.02);
    background: linear-gradient(135deg, #4a6fa5 0%, #3d5f94 100%);
    border-color: rgba(255, 255, 255, 0.5);
    box-shadow: 0 8px 24px rgba(91, 123, 180, 0.3);
  }

  .add-card:active {
    transform: translateY(-2px) scale(0.98);
    box-shadow: 0 4px 12px rgba(91, 123, 180, 0.2);
  }
  
  .add-card .plus-icon {
    font-size: 6rem;
    color: white;
    font-weight: 300;
    line-height: 1;
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .curriculum-wrapper {
    border-radius: 16px;
    border: none;
    background: white;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  }

  .curriculum-wrapper:hover {
    transform: translateY(-6px);
    box-shadow: 0 12px 32px rgba(91, 123, 180, 0.2);
  }

  .curriculum-wrapper:active {
    transform: translateY(-3px);
    box-shadow: 0 6px 16px rgba(91, 123, 180, 0.15);
  }
  
  .add-btn {
    cursor: pointer;
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    width: 80px;
    height: 80px;
    background: linear-gradient(135deg, #5b7bb4 0%, #4a6fa5 100%);
    border: none;
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    box-shadow: 0 6px 20px rgba(91, 123, 180, 0.4);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: 100;
  }
  
  .add-btn:hover {
    transform: scale(1.1) rotate(90deg);
    background: linear-gradient(135deg, #4a6fa5 0%, #3d5f94 100%);
    box-shadow: 0 8px 28px rgba(91, 123, 180, 0.5);
  }

  .add-btn:active {
    transform: scale(1.0) rotate(90deg);
    box-shadow: 0 4px 16px rgba(91, 123, 180, 0.4);
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
    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(4px);
    z-index: 101;
    animation: fadeIn 0.2s ease-out;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  .modal-content {
    position: relative;
    background: white;
    max-height: 80vh;
    max-width: 60vw;
    min-width: 500px;
    border-radius: 24px;
    padding: 2.5rem;
    overflow-y: auto;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
    animation: slideUp 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  @keyframes slideUp {
    from {
      transform: translateY(20px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  .modal-title {
    font-size: 1.8rem;
    font-weight: 600;
    color: #1a202c;
    margin: 0 0 2rem 0;
    text-align: center;
  }

  .close-btn {
    position: absolute;
    top: 1rem;
    right: 1rem;
    width: 40px;
    height: 40px;
    border: none;
    background: #f0f2f5;
    border-radius: 50%;
    font-size: 1.5rem;
    line-height: 1;
    cursor: pointer;
    color: #666;
    transition: all 0.2s ease;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .close-btn:hover {
    background: #e2e5ea;
    color: #1a202c;
    transform: rotate(90deg);
  }

  .close-btn:active {
    transform: rotate(90deg) scale(0.9);
  }

  .hints-modal {
    max-width: 700px;
  }

  .hints-list {
    padding-left: 1.5rem;
    line-height: 1.8;
    color: #2d3748;
  }

  .hints-list li {
    margin-bottom: 1.2rem;
    padding-left: 0.5rem;
  }

  .hints-list li::marker {
    color: #5b7bb4;
    font-weight: 600;
  }

  .form-modal {
    max-width: 550px;
  }

  .form-modal form {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .form-modal input[type="text"] {
    font-size: 1.1rem;
    font-weight: 500;
    padding: 0.8rem 1rem;
    background: #f8f9fa;
    border: 2px solid #e2e5ea;
    border-radius: 12px;
    color: #1a202c;
    transition: all 0.2s ease;
  }

  .form-modal input[type="text"]:focus {
    outline: none;
    border-color: #5b7bb4;
    background: white;
    box-shadow: 0 0 0 3px rgba(91, 123, 180, 0.1);
  }

  .pr-blue-btn {
    padding: 1rem 2rem;
    background: linear-gradient(135deg, #5b7bb4 0%, #4a6fa5 100%);
    color: white;
    border: none;
    border-radius: 12px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease;
    box-shadow: 0 4px 12px rgba(91, 123, 180, 0.2);
  }

  .pr-blue-btn:hover {
    background: linear-gradient(135deg, #4a6fa5 0%, #3d5f94 100%);
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(91, 123, 180, 0.3);
  }

  .pr-blue-btn:active {
    transform: translateY(0);
    box-shadow: 0 2px 8px rgba(91, 123, 180, 0.2);
  }

  .file-label {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    text-align: center;
  }

  .file-icon {
    font-size: 1.2rem;
  }

  .submit-btn {
    margin-top: 0.5rem;
  }

  .form-actions {
    display: flex;
    gap: 1rem;
    margin-top: 0.5rem;
  }

  .form-actions button {
    flex: 1;
  }

  .delete-btn {
    background: linear-gradient(135deg, #dc3545 0%, #c82333 100%);
  }

  .delete-btn:hover {
    background: linear-gradient(135deg, #c82333 0%, #bd2130 100%);
  }
  
  @media (max-width: 768px) {
    .content {
      padding: 1.5rem;
    }
    
    h1 {
      font-size: 2rem;
      margin-bottom: 2rem;
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

    .modal-content {
      max-width: 90vw;
      min-width: 0;
      padding: 2rem;
    }

    .hints-toggler {
      top: 4rem;
      right: 1rem;
      width: 44px;
      height: 44px;
    }
  }
</style>