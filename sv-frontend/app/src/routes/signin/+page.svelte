<script>
  import { goto } from '$app/navigation';
  import Header from '$lib/components/header.svelte';

  const urlString = "http://127.0.0.1:8000/usuarios/";
    let passwordToggle = $state("password");
    let toggled = $state(false);

    function passwordShow(event) {
        event.preventDefault();
        passwordToggle = "text";
        toggled = true;
    }

    function passwordHide(event) {
        event.preventDefault();
        passwordToggle = "password";
        toggled = false;
    }

    async function registerUser(event) {
        event.preventDefault();
        const data = new FormData(event.currentTarget, event.submitter);
        const postData = await fetch(urlString, {
            method: "POST",
            body: data,
        });
        if (postData.ok) goto("/perfil")
        else alert("Erro tentando criar usuário... \nEu sou um bule");
    }
</script>

<title>Cadastrar</title>

<div class="page">
  <Header />
  
  <main class="content">
    <h1>Cadastrar</h1>
    
    <div class="form-container">
      <form onsubmit={registerUser} method="POST" enctype="multipart/form-data">
        <div class="form-grid">
          <div class="form-group">
            <label for="nome">Nome Completo</label>
            <input 
              type="text" 
              id="nome" 
              name="username" 
              required 
            />
          </div>
          
          <div class="form-group">
            <label for="cpf">CPF</label>
            <input 
              type="text" 
              id="cpf" 
              name="cpf" 
              required 
              pattern="\d{3}\.\d{3}\.\d{3}-\d{2}"
              placeholder="000.000.000-00"
            />
          </div>
          
          <div class="form-group">
            <label for="senha">Senha</label>
            <div class="password-wrapper">
                <input 
                  type={passwordToggle} 
                  id="senha" 
                  name="password" 
                  required 
                />
                <button
                    type="button" class="toggle-password" id="togglePassword" aria-label="Mostrar senha"
                    onmousedown={passwordShow} 
                    onmouseup={passwordHide} 
                    onmouseleave={passwordHide}>
                            <!-- Eye icon (hidden) -->
                    <svg class={toggled ? "display-none" : ""} id="eyeIcon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                            <!-- Eye slash icon (visible) - hidden by default -->
                    <svg class={toggled ? "" : "display-none"} id="eyeSlashIcon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                    </svg>
                </button>
            </div>
          </div>
          
          <div class="form-group">
            <label for="telefone">Telefone</label>
            <input 
              type="tel" 
              id="telefone" 
              name="telefone" 
              required 
              pattern="\(\d{2}\) \d{4,5}-\d{4}"
              placeholder="(00) 00000-0000"
            />
          </div>
          
          <div class="form-group">
            <label for="email">E-mail</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              required 
              autocomplete="email"
            />
          </div>
          
          <!-- <div class="form-group">
            <label for="area">Área de Atuação</label>
            <select id="area" name="area" required>
              <option value="" disabled selected>Selecione...</option>
              <option value="tecnologia">Tecnologia</option>
              <option value="administracao">Administração</option>
              <option value="vendas">Vendas</option>
              <option value="marketing">Marketing</option>
              <option value="recursos-humanos">Recursos Humanos</option>
              <option value="financeiro">Financeiro</option>
              <option value="engenharia">Engenharia</option>
              <option value="saude">Saúde</option>
              <option value="educacao">Educação</option>
              <option value="design">Design</option>
              <option value="outro">Outro</option>
            </select>
          </div> -->
        </div>
        
        <button type="submit" class="submit-button">Cadastrar</button>
        <span>Já tem uma conta? <a href="/login" style:color="#5b7bb4">Faça o login</a></span>
      </form>
    </div>
  </main>
</div>

<style>
  .display-none {
    display: none;
  }

  .page {
    min-height: 100vh;
  }
  
  .content {
    padding: 2rem;
    max-width: 900px;
    margin: 0 auto;
  }
  
  h1 {
    text-align: center;
    font-size: 2.5rem;
    font-weight: bold;
    margin: 0 0 2rem 0;
    color: #000;
  }
  
  .form-container {
    background: linear-gradient(to bottom, #d9d9d9, #f5f5f5);
    border: 3px solid #5b7bb4;
    border-radius: 16px;
    padding: 2.5rem;
  }
  
  form {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
  
  .form-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
  }
  
  .form-group {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  
  label {
    font-size: 1rem;
    font-weight: 500;
    color: #000;
  }
  
  input {
    width: 100%;
    padding: 0.75rem 1rem;
    font-size: 1rem;
    border: 2px solid #333;
    border-radius: 8px;
    background: white;
    transition: border-color 0.2s, box-shadow 0.2s;
  }
  
  input:focus {
    outline: none;
    border-color: #5b7bb4;
    box-shadow: 0 0 0 3px rgba(91, 123, 180, 0.1);
  }
  
  .password-wrapper {
    position: relative;
    display: flex;
  }

  .password-wrapper > button {
    position: absolute;
    right: .9rem;
    top: 10px;
    width: 25px;
    background: none;
    cursor: pointer;
    border-radius: 0 100vw 100vw 0;
  }

  /* select {
    cursor: pointer;
    appearance: none;
    background-image: url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1L6 6L11 1' stroke='%23333' stroke-width='2' stroke-linecap='round'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 1rem center;
    padding-right: 2.5rem;
  } */
  
  .submit-button {
    margin: 1rem auto 0;
    padding: 0.875rem 3rem;
    font-size: 1.1rem;
    font-weight: 500;
    color: white;
    background: #5b7bb4;
    border: none;
    border-radius: 24px;
    cursor: pointer;
    transition: background 0.2s, transform 0.2s;
    min-width: 200px;
  }
  
  .submit-button:hover {
    background: #4a6fa5;
    transform: translateY(-2px);
  }
  
  .submit-button:active {
    transform: translateY(0);
  }
  
  @media (max-width: 768px) {
    .content {
      padding: 1.5rem;
    }
    
    h1 {
      font-size: 2rem;
    }
    
    .form-container {
      padding: 1.5rem;
    }
    
    .form-grid {
      grid-template-columns: 1fr;
      gap: 1rem;
    }
    
    .submit-button {
      font-size: 1rem;
      padding: 0.75rem 2rem;
    }
  }
</style>