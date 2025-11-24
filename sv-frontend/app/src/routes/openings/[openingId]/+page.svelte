<!--
  -> Exibir Status da Candidatura
  -> Fazer data.candidacy reativo.
-->
<script>
  import { PUBLIC_API_ROOT_URL } from '$env/static/public';
  import Header from '$lib/components/header.svelte';
  import CandidateCurriculumItem from '$lib/components/candidate-curriculum.svelte';
  import Opening from '$lib/components/opening-item.svelte';
  
  let { data } = $props();
  const {
    id, 
    title,
    salary,
    description,
    requisites,
    boosted,
  } = data.currentOpening;

  // Altere por uma verificação
  const empresa = false;
  const openingsList = data.openings;
  let currentCurriculum = null;

  if (data.candidacy) {
    currentCurriculum = data.curriculums.find(
      curriculo => curriculo.id === data.candidacy.curriculo
    );
  }

  let showModal = $state(false);
  let selectedCurriculum = $state(currentCurriculum);
  let showSidebar = $state(false);
  
  function toggleModal() {
    showModal = !showModal;
  }

  function selectCurriculum(curriculumObj) {
    return async () => {
      const openingId = id;
      const candidacyData = new FormData();
    
      candidacyData.append("curriculo", curriculumObj.id);
      candidacyData.append("vaga", openingId);
      
      if (selectedCurriculum) {
        const registerCandidacy = await fetch
        (`${PUBLIC_API_ROOT_URL}/candidaturas/${data.candidacy.id}/`, {
        method: "PUT",
        body: candidacyData,
        });

        if (!registerCandidacy.ok) {
          console.log("Resposta do servidor", await registerCandidacy.json());
          alert("Houve um erro enviando currículo. Tente de novo.");
          return;
        };
      }
      else {
        const registerCandidacy = await fetch(`${PUBLIC_API_ROOT_URL}/candidaturas/`, {
          method: "POST",
          body: candidacyData,
        });
    
        if (!registerCandidacy.ok) {
          console.log("Resposta do servidor", await registerCandidacy.json());
          alert("Houve um erro enviando currículo. Tente de novo.");
          return;
        };
      }

        selectedCurriculum = {
          id: curriculumObj.id,
          nome: curriculumObj.nome,
          curriculo: curriculumObj.curriculo,
        };
        toggleModal();
    }
  }

  async function deleteSelection() {
    const fetchData = await fetch(
      `${PUBLIC_API_ROOT_URL}/candidaturas/${data.candidacy.id}/`,
    { method: "DELETE" }
    ).catch(e=>console.warn("Erro", e));
    if (!fetchData.ok) {
      alert("Não foi possível remover esta candidatura");
      return console.log(await fetchData.json())
    };
    selectedCurriculum = null;
  }
  
  function toggleSidebar() {
    showSidebar = !showSidebar;
  }
</script>

<title>{title}</title>

<Header />
<div class="page">
  
  <main class="content">
    <div class="info-bar">
      <h1>{title}</h1>
      <div>
        {#if boosted && empresa}
        <span class="boosted">Impulsionada!</span>
        {/if}
        <span class="salary">R$ {salary}</span>
      </div>
    </div>

    <section class="operations-section">
      {#if empresa}
        <a href="/opening-form?id={id}" class="send-button">Editar Vaga</a>
      {:else}
        {#if !selectedCurriculum}
          <button class="send-button" onclick={toggleModal}>Enviar Currículo</button>
          {:else}
            <div>
              <div class="candidacy-info">
                <div>
                  <button class="send-button" onclick={toggleModal}>Mudar Currículo</button>
                  <button class="send-button" onclick={deleteSelection} style:background=red>Remover</button>
                </div>
                <span class="status">{"???"}</span>
              </div>
              <CandidateCurriculumItem 
                fileName={selectedCurriculum.arquivoNome}
                curriculumName={selectedCurriculum.nome}
                />
            </div>
        {/if}
      {/if}
    </section>
    
    <section class="description-section">
      <h2>Descrição</h2>
      <p>{description}</p>
    </section>
    
      <section class="requirements-section">
        <h2>Requisitos</h2>
        <p>{requisites}</p>
      </section>
  </main>
  
  <!-- Sidebar -->
  <button class="toggle-sidebar" onclick={toggleSidebar} class:shifted={showSidebar} aria-label="Toggle sidebar">
    {#if showSidebar}
      ◀
      {:else}
        ▶
    {/if}
  </button>
  <aside class="sidebar" class:visible={showSidebar}>
    <div class="sidebar-content">
      <h3>Mais vagas</h3>
      
      <div class="filter-group">
        <label for="vaga-search">Escolha uma vaga</label>
        <input 
          type="text" 
          id="vaga-search" 
          placeholder="Digite uma vaga"
        />
      </div>
      
      <div class="job-listings">
        {#if openingsList < 1}
          <p style:color="white">Não há outras vagas</p>
          {:else}
          {#each openingsList as opening}
          <div class="opening-wrapper">
            <Opening
            id={opening.id}
            titulo={opening.titulo}
            salario={opening.salario}
            descricao={opening.descricao}
            requisitos={opening.requisitos}
            />
          </div>
          {/each}
        {/if}
      </div>
    </div>
  </aside>
  
  <!-- Modal -->
  {#if showModal}
    <div class="modal-overlay">
      <div class="modal-content" >
        <div class="modal-header">
          <h2>Selecione um currículo</h2>
          <button class="close-button" onclick={toggleModal} aria-label="Close">×</button>
        </div>
        
        <div class="curriculum-list">
          {#if data.curriculums < 1}
            <p>Você não tem nenhum currículo... Que tal <a href="/curriculums" style:color=#5b7bb4>Criar um?</a></p>
          {:else}
            {#each data.curriculums as curriculum}
              <button class="curriculum-wrapper" onclick={selectCurriculum(curriculum)}>
                <CandidateCurriculumItem 
                fileName={curriculum.arquivoNome}
                curriculumName={curriculum.nome}
                />
              </button>
            {/each}
          {/if}
        </div>
        
        <div class="modal-footer">
          <button class="cancel-button" onclick={toggleModal}>Cancelar</button>
        </div>
      </div>
    </div>
  {/if}
</div>

<style>
  .page {
    min-height: 90vh;
  }
  
  .content {
    padding: 2rem;
    max-width: 1200px;
    margin: 0 auto;
    transition: margin-right 0.3s;
  }
  
  h1 {
    font-size: 3rem;
    font-weight: normal;
    color: #5b7bb4;
    margin: 0;
  }
  
  .toggle-sidebar {
    position: fixed;
    top: 0;
    right: 0;
    width: 100px;
    height: 100vh;
    background: #7d9ac8;
    color: white;
    font-size: 5ch;
    cursor: pointer;
    transition: right 0.3s;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .toggle-sidebar.shifted {
    z-index: 100;
    right: 480px
  }
  
  .info-bar {
    border-bottom: 2px solid #333;
    padding-bottom: 1.5rem;
    margin-bottom: 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .info-bar div {
    background:rgba(91, 123, 180, 0.2);
  }
  
  .operations-section {
    margin: 2rem 0;
  }

  .operations-section div {
    background: rgba(91, 123, 180, 0.2);
    display: flex;
    border-radius: 20px;
    height: 250px
  }

  .candidacy-info {
    display: flex;
    flex-direction: column;
    margin: 0 2rem 0 0;
    justify-content: space-between;
  }

  .candidacy-info div {
    display: inherit;
    flex-direction: inherit;
    gap: 1rem;
  }

  .send-button {
    padding: 0.875rem 2rem;
    font-size: 1.1rem;
    font-weight: 500;
    color: white;
    background: #5b7bb4;
    border: none;
    border-radius: 24px;
    cursor: pointer;
    transition: background 0.2s, transform 0.2s;
  }
  
  .send-button:hover {
    background: #4a6fa5;
    transform: translateY(-2px);
  }
  
  .salary, .boosted {
    font-size: 2rem;
    font-weight: 600;
    color: #5b7bb4;
  }
  
  .description-section,
  .requirements-section {
    margin-bottom: 2rem;
  }
  
  h2 {
    font-size: 1.5rem;
    font-weight: 600;
    margin: 0 0 1rem 0;
    color: #000;
  }
  
  p {
    font-size: 1rem;
    line-height: 1.6;
    color: #333;
    margin: 0;
  }
  
  /* Sidebar */
  .sidebar {
    position: fixed;
    top: 0;
    right: -480px;
    width: 480px;
    height: 100vh;
    background: #7d9ac8;
    transition: right 0.3s;
    z-index: 100;
    overflow-y: auto;
    border-left: 2px dotted white
  }
  
  .sidebar.visible {
    right: 0;
  }
  
  .sidebar-content {
    padding: 2rem;
  }
  
  .sidebar h3 {
    font-size: 1.8rem;
    font-weight: 600;
    color: white;
    margin: 0 0 2rem 0;
    text-align: center;
  }
  
  .filter-group {
    margin-bottom: 1.5rem;
  }
  
  .filter-group label {
    display: block;
    font-size: 0.9rem;
    color: white;
    margin-bottom: 0.5rem;
  }
  
  .filter-group input {
    width: 100%;
    padding: 0.75rem 1rem;
    font-size: 1rem;
    border: 2px solid #5b7bb4;
    border-radius: 8px;
    background: white;
  }
  
  .filter-group input:focus {
    outline: none;
    border-color: #4a6fa5;
  }
  
  .job-listings {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .opening-wrapper {
    height: 250px;
  }
  
  /* Modal */
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    padding: 1rem;
  }
  
  .modal-content {
    background: white;
    border-radius: 16px;
    width: 100%;
    max-width: 600px;
    max-height: 80vh;
    display: flex;
    flex-direction: column;
  }
  
  .modal-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.5rem;
    border-bottom: 2px solid #e0e0e0;
  }
  
  .modal-header h2 {
    margin: 0;
    font-size: 1.5rem;
  }
  
  .close-button {
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
  
  .close-button:hover {
    color: #000;
  }
  
  .curriculum-list {
    padding: 1.5rem;
    overflow-y: auto;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1.5rem;
    align-items: center;
  }

  .curriculum-wrapper {
    border-radius: 16px;
    box-shadow: 0 4px 12px rgba(91, 123, 180, 0.2);
  }
  
  .modal-footer {
    padding: 1.5rem;
    border-top: 2px solid #e0e0e0;
    display: flex;
    justify-content: center;
  }
  
  .cancel-button {
    padding: 0.75rem 2rem;
    font-size: 1rem;
    color: #666;
    background: transparent;
    border: 2px solid #666;
    border-radius: 24px;
    cursor: pointer;
    transition: background 0.2s, color 0.2s;
  }
  
  .cancel-button:hover {
    background: #f5f5f5;
    color: #333;
  }
  
  @media (max-width: 1024px) {
    .sidebar {
      width: 100%;
      right: -100%;
    }
  }
  
  @media (max-width: 768px) {
    .content {
      padding: 1.5rem;
    }
    
    h1 {
      font-size: 2rem;
    }
    
    .toggle-sidebar {
      width: 48px;
      height: 48px;
      font-size: 1.2rem;
    }
    
    .info-bar {
      flex-direction: column;
      align-items: flex-start;
      gap: 1rem;
    }
    
    .salary {
      font-size: 1.25rem;
    }
  }
</style>