<script>
    let { 
    id = "não há", 
    title = "Vaga00", 
    salary = "0000,00", 
    requisites = "Nenhum Requisito foi posto para essa vaga",
    } = $props();
</script>

    <div class="vacancy-item">
        <a href="openings/{id}" aria-label="Vaga">
            <p>{title}</p>
            <p>{salary}</p>
            <p>{requisites}</p>
        </a>
        
        <div class="overlay">
            <button class="pr-gray-btn">Enviar Currículo</button>
        </div>
    </div>

<style>
    .vacancy-item{
        position: relative;
        display: flex;
        flex-direction: column;
        background-color: rgb(210, 210, 210);
        border-radius: 15px;
        height: 40vh;
        margin: 1rem;
        padding: 1rem;
    }

    .vacancy-item:hover{
        border: 1px solid black;
        .overlay{
            display: flex;
        }
    }
    
    .overlay{
        display: none;
        position: absolute;
        bottom: 0%;
        left: 0%;
        justify-content: center;
        align-items: center;
        height: 20%;
        width: 100%;
        background-color: rgba(80, 80, 80, 0.25);
        border-radius: 0 0 15px 15px;
        border-top: 1px solid black;
    }
    button{
        cursor: pointer;
        height: 50%;
        padding: 0.25ch 1.5rem;
        border-radius: 20px;
    }
</style>