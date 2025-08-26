<!-- zikaram minha transferencia -->

<header>
    <h1>ContrataFácil</h1>
    <div class="header-right">
        <div class="navigation">
            <a href="./">Vagas</a>
            <a href="./">Currículos</a>
            <a href="./">Para Empresas</a>
        </div>
        <a href="./">!Nome! <img src="" alt="pfp"></a>
    </div>
</header>

<div class="arrow-nav">
    <i>L</i>
    <i>R</i>
</div>

<div class="filter">
    <form method="GET">
        <div class="fields">
            <div class="field">
                <label for="vacancy">Escolha uma Vaga</label>
                <input type="text" id="vacancy" placeholder="Digite uma vaga ou um cargo">
            </div>
            <div class="field">
                <label for="local">Escolha uma Localização</label>
                <input type="text" id="local" placeholder="Digite uma localização">
            </div>
            <div class="field">
                <label for="salary">Escolha um Salário</label>
                <input type="text" id="salary" placeholder="Digite um salário desejado">
            </div>
        </div>
        <input type="submit" value="Buscar">
    </form>
</div>

<div class="list-vacancies">
    <div class="list-desc">
        <h2>Vagas</h2>
        <button class="see-more">Ver mais</button>
    </div>
    <div class="vacancies-data" id="vacancies-data">
        <div class="vacancy-item"></div>
        <div class="vacancy-item"></div>
        <div class="vacancy-item"></div>
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

    a{
        text-decoration: none;
        color: rgb(0, 0, 0);
    }

    header{
        outline: 2px solid blue;
        display: flex;
        width: 100%;
        height: 10vh;
        padding: 2rem;
    }
    .header-right{
        display: flex;
        margin-left: auto;
    }
    .navigation{
        outline: 2px solid yellowgreen;
        margin-right: 3rem;
    }

    .arrow-nav{
        outline: 2px solid purple;
        background-color: rgb(100, 100, 100);
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 10vh;
    }
/* form */
    .filter{
        outline: 2px solid burlywood;
        margin: 1rem;
        padding: 1.5rem;
        background-color: #D9D9D9;
        display: flex;
        border-radius: 20px;
    }

    .fields{
        outline: 2px solid darkcyan;
        display: flex;
        align-items: center;
    }

    .field{
        outline: 2px solid orange;
        display: flex;
        flex-direction: column;
    }

    input[value="Buscar"]{
        padding: 0.5rem 5rem;
    }
/* bottom */
    .list-vacancies{
        outline: 2px solid red;
        margin: 1rem 5rem;
    }
    .list-desc{
        outline: 2px solid darkred;
        display: flex;
        justify-content: space-between;
        margin: 0 1rem;
    }
    .see-more{
        outline: 2px solid royalblue;
        padding: 0.5rem 1.5rem;
        border: 2px solid rgb(40, 40, 40);
        border-radius: 15px;
    }

    .vacancies-data{
        outline: 2px solid firebrick;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr;
    }
    .vacancy-item{
        outline: 2px solid lavender;
        background-color: #D9D9D9;
        border-radius: 15px;
        height: 30vh;
        margin: 0.5rem;
    }
</style>