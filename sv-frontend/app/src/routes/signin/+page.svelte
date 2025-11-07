<!--
    - Botão ver senha
    - Refazer models para incluir esses campos
    - Implementar botão de selecionar área de atuação
-->

<script>
    import { enhance } from "$app/forms";
    import Header from "$lib/components/header.svelte";

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
        const resp = fetch(urlString, {
            method: "POST",
            body: data,
        })
        .then(res=>res.json())
        .then(res=>console.log(res))
        .catch(err=>console.warn(err));
    }
</script>

<title>Cadastro</title>

<div class="all">
    <h1>Cadastrar</h1>
        <form onsubmit={registerUser} method="post" enctype="multipart/form-data">
                <div class="field-item">
                    <label for="foto-perfil">Adicionar foto de perfil</label>
                    <input type="file" name="foto_perfil" id="foto-perfil"
                    accept="image/, .png, .jpeg, .jpg, .gif, .jfif, .webp, .avif, .svg">
                </div>
                <div class="field-item">
                    <label for="nameid">Nome Completo:</label>
                    <input type="text" id="nameid" name="username" required>
                </div>
                <div class="field-item">
                    <label for="emailid">E-mail:</label>
                    <input type="email" id="emailid" name="email" required>
                </div>
                <div class="field-item">
                    <label for="passwordid">Senha:</label>
                    <div class="password-input-wrapper">
                        <input type={passwordToggle} id="passwordid" name="password" required>
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
                <!-- <div class="field-item">
                    <label for="acting-field">Área de Atuação</label>
                    <div class="acting-field-input">
                        <div style:position=relative>
                            <input type="text" id="acting-field">
                            <button id="select-acting-field" class="pr-blue-btn select-btn" type="button">Sel</button>
                        </div>
                    </div>
                </div> -->
                <div class="field-item">
                    <label for="cpfid">CPF:</label>
                    <input type="text" id="cpfid" name="cpf" required>
                </div>
                <div class="field-item">
                    <label for="telephoneid">Telefone:</label>
                    <input type="text" id="telephoneid" name="telephone" required>
                </div>
                <div class="submit">
                    <input class="sr-blue-btn" type="submit" value="Criar"
                     style:padding="0.25rem 1.5rem"
                     style:border-radius=30px;>
                </div>
            </form>
</div>

<style>
    .display-none{
        display: none;
    }

    .all{
        width: 100vw;
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    h1 {
        font-weight: 600;
        margin: 0 0 1rem 0;
    }

    form{
        align-self: center;
        justify-self: center;
        height: 75%;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: #d9d9d9;
        padding: 1.5rem .5rem;
        border: 1px solid black;
        border-radius: 20px;
        justify-content: space-between;
    }
    
    .field-item{ 
        display: flex;
        flex-direction: column;
    }

    input[required] {
        height: 3ch;
        border-radius: 10px;
        border: 1px solid black;
    }

    .password-input-wrapper {
        display: flex;
        position: relative;
    }

    .toggle-password {
        position: absolute;
        right: .5rem;
        top: .5ch;
        width: 20px;
        background: none;
        cursor: pointer;
        border-radius: 0 100vw 100vw 0;
    }

    /* .select-btn {
        position: absolute;
        background-color: blue;
        border-radius: 0 100vw 100vw 0;
    } */

    .submit{
        height: 2.5rem;
        display: flex;
        justify-content: center;
    }
</style>