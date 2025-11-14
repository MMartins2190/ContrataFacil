<script>
  import Header from '$lib/components/Header.svelte';
  import Opening from '$lib/components/opening-item.svelte';
  
  let { data } = $props();
  const {
    profilePicture = null,
    username,
    email,
    cpf,
    telephone,
    area = "<Àrea de Atuação>",
  } = data.user;
  
  // Placeholder for future edit functionality
  function handleEdit() {
    console.log('Edit profile');
  }

  console.log(data)
</script>

<div class="page">
  <Header />
  
  <main class="content">
    <!-- Profile Section -->
    <section class="profile-section">
      <div class="profile-info">
        <div class="profile-picture">
          <div class="avatar-circle">
            {#if profilePicture}
              <img src={profilePicture} alt="Foto de perfil" />
            {:else}
              <span class="avatar-placeholder">{username.charAt(0).toUpperCase()}</span>
            {/if}
          </div>
          
          <button class="edit-button" onclick={handleEdit} aria-label="Editar perfil">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11 4H4C3.46957 4 2.96086 4.21071 2.58579 4.58579C2.21071 4.96086 2 5.46957 2 6V20C2 20.5304 2.21071 21.0391 2.58579 21.4142C2.96086 21.7893 3.46957 22 4 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V13" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M18.5 2.50001C18.8978 2.10219 19.4374 1.87869 20 1.87869C20.5626 1.87869 21.1022 2.10219 21.5 2.50001C21.8978 2.89784 22.1213 3.4374 22.1213 4.00001C22.1213 4.56262 21.8978 5.10219 21.5 5.50001L12 15L8 16L9 12L18.5 2.50001Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </div>
        
        <div class="user-details">
          <h1>{username}</h1>
          
          <div class="detail-item">
            <span class="label">Senha:</span>
            <span class="value">**********</span>
          </div>
          
          <div class="detail-item">
            <span class="label">E-mail:</span>
            <span class="value">{email}</span>
          </div>
          
          <div class="detail-item">
            <span class="label">CPF:</span>
            <span class="value">{cpf}</span>
          </div>
          
          <div class="detail-item">
            <span class="label">Telefone:</span>
            <span class="value">{telephone}</span>
          </div>
        </div>
      </div>
      
      <div class="area-tag">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11 4H4C3.46957 4 2.96086 4.21071 2.58579 4.58579C2.21071 4.96086 2 5.46957 2 6V20C2 20.5304 2.21071 21.0391 2.58579 21.4142C2.96086 21.7893 3.46957 22 4 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V13" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M18.5 2.50001C18.8978 2.10219 19.4374 1.87869 20 1.87869C20.5626 1.87869 21.1022 2.10219 21.5 2.50001C21.8978 2.89784 22.1213 3.4374 22.1213 4.00001C22.1213 4.56262 21.8978 5.10219 21.5 5.50001L12 15L8 16L9 12L18.5 2.50001Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <span>{area}</span>
      </div>
    </section>
    
    <!-- Job Search Section -->
    <section class="search-section">
      <div class="search-filters">
        <div class="filter-item">
          <label for="job-search">Escolha uma vaga</label>
          <input 
            type="text" 
            id="job-search" 
            placeholder="Digite uma vaga"
          />
        </div>
        
        <div class="filter-item">
          <label for="salary-search">Escolha uma salário</label>
          <input 
            type="text" 
            id="salary-search" 
            placeholder="Digite uma salário"
          />
        </div>
        
        <div class="filter-item">
          <label for="location-search">Escolha uma localização</label>
          <input 
            type="text" 
            id="location-search" 
            placeholder="Digite uma localização"
          />
        </div>
      </div>
      
      <div class="job-listings">
        {#each data.openings as opening}
          <div class="job-card">
            <div class="job-card-content">
              <Opening
                id={opening.id}
                titulo={opening.titulo}
                salario={opening.salario}
                requisitos={opening.requisitos}
              />
            </div>
            <div class="job-status">Em andamento</div>
          </div>
        {/each}
      </div>
    </section>
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
  
  /* Profile Section */
  .profile-section {
    background: #c4c4c4;
    border-radius: 16px;
    padding: 2.5rem;
    margin-bottom: 2rem;
    display: flex;
    gap: 2rem;
    align-items: flex-start;
  }
  
  .profile-info {
    flex: 1;
    display: flex;
    gap: 2rem;
    align-items: flex-start;
  }
  
  .profile-picture {
    position: relative;
    flex-shrink: 0;
  }
  
  .avatar-circle {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    background: #5b7bb4;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
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
  
  .edit-button {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 40px;
    height: 40px;
    background: #5b7bb4;
    border: none;
    border-radius: 8px;
    color: white;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 0.2s;
  }
  
  .edit-button:hover {
    background: #4a6fa5;
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
  
  .area-tag {
    background: white;
    padding: 0.75rem 1.5rem;
    border-radius: 12px;
    display: flex;
    align-items: center;
    gap: 0.75rem;
    font-size: 1rem;
    color: #333;
    min-width: 200px;
  }
  
  .area-tag svg {
    color: #5b7bb4;
  }
  
  /* Search Section */
  .search-section {
    background: white;
    border-radius: 16px;
    padding: 2rem;
  }
  
  .search-filters {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
    margin-bottom: 2rem;
  }
  
  .filter-item {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
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
    border: 2px solid #5b7bb4;
    border-radius: 12px;
    overflow: hidden;
  }
  
  .job-card-content {
    background: white;
    padding: 1.5rem;
    min-height: 200px;
  }
  
  .job-status {
    background: #c4c4c4;
    padding: 0.75rem;
    text-align: center;
    font-size: 0.95rem;
    color: #333;
  }
  
  @media (max-width: 1024px) {
    .profile-section {
      flex-direction: column;
    }
    
    .search-filters {
      grid-template-columns: 1fr;
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