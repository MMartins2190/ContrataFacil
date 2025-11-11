<script>
    import Header from "$lib/components/header.svelte";
    import Opening from "$lib/components/opening-item.svelte";

    let { data } = $props();

    const carouselImages = [
    '/images/carousel-1.jpg',
    '/images/carousel-2.jpg',
    '/images/carousel-3.jpg'
  ];
  
  let currentSlide = 0;
  
  function nextSlide() {
    currentSlide = (currentSlide + 1) % carouselImages.length;
  }
  
  function prevSlide() {
    currentSlide = (currentSlide - 1 + carouselImages.length) % carouselImages.length;
  }
  
  const navLinks = [
    { label: 'Vagas', href: '/vagas' },
    { label: 'Currículos', href: '/curriculos' },
    { label: 'Empresas', href: '/empresas' },
    { label: 'Sobre', href: '/sobre' }
  ];
</script>
<div class="page">
  <Header />
  
  <!-- Carousel Section -->
  <section class="carousel">
    <button class="carousel-button prev" on:click={prevSlide} aria-label="Previous slide">
      ‹
    </button>
    
    <div class="carousel-content">
      <img src={carouselImages[currentSlide]} alt="Imagem sobre trabalho" />
      <p class="carousel-caption">Carrossel de imagens genéricas sobre trabalho</p>
    </div>
    
    <button class="carousel-button next" on:click={nextSlide} aria-label="Next slide">
      ›
    </button>
  </section>
  
  <!-- Featured Openings Section -->
  <section class="featured-openings">
    <h2>Vagas em destaque</h2>
    
    <div class="openings-grid">
      {#each data.featuredOpenings as opening (opening.id)}
        <Opening {opening} />
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
    background-color: #f5f5f5;
  }
  
  /* Carousel Styles */
  .carousel {
    position: relative;
    width: 100%;
    height: 300px;
    background-color: #9e9e9e;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }
  
  .carousel-content {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
  }
  
  .carousel-content img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .carousel-caption {
    position: absolute;
    color: white;
    font-size: 1.2rem;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  }
  
  .carousel-button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(255, 255, 255, 0.8);
    border: none;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    font-size: 2rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
    transition: background 0.2s;
  }
  
  .carousel-button:hover {
    background: rgba(255, 255, 255, 1);
  }
  
  .carousel-button.prev {
    left: 20px;
  }
  
  .carousel-button.next {
    right: 20px;
  }
  
  /* Featured Openings Section */
  .featured-openings {
    padding: 2rem 1rem;
    background: white;
  }
  
  .featured-openings h2 {
    text-align: center;
    font-size: 1.8rem;
    margin-bottom: 2rem;
    font-weight: bold;
  }
  
  .openings-grid {
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: minmax(280px, 1fr);
    gap: 1rem;
    overflow-x: auto;
    padding: 1rem 0;
    scroll-behavior: smooth;
    -webkit-overflow-scrolling: touch;
  }
  
  .openings-grid::-webkit-scrollbar {
    height: 8px;
  }
  
  .openings-grid::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 4px;
  }
  
  .openings-grid::-webkit-scrollbar-thumb {
    background: #4a6fa5;
    border-radius: 4px;
  }
  
  .openings-grid::-webkit-scrollbar-thumb:hover {
    background: #3d5a85;
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
    .carousel {
      height: 400px;
    }
    
    .featured-openings {
      padding: 3rem 2rem;
    }
    
    .openings-grid {
      grid-auto-columns: minmax(320px, 1fr);
    }
    
    .bottom-nav {
      padding: 3rem 2rem;
    }
  }
  
  @media (max-width: 767px) {
    .openings-grid {
      grid-auto-columns: minmax(240px, 1fr);
    }
    
    .nav-link {
      width: 80px;
      height: 80px;
      font-size: 0.9rem;
    }
  }
</style>