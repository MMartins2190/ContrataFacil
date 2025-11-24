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
  
  let showModal = $state(false);

  function openModal() {
    showModal = true;
  }

  function closeModal() {
    showModal = false;
  }

  // Não está funcionando, campos obrigatório password e cpf barram.
  async function editPfp(event) {
    if (event.target.files.length === 1) {
      profilePicture = event.target.files[0];
      const picData = new FormData();
      picData.append("foto_perfil", event.target.files[0]);
      const putPic = await fetch(`${PUBLIC_API_ROOT_URL}/usuarios/${id}/`, {
        method: "PUT",
        body: picData,
      });

      if (putPic.ok) alert("yay!");
      else console.log(`putPic: ${putPic}\nResponse: ${await putPic}\nRequest: ${picData}`);
    }
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
                <label>
                  <input onchange={editPfp} type="file" accept="image/*" style:display=none>
                  {#if profilePicture}
                    <img src={profilePicture} alt="Foto de perfil">
                  {:else}
                    <span class="avatar-placeholder">{username.charAt(0).toUpperCase()}</span>
                  {/if}
                  </label>
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
        <button class="pr-blue-btn" onclick={openModal}>Editar Informações</button>
        <form method="post">
          <button formaction="?/logout" class="pr-blue-btn">Logout</button>
          <button formaction="?/delete" class="pr-blue-btn">Excluir conta</button>
        </form>
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
  
  <!-- Edit Modal -->
  {#if showModal}
    <div class="modal-overlay" onclick={closeModal}>
      <div class="modal-content" onclick={(e) => e.stopPropagation()}>
        <h1><strong style:color=red>THIS DOES NOT WORK, SERVER SAYS IT'S A BAD REQUEST 400</strong></h1>
        <h2>Editar Informações</h2>
        
        <form action="?/update" method="POST">
          <div class="form-group">
            <label for="edit-username">Nome de usuário</label>
            <input 
              type="text" 
              id="edit-username" 
              name="username"
              value={user}
            />
          </div>
          
          <div class="form-group">
            <label for="edit-email">E-mail</label>
            <input 
              type="email" 
              id="edit-email" 
              name="email"
              value={emailInfo}
            />
          </div>
          
          <div class="form-group">
            <label for="edit-cpf">CPF</label>
            <input 
              type="text" 
              id="edit-cpf" 
              name="cpf"
              value={cpfInfo}
            />
          </div>
          
          <div class="form-group">
            <label for="edit-telefone">Telefone</label>
            <input 
              type="text" 
              id="edit-telefone" 
              name="telefone"
              value={telephone}
            />
          </div>
          
          <div class="form-group">
            <label for="edit-password">Nova senha (opcional)</label>
            <input 
              type="password" 
              id="edit-password" 
              
              placeholder="Digite uma nova senha"
            />
          </div>
          
          <div class="modal-actions">
            <button type="button" class="btn-cancel" onclick={closeModal}>Cancelar</button>
            <button type="submit" class="btn-confirm">Confirmar</button>
          </div>
        </form>
      </div>
    </div>
  {/if}
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
  
  /* Modal Styles */
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.6);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    padding: 1rem;
  }
  
  .modal-content {
    background: white;
    border-radius: 16px;
    padding: 2.5rem;
    max-width: 500px;
    width: 100%;
    max-height: 90vh;
    overflow-y: auto;
  }
  
  .modal-content h2 {
    margin: 0 0 1.5rem 0;
    font-size: 1.75rem;
    color: #333;
  }
  
  .form-group {
    margin-bottom: 1.25rem;
  }
  
  .form-group label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 500;
    color: #333;
    font-size: 0.95rem;
  }
  
  .form-group input {
    width: 100%;
    padding: 0.75rem 1rem;
    font-size: 1rem;
    border: 2px solid #e0e0e0;
    border-radius: 8px;
    background: white;
    transition: border-color 0.2s;
  }
  
  .form-group input:focus {
    outline: none;
    border-color: #5b7bb4;
  }
  
  .modal-actions {
    display: flex;
    gap: 1rem;
    margin-top: 2rem;
    justify-content: flex-end;
  }
  
  .btn-cancel,
  .btn-confirm {
    padding: 0.75rem 1.5rem;
    border: none;
    border-radius: 8px;
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s;
  }
  
  .btn-cancel {
    background: #e0e0e0;
    color: #333;
  }
  
  .btn-cancel:hover {
    background: #d0d0d0;
  }
  
  .btn-confirm {
    background: #5b7bb4;
    color: white;
  }
  
  .btn-confirm:hover {
    background: #4a6a9e;
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
    position: relative;
    height: 250px;
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
    
    .modal-content {
      padding: 1.5rem;
    }
    
    .modal-actions {
      flex-direction: column;
    }
    
    .btn-cancel,
    .btn-confirm {
      width: 100%;
    }
  }
</style>