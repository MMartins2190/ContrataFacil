<script>
  import Header from '$lib/components/header.svelte';
  import Opening from '$lib/components/opening-item.svelte';
  
  let { data } = $props();

    console.log(data);

  const {
    cnpj,
    name,
    email,
    description,
    paid,
  } = data.empresa;
</script>

<title>{name}</title>

<div class="page">
  <Header />
  
  <main class="content">
    <div class="layout">
      <!-- Left Column: Company Info -->
      <aside class="company-info">
        <h1>{name}</h1>
        
        <section class="description-section">
          <h2>Descrição:</h2>
          <div class="description-box">
            <p>{description}</p>
          </div>
        </section>
        
        <div class="info-item">
          <span class="label">CNPJ</span>
          <span class="value">{cnpj}</span>
        </div>
        
        <div class="info-item">
          <span class="label">E-mail</span>
          <span class="value">{email}</span>
        </div>
      </aside>
      
      <section class="active-jobs">
        <h2 class="section-title">Vagas ativas</h2>
        {#if data.openings.length < 1}
            <h2 style:color=white>Não há vagas disponíveis para a sua empresa <a href="/opening-form">Registre uma!</a></h2>
        {:else}    
            <div class="jobs-list">
            {#each data.openings as opening}
                <Opening
                id={opening.id}
                titulo={opening.titulo}
                salario={opening.salario}
                requisitos={opening.requisitos}
                />
            {/each}
            </div>
        {/if}
      </section>
    </div>
  </main>
</div>

<style>
  .page {
    min-height: 100vh;
  }
  
  .content {
    padding: 2rem;
    max-width: 1400px;
    margin: 0 auto;
  }
  
  .layout {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    align-items: start;
  }
  
  /* Left Column - Company Info */
  .company-info {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
  
  h1 {
    font-size: 3rem;
    font-weight: bold;
    margin: 0;
    color: #000;
  }
  
  .description-section {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }
  
  h2 {
    font-size: 1.25rem;
    font-weight: 600;
    margin: 0;
    color: #000;
  }
  
  .description-box {
    background: white;
    border: 2px solid #333;
    border-radius: 16px;
    padding: 1.5rem;
    max-height: 400px;
    overflow-y: auto;
  }
  
  .description-box p {
    margin: 0;
    line-height: 1.6;
    color: #333;
    word-wrap: break-word;
    overflow-wrap: break-word;
  }
  
  .info-item {
    background: white;
    border: 2px solid #333;
    border-radius: 16px;
    padding: 1rem 1.5rem;
    display: flex;
    gap: 1rem;
    align-items: center;
  }
  
  .label {
    font-size: 1.1rem;
    font-weight: 600;
    color: #000;
    min-width: 80px;
  }
  
  .value {
    font-size: 1rem;
    color: #333;
  }
  
  /* Right Column - Active Jobs */
  .active-jobs {
    background: #5b7bb4;
    border-radius: 16px;
    padding: 2rem;
    min-height: 600px;
  }

  .active-jobs a {
    color: inherit;
    font-weight: inherit;
    text-decoration: underline;
  }
  
  .section-title {
    font-size: 1.8rem;
    font-weight: 600;
    color: white;
    text-align: center;
    margin: 0 0 2rem 0;
  }
  
  .jobs-list {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
  
  /* Scrollbar styling for description */
  .description-box::-webkit-scrollbar {
    width: 8px;
  }
  
  .description-box::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 4px;
  }
  
  .description-box::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 4px;
  }
  
  .description-box::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
  
  @media (max-width: 1024px) {
    .layout {
      grid-template-columns: 1fr;
    }
    
    .active-jobs {
      min-height: auto;
    }
  }
  
  @media (max-width: 768px) {
    .content {
      padding: 1.5rem;
    }
    
    h1 {
      font-size: 2rem;
    }
    
    .section-title {
      font-size: 1.5rem;
    }
    
    .description-box {
      max-height: 300px;
    }
    
    .active-jobs {
      padding: 1.5rem;
    }
  }
</style>