<script>
    import EnterpriseCurriculumItem from '$lib/components/enterprise-curriculum.svelte';
    import CandidateCurriculumItem from '$lib/components/candidate-curriculum.svelte';
    import Header from "$lib/components/header.svelte";

    let { data } = $props();
</script>

<title>Currículos</title>

<div class="page">
  <Header />
  
  <main class="content">
    <h1>Meus Currículos:</h1>
    
    <div class="curriculos-grid">
      <a href="/curriculums/0" class="add-card">
        <span class="plus-icon">+</span>
      </a>
      
      {#each data.curriculums as curriculum }
        <CandidateCurriculumItem id={curriculum.id} curriculo={curriculum.curriculo} />
      {/each}
    </div>
  </main>
  
  <a href="/curriculums/0" class="fab">
    <span class="plus-icon">+</span>
  </a>
</div>

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
    font-weight: normal;
    margin: 0 0 2rem 0;
    color: #000;
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
  
  .fab {
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
  
  .fab:hover {
    transform: scale(1.05);
    background: #4a6fa5;
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
  }
  
  .fab .plus-icon {
    font-size: 3rem;
    color: white;
    font-weight: 300;
    line-height: 1;
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
    
    .fab {
      width: 64px;
      height: 64px;
      bottom: 1.5rem;
      right: 1.5rem;
    }
    
    .fab .plus-icon {
      font-size: 2.5rem;
    }
  }
</style>