<title>Cadastro</title>

<header>
    <h1 style:font-weight=600>ContrataFácil</h1>
</header>

<div class="all">
    <h1 
    style:font-weight=600
    style:margin-bottom=1rem
    >Cadastrar</h1>
        <form method="post">
                <div class="field-item">
                    <label for="nameid">Nome Completo:</label>
                    <input type="text" id="nameid" required>
                </div>
                <div class="field-item">
                    <label for="emailid">E-mail:</label>
                    <input type="email" id="emailid" required>
                </div>
                <div class="field-item">
                    <label for="passwordid">Senha:</label>
                    <input type="password" id="passwordid" required>
                </div>
                <div class="field-item">
                    <label for="password-again">Confirmar Senha</label>
                    <input type="password" id="password-again" required>
                </div>
                <div class="field-item">
                    <label for="acting-field">Área de Atuação</label>
                    <div class="acting-field-input">
                        <div style:position=relative>
                            <input type="text" id="acting-field">
                            <button id="select-acting-field" class="pr-blue-btn" type="button"
                            style:height=3ch
                            style:position=absolute
                            style:right=0
                            style:background-color=darkslateblue
                            style:color=white
                            style:border-radius="0 20px 20px 0"
                            >^</button>
                        </div>
                    </div>
                </div>
                <div class="field-item">
                    <label for="cpf">CPF:</label>
                    <input type="text" id="cpf" required>
                </div>
                <div class="field-item">
                    <label for="telephone">Telefone:</label>
                    <input type="text" id="telephone" required>
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

    form{
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
        outline: 2px solid green;
    }

    input[required], #acting-field{
        height: 3ch;
        border-radius: 10px;
        border: 1px solid black;
    }

    .submit{
        height: 2.5rem;
        display: flex;
        justify-content: center;
        outline: 2px solid yellow;
    }
</style>