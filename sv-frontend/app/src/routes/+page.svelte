<script>
  import Header from '$lib/components/header.svelte';
  import Opening from '$lib/components/opening-item.svelte';

  let { data } = $props();

  const navLinks = [
    { label: 'Vagas', href: '/openings' },
    { label: 'Currículos', href: '/curriculums' },
    { label: 'Empresas', href: '/enterprise-intro' },
    { label: 'Sobre', href: '/about' }
  ];
</script>

<title>ContrataFácil</title>

<div class="page">
  <Header />
  
  <main class="content">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-text">
        <h1>Encontre talentos com facilidade.</h1>
        <p class="hero-description">
          Uma plataforma inteligente de currículos com foco em filtragem e categorização para facilitar contratações.
        </p>
        
        <div class="cta-buttons">
          <a href="/login" class="btn-primary">Começar agora</a>
          <a href="/login?linkedin=true" class="btn-secondary">Entrar com Linkedin</a>
        </div>
      </div>
    </section>
    
    <!-- How It Works Section -->
    <section class="how-it-works">
      <h2>Como Funciona <span class="subtitle">em 3 passos simples</span></h2>
      
      <div class="steps-grid">
        <div class="step-card">
          <div class="step-icon linkedin">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M6 9H2V21H6V9Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <h3>Cadastro rápido com Linkedin</h3>
          <p>Importe seu perfil e currículo em segundos.</p>
        </div>
        
        <div class="step-card">
          <div class="step-icon categorization">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 16V8C20.9996 7.64927 20.9071 7.30481 20.7315 7.00116C20.556 6.69751 20.3037 6.44536 20 6.27L13 2.27C12.696 2.09446 12.3511 2.00205 12 2.00205C11.6489 2.00205 11.304 2.09446 11 2.27L4 6.27C3.69626 6.44536 3.44398 6.69751 3.26846 7.00116C3.09294 7.30481 3.00036 7.64927 3 8V16C3.00036 16.3507 3.09294 16.6952 3.26846 16.9988C3.44398 17.3025 3.69626 17.5546 4 17.73L11 21.73C11.304 21.9055 11.6489 21.9979 12 21.9979C12.3511 21.9979 12.696 21.9055 13 21.73L20 17.73C20.3037 17.5546 20.556 17.3025 20.7315 16.9988C20.9071 16.6952 20.9996 16.3507 21 16Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M3.27002 6.96L12 12.01L20.73 6.96" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M12 22.08V12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <h3>Categorização inteligente</h3>
          <p>Ajudamos a organizar currículos por área, formação e habilidades.</p>
        </div>
        
        <div class="step-card">
          <div class="step-icon search">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M21 21L16.65 16.65" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <h3>Contrate com assertividade</h3>
          <p>Use filtros para encontrar os candidatos ideais rapidamente</p>
        </div>
      </div>
    </section>
  </main>

  <section class="featured-openings">
    <h2>Vagas em destaque</h2>
    
    <div class="openings-display">
      {#each data.openings as opening}
      <div class="opening-wrapper">
        <Opening 
          id={opening.id}
          titulo={opening.titulo}
          salario={opening.salario}
          requisitos={opening.requisitos} 
          />
      </div>
      {/each}
    </div>
  </section>
  
  <!-- Navigation Links -->
  <nav class="bottom-nav">
    {#each navLinks as link}
      <a href={link.href} class="nav-link">
        {link.label}
      </a>
    {/each}
  </nav>
</div>

<style>
  .page {
    min-height: 100vh;
  }
  
  .content {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 2rem;
  }
  
  /* Hero Section */
  .hero {
    display: grid;
    grid-template-columns: 1fr;
    text-align: center;
    gap: 4rem;
    align-items: center;
    padding: 4rem 0;
    min-height: 500px;
    background: inherit;
  }
  
  .hero-text h1 {
    font-size: 3rem;
    font-weight: bold;
    margin: 0 0 1.5rem 0;
    color: #000;
    line-height: 1.2;
  }
  
  .hero-description {
    font-size: 1.1rem;
    line-height: 1.6;
    color: #333;
    margin: 0 0 2rem 0;
  }
  
  .cta-buttons {
    display: flex;
    gap: 1rem;
    max-width: 500px;
    margin: 0 auto;
  }
  
  .btn-primary,
  .btn-secondary {
    padding: 1rem 2rem;
    font-size: 1rem;
    font-weight: 500;
    text-align: center;
    text-decoration: none;
    border-radius: 8px;
    transition: transform 0.2s, background 0.2s;
    cursor: pointer;
  }
  
  .btn-primary {
    background: #5b7bb4;
    color: white;
    border: none;
  }
  
  .btn-primary:hover {
    background: #4a6fa5;
    transform: translateY(-2px);
  }
  
  .btn-secondary {
    background: white;
    color: #5b7bb4;
    border: 2px solid #5b7bb4;
  }
  
  .btn-secondary:hover {
    background: #f5f8fc;
    transform: translateY(-2px);
  }
  
  /* How It Works Section */
  .how-it-works {
    padding: 4rem 0;
  }
  
  .how-it-works h2 {
    font-size: 2.5rem;
    font-weight: bold;
    margin: 0 0 3rem 0;
    color: #000;
  }
  
  .subtitle {
    font-size: 1.5rem;
    font-weight: normal;
    color: #666;
    margin-left: 0.5rem;
  }
  
  .steps-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
    margin-top: 3rem;
  }
  
  .step-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 1rem;
  }
  
  .step-icon {
    width: 72px;
    height: 72px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    margin-bottom: 0.5rem;
  }
  
  .step-icon.linkedin {
    background: #5b7bb4;
  }
  
  .step-icon.categorization {
    background: #5b7bb4;
  }
  
  .step-icon.search {
    background: #5b7bb4;
  }
  
  .step-card h3 {
    font-size: 1.25rem;
    font-weight: 600;
    margin: 0;
    color: #000;
  }
  
  .step-card p {
    font-size: 1rem;
    line-height: 1.6;
    color: #666;
    margin: 0;
  }

  /** Previously on homepage **/
  .featured-openings h2 {
    text-align: center;
    font-size: 1.8rem;
    margin: 2rem 0 1rem 0;
    font-weight: bold;
  }

  .opening-wrapper {
    width: 600px;
    height: 100%;
    margin: 0 .5rem;
  }
  
  .openings-display {
    height: 300px;
    background: linear-gradient(#3d5a85, #4a6fa5);
    display: flex;
    overflow-x: auto;
    scrollbar-width: none;
    padding: 1rem 0;
  }
  
  /* Bottom Navigation */
  .bottom-nav {
    display: flex;
    gap: 1rem;
    padding: 2rem 1rem;
    justify-content: center;
    flex-wrap: wrap;
  }
  
  .nav-link {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 100px;
    background: #4a6fa5;
    color: white;
    text-decoration: none;
    border-radius: 12px;
    font-weight: 500;
    transition: transform 0.2s, background 0.2s;
  }
  
  .nav-link:hover {
    transform: translateY(-2px);
    background: #3d5a85;
  }
  
  /* Responsive Design */
  @media (max-width: 1024px) {
    .hero {
      grid-template-columns: 1fr;
      gap: 3rem;
      text-align: center;
    }
    
    .hero-text {
      order: 1;
    }
    
    .cta-buttons {
      margin: 0 auto;
    }
    
    .steps-grid {
      grid-template-columns: 1fr;
      gap: 2rem;
    }
  }
  
  @media (max-width: 768px) {
    .content {
      padding: 0 1.5rem;
    }
    
    .hero {
      padding: 2rem 0;
    }
    
    .hero-text h1 {
      font-size: 2rem;
    }
    
    .hero-description {
      font-size: 1rem;
    }
    
    .how-it-works {
      padding: 3rem 0;
    }
    
    .how-it-works h2 {
      font-size: 1.75rem;
    }
    
    .subtitle {
      font-size: 1.1rem;
      display: block;
      margin-left: 0;
      margin-top: 0.5rem;
    }
    
    .step-icon {
      width: 64px;
      height: 64px;
    }
  }
</style>