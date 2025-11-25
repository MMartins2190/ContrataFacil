<script>
  import { PUBLIC_API_ROOT_URL } from '$env/static/public';
  import Header from '$lib/components/header.svelte';
  import Opening from '$lib/components/opening-item.svelte';
  
  let { data } = $props();
  const {
    id,
    foto_perfil = null,
    username = "Erro",
    email = "erro@coERRO.erro",
    cpf = "!!!.!!!.!!!-!!",
    telefone = "Nenhum",
    empresa = "Errante",
  } = data.user;

  let profilePicture = $state(foto_perfil);
  let user = $state(username);
  let emailInfo = $state(email);
  let cpfInfo = $state(cpf);
  let telephone = $state(telefone);
  let searchTitle = $state("");
  
  let openingsList = $state(data.openings);
  let showModal = $state(false);

  function openModal() {
    showModal = true;
  }

  function closeModal() {
    showModal = false;
  }

  function searchFilter() {
        const titleWords = searchTitle.split(" ");
        const titleLetters = searchTitle.split();

        openingsList.map(opening => {
            opening.relevance = 0;
            if (searchTitle === opening.titulo) {
                opening.relevance += 1000;
            };
            if (searchTitle.toLowerCase() === opening.titulo.toLowerCase()) {
                opening.relevance += 800;
            };
            for (const titleWord of titleWords) {
                if (opening.titulo.toLowerCase().includes(titleWord.toLowerCase())) {
                    opening.relevance += 100;
                };
            };
            for (const titleLetter of titleLetters) {
                if (opening.titulo.toLowerCase().includes(titleLetter.toLowerCase())) {
                    opening.relevance += 10;
                }
            }
            return opening;
        })

        return openingsList.sort((opA, opB) => opB.relevance - opA.relevance);
    }
</script>

<title>{username}</title>

<div class="page">
  <Header />
  
  <main class="content">
    <!-- Profile Section -->
    <section class="profile-section">
      <div class="profile-info">
        <div class="left-section">
            <div class="profile-picture">
              <div class="avatar-circle">
                  {#if profilePicture}
                    <img src={profilePicture} alt="Foto de perfil">
                  {:else}
                    <span class="avatar-placeholder">{username.charAt(0).toUpperCase()}</span>
                  {/if}
              </div>
            </div>
        </div>
        
        <div class="user-details">
          <h1>{user}</h1>
          
          <div class="detail-item">
            <span class="label">Senha:</span>
            <span class="value">**********</span>
          </div>
          
          <div class="detail-item">
            <span class="label">E-mail:</span>
            <span class="value">{emailInfo}</span>
          </div>
          
          <div class="detail-item">
            <span class="label">CPF:</span>
            <span class="value">{cpfInfo}</span>
          </div>
          
          <div class="detail-item">
            <span class="label">Telefone:</span>
            <span class="value">{telephone}</span>
          </div>
        </div>
      </div>
      
      <div class="profile-actions">
        <form method="post">
          <button formaction="?/logout" class="pr-blue-btn">Logout</button>
          <button formaction="?/delete" class="pr-blue-btn">Excluir conta</button>
        </form>
      </div>
    </section>
    
    <!-- Job Search Section -->
    <section class="search-section">
        <div class="filter-item">
          <label for="job-search">Escolha uma vaga</label>
          <input 
            oninput={searchFilter}
            type="text" 
            id="job-search" 
            placeholder="Digite uma vaga"
            bind:value={searchTitle}
          />
        </div>
      
      <div class="job-listings">
        {#each openingsList as opening}
          <div class="job-card">
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
  </main>
  
</div>

<style>
   /****************
        page
   *****************/
  .page {
    min-height: 100vh;
    background-color: #f5f5f5;
  }
  
  .content {
    padding: 2rem;
    max-width: 1400px;
    margin: 0 auto;
  }
  
  /* Profile Section */
  .profile-section {
    background: #c4c4c4;
    border-radius: 16px;
    padding: 2.5rem;
    margin-bottom: 2rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;
  }
  
  .profile-info {
    width: 100%;
    display: flex;
    gap: 2rem;
    align-items: flex-start;
  }
  
  .profile-picture {
    position: relative;
    flex-shrink: 0;
  }
  
  .avatar-circle {
    cursor: pointer;
    width: 120px;
    height: 120px;
    border-radius: 50%;
    background: #5b7bb4;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    border: 2px solid #5b7bb4;
  }
  
  .avatar-circle img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .avatar-placeholder {
    font-size: 3rem;
    font-weight: bold;
    color: white;
  }
  
  .user-details {
    flex: 1;
  }
  
  h1 {
    font-size: 2rem;
    font-weight: bold;
    margin: 0 0 1.5rem 0;
    color: #000;
    background: white;
    padding: 0.75rem 1.5rem;
    border-radius: 12px;
    display: inline-block;
  }
  
  .detail-item {
    background: white;
    padding: 0.875rem 1.5rem;
    border-radius: 12px;
    margin-bottom: 0.75rem;
    display: flex;
    gap: 0.5rem;
    font-size: 1rem;
  }
  
  .label {
    font-weight: 500;
    color: #333;
  }
  
  .value {
    color: #666;
  }
  
  .profile-actions {
    display: flex;
    gap: 1rem;
    justify-content: center;
  }
  
  /* Search Section */
  .search-section {
    background: white;
    border-radius: 16px;
    padding: 2rem;
  }
  
  .filter-item {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin: 1rem 0;
  }
  
  .filter-item label {
    font-size: 0.9rem;
    font-weight: 500;
    color: #333;
  }
  
  .filter-item input {
    width: 100%;
    padding: 0.75rem 1rem;
    font-size: 1rem;
    border: 2px solid #e0e0e0;
    border-radius: 8px;
    background: white;
    transition: border-color 0.2s;
  }
  
  .filter-item input:focus {
    outline: none;
    border-color: #5b7bb4;
  }
  
  .job-listings {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }

  .job-card {
    position: relative;
    height: 250px;
  }
  
  @media (max-width: 1024px) {
    .profile-section {
      flex-direction: column;
    }
    
    .job-listings {
      grid-template-columns: 1fr;
    }
  }
  
  @media (max-width: 768px) {
    .content {
      padding: 1.5rem;
    }
    
    .profile-section {
      padding: 1.5rem;
    }
    
    .profile-info {
      flex-direction: column;
    }
    
    .profile-actions {
      flex-direction: column;
      width: 100%;
    }
    
    .avatar-circle {
      width: 100px;
      height: 100px;
    }
    
    .avatar-placeholder {
      font-size: 2.5rem;
    }
    
    h1 {
      font-size: 1.5rem;
    }
    
  }
</style>