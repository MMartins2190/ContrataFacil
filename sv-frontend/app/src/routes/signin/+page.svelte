<!--
    - Botão ver senha
    - Refazer models para incluir esses campos
    - Implementar botão de selecionar área de atuação
-->

<script>
    import { enhance } from "$app/forms";
    import Header from "$lib/components/header.svelte";
</script>

<title>Cadastro</title>

<div class="all">
    <h1>Cadastrar</h1>
        <form method="post" use:enhance>
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
                    <input type="password" id="passwordid" name="password" required>
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