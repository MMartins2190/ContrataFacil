<script>
  import Header from '$lib/components/header.svelte';
  
  let { data } = $props();
  
  const plans = [
    {
        name: "Padrão",
        pricing: "Gratuito",
        benefits: [
        "Nenhum",
        "Nenhum com prazer",
        ],
    },
    {
        name: "Candidato Pago",
        pricing: "R$00,00/mo",
        benefits: [
        "Tudo do padrão",
        "IA no currículo",
        ],
    },
    {
        name: "Empresarial",
        pricing: "R$00,00/mo",
        benefits: [
        "Tudo do padrão",
        "IA em vagas",
        ],
    },
  ];
</script>

<div class="page">
  <Header />
  
  <main class="content">
    <h1>Escolha um plano</h1>
    
    <div class="plans-grid">
      {#each plans as plan}
        <div class="plan-card">
          <div class="card-content">
            <h2 class="plan-name">{plan.name}</h2>
            <p class="plan-price">{plan.pricing}</p>
            
            <ul class="features-list">
              {#each plan.benefits as benefit}
                <li>{benefit}</li>
              {/each}
            </ul>
          </div>
          
          <button 
            class="plan-button"
            class:active={false}
            >
            {false ? 'Ativo' : 'Ativar'}
          </button>
        </div>
      {/each}
    </div>
  </main>
</div>

<style>
  .page {
    min-height: 100vh;
    background-color: #f5f5f5;
  }
  
  .content {
    padding: 2rem;
    max-width: 1400px;
    margin: 0 auto;
  }
  
  h1 {
    text-align: center;
    font-size: 2.5rem;
    font-weight: bold;
    margin: 0 0 3rem 0;
    color: #000;
    text-decoration: underline;
  }
  
  .plans-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .plan-card {
    background: #c4c4c4;
    border-radius: 16px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    min-height: 500px;
  }
  
  .card-content {
    padding: 2rem;
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
  
  .plan-name {
    font-size: 2rem;
    font-weight: bold;
    margin: 0;
    text-align: center;
    color: #000;
  }
  
  .plan-price {
    font-size: 1.25rem;
    font-weight: 500;
    margin: 0;
    text-align: center;
    color: #000;
  }
  
  .features-list {
    list-style: disc;
    padding-left: 2rem;
    margin: 0;
    flex: 1;
  }
  
  .features-list li {
    font-size: 1.1rem;
    line-height: 1.8;
    color: #000;
    margin-bottom: 0.5rem;
  }
  
  .plan-button {
    width: 100%;
    padding: 1.25rem;
    font-size: 1.5rem;
    font-weight: 600;
    color: white;
    background: #5b7bb4;
    border: none;
    cursor: pointer;
    transition: background 0.2s, opacity 0.2s;
  }
  
  .plan-button:hover {
    background: #4a6fa5;
  }
  
  .plan-button.active {
    background: #5b7bb4;
    cursor: default;
  }
  
  .plan-button.active:hover {
    background: #5b7bb4;
  }
  
  @media (max-width: 1024px) {
    .plans-grid {
      grid-template-columns: 1fr;
      max-width: 500px;
    }
    
    .plan-card {
      min-height: auto;
    }
  }
  
  @media (max-width: 768px) {
    .content {
      padding: 1.5rem;
    }
    
    h1 {
      font-size: 2rem;
      margin-bottom: 2rem;
    }
    
    .card-content {
      padding: 1.5rem;
    }
    
    .plan-name {
      font-size: 1.75rem;
    }
    
    .plan-price {
      font-size: 1.1rem;
    }
    
    .features-list li {
      font-size: 1rem;
    }
    
    .plan-button {
      font-size: 1.25rem;
      padding: 1rem;
    }
  }
</style>