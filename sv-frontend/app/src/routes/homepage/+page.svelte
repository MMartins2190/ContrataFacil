<script>
    import Header from "$lib/components/header.svelte";
    import Opening from "$lib/components/opening-item.svelte";

    let { data } = $props();
    
  const navLinks = [
    { label: 'Vagas', href: '/openings' },
    { label: 'Currículos', href: '/curriculums' },
    { label: 'Empresas', href: '/enterprise-intro' },
    { label: 'Sobre', href: '/about' }
  ];
</script>

<title>Home</title>

<div class="page">
  <Header />
  
  <!-- Featured Openings Section -->
  <section class="featured-openings">
    <h2>Vagas em destaque</h2>
    
    <div class="openings-display">
      {#each data.openings as opening}
        <Opening 
          id={opening.id}
          titulo={opening.titulo}
          salario={opening.salario}
          requisitos={opening.requisitos} 
          />
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
  
  .featured-openings h2 {
    text-align: center;
    font-size: 1.8rem;
    margin: 2rem 0 1rem 0;
    font-weight: bold;
  }
  
  .openings-display {
    height: 300px;
    background: linear-gradient(#3d5a85, #4a6fa5);
    display: flex;
    flex-direction: column;
    overflow-x: auto;
    flex-shrink: none;
    flex-wrap: wrap;
    scrollbar-width: none;
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
  @media (min-width: 768px) {
    
    .openings-display {
      grid-auto-columns: minmax(320px, 1fr);
    }
    
    .bottom-nav {
      padding: 3rem 2rem;
    }
  }
  
  @media (max-width: 767px) {
    .openings-display {
      grid-auto-columns: minmax(240px, 1fr);
    }
    
    .nav-link {
      width: 80px;
      height: 80px;
      font-size: 0.9rem;
    }
  }
</style>