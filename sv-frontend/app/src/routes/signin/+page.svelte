<div class="all">
    <h1>Cadastrar</h1>
    <div>
        <form method="post">
                <div class="field-item">
                    <label for="nameid">Nome Completo:</label>
                    <input type="text" id="nameid">
                </div>
                <div class="field-item">
                    <label for="emailid">E-mail:</label>
                    <input type="email" id="emailid">
                </div>
                <div class="field-item">
                    <label for="passwordid">Senha:</label>
                    <input type="password" id="passwordid">
                </div>
                <div class="field-item">
                    <label for="password-again">Confirmar Senha</label>
                    <input type="password" id="password-again">
                </div>
                <div class="field-item">
                    <label for="acting-field">Área de Atuação</label>
                    <div class="acting-field-input">
                        <input type="text" id="acting-field"><button id="select-acting-field" type="button">^</button>
                    </div>
                </div>
                <div class="field-item">
                    <label for="cpf">CPF:</label>
                    <input type="text" id="cpf">
                </div>
                <div class="field-item">
                    <label for="telephone">Telefone:</label>
                    <input type="text" id="telephone">
                </div>
                <div class="submit">
                    <input type="submit" value="Cadastrar">
                </div>
            </form>
    </div>
</div>

<style>
    *{
        border: none;
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: Arial, Helvetica, sans-serif;
    }

    .all{
        width: 100vw;
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    h1{
        margin: 1.5rem;
    }

    form{
        background-color: #d9d9d9;
        padding: 1.5rem;
        border: 1px solid black;
        border-radius: 20px;
        outline: 2px solid red;
    }
    
    .field-item{ 
        display: flex;
        flex-direction: column;
        outline: 2px solid green;
    }

    .submit{
        height: 2.5rem;
        display: flex;
        justify-content: center;
        outline: 2px solid yellow;
    }

    input[type="submit"]{
        margin-top: 1rem;
        padding: 0.25rem 0.75rem;
        background-color: blue;
        border-radius: 30px;
        color: white;
    }

    #select-acting-field{
        background-color: darkslateblue;
        color: white;
        border-radius: 0 20px 20px 0;
        padding-left: 0.5rem;
    }
</style>