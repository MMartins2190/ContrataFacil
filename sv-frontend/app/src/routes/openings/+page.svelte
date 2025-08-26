<div class="list-vacancies">
    <input class="search-vacancies" id="search-input" name="query" type="search" placeholder="Procure por uma vaga   %lupa%">
    <div class="vacancies-data" id="vacancies-data">
        <div class="vacancy-item">
            <div class="overlay"><button class="choose-vacancy">Escolher Vaga</button></div>
        </div>
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

    .search-vacancies{
        outline: 2px solid purple;
        width: 100%;
        height: 4rem;
        font-size: 3ch;
        margin-bottom: 5rem;
    }
    
    .list-vacancies{
        margin: 1rem 5rem;
        outline: 2px solid yellowgreen;
    }
    .vacancies-data{
        outline: 2px solid lightslategray;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr;
    }
    .vacancy-item{
        outline: 2px solid lavender;
        background-color: #D9D9D9;
        border-radius: 15px;
        height: 40vh;
        margin: 0.5rem;
    }
    .vacancy-item:hover{
        .overlay{
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }

    .overlay{
        outline: 2px solid green;
        display: none;
    }

    .choose-vacancy{
        padding: 1.5rem;
    }
    .choose-vacancy:hover{
        background-color:  rgb(80, 80, 80);
    }
</style>