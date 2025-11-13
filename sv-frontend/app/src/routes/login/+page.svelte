<script>
    import { enhance } from "$app/forms";
    import Header from "$lib/components/header.svelte";
</script>

<title>Login</title>

<Header />

<div class="page">
  <main class="content">
    <h1>Entrar no ContrataFácil</h1>
    
    <div class="login-container">
      <form method="POST" use:enhance>
        <div class="form-group">
          <label for="username">Nome de usuário ou e-mail</label>
          <input 
            type="text" 
            id="username" 
            name="username" 
            required 
          />
        </div>
        
        <div class="form-group">
          <label for="password">Senha</label>
          <input 
            type="password" 
            id="password" 
            name="password" 
            required 
          />
        </div>
        
        <input type="submit" class="login-button" value="Entrar">
      </form>
    </div>
    
    <div class="signup-section">
      <p class="signup-text">Não possui uma conta?</p>
      <a href="/signin" class="signup-button">Cadastrar conta</a>
    </div>
  </main>
</div>

<style>
  .page {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem;
  }
  
  .content {
    width: 100%;
    max-width: 500px;
  }
  
  h1 {
    text-align: center;
    font-size: 2rem;
    font-weight: bold;
    margin: 0 0 2rem 0;
    color: #000;
  }
  
  .login-container {
    background: #d9d9d9;
    border: 2px solid #333;
    border-radius: 20px;
    padding: 2.5rem;
    margin-bottom: 1.5rem;
  }
  
  form {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
  
  .form-group {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  
  label {
    font-size: 1.1rem;
    font-weight: 500;
    color: #000;
  }
  
  input {
    width: 100%;
    padding: 0.875rem 1rem;
    font-size: 1rem;
    border: 2px solid #333;
    border-radius: 12px;
    background: white;
    transition: border-color 0.2s, box-shadow 0.2s;
  }
  
  input:focus {
    outline: none;
    border-color: #5b7bb4;
    box-shadow: 0 0 0 3px rgba(91, 123, 180, 0.1);
  }
  
  .login-button {
    margin-top: 2rem;
    padding: 0.875rem 2rem;
    font-size: 1.1rem;
    font-weight: 500;
    color: white;
    background: #5b7bb4;
    border: none;
    border-radius: 24px;
    cursor: pointer;
    transition: background 0.2s, transform 0.2s;
    align-self: center;
    min-width: 150px;
  }
  
  .login-button:hover {
    background: #4a6fa5;
    transform: translateY(-2px);
  }
  
  .login-button:active {
    transform: translateY(0);
  }
  
  .signup-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
  
  .signup-text {
    font-size: 1rem;
    color: #000;
    margin: 0;
  }
  
  .signup-button {
    width: 100%;
    padding: 1rem 2rem;
    font-size: 1.1rem;
    font-weight: 500;
    color: white;
    background: #5b7bb4;
    border: none;
    border-radius: 16px;
    text-decoration: none;
    text-align: center;
    cursor: pointer;
    transition: background 0.2s, transform 0.2s;
    display: block;
  }
  
  .signup-button:hover {
    background: #4a6fa5;
    transform: translateY(-2px);
  }
  
  .signup-button:active {
    transform: translateY(0);
  }
  
  @media (max-width: 640px) {
    .page {
      padding: 1rem;
    }
    
    h1 {
      font-size: 1.5rem;
    }
    
    .login-container {
      padding: 1.5rem;
    }
    
    label {
      font-size: 1rem;
    }
    
    input {
      padding: 0.75rem;
      font-size: 0.95rem;
    }
    
    .login-button,
    .signup-button {
      font-size: 1rem;
    }
  }
</style>