<script>
    import Header from "$lib/components/header.svelte";

    let { data } = $props();
    let {
        id = "não há",
        title = "Vaga00",
        salary = "0000,00",
        description = "Não há descrição",
        requisites = "Nenhum Requisito foi posto para essa vaga",
        boosted = false,
    } = data;

</script>

<title>{title}</title>

<Header />

<div>
  <div class="banner">
    <h1 class="title">{title}</h1>
  </div>

  <main>
    <div class="apply-section">
      <button class="pr-blue-btn apply-button">Enviar Currículo</button>
      <div class="end-section">
        {#if boosted}
        <i style:margin-right=1rem>Impulsionada</i>
        {/if}  
        <p style:color="#5865C7"
          style:font-size="2rem"
          style:font-weight="600">R$ {salary}</p>
      </div>
    </div>
    
    <div class="description-section">
      <h2 class="section-title">Descrição</h2>
      <p class="description-text">{description}</p>
    </div>
    
    <div class="requisites-section">
      <h2 class="section-title">Requisitos</h2>
      <p class="requisites-text">{requisites}</p>
    </div>
  </main>
</div>

<style>
  .banner {
    background-color: #5175b8;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px;
  }

  .title {
    color: white;
    font-weight: 600;
  }

  main {
    padding: 1.5rem 3rem;
    font-size: 1.25rem;
  }

  .apply-section {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1.5rem;
  }

  .apply-button {
    border: none;
    padding: 1rem 2rem;
    border-radius: 30px;
    font-weight: 500;
    cursor: pointer;
  }

  .end-section {
    display: flex;
  }

  .section-title {
    font-size: 1.3rem;
    color: #333;
    font-weight: 600;
    margin: 0 0 0.75rem 0;
  }

  .description-section {
    margin: 0 0 1.25rem 0;
  }

  .description-text {
    color: #666;
    line-height: 1.6;
  }

  .requisites-text {
    color: #666;
    line-height: 1.6;
  }
</style>
