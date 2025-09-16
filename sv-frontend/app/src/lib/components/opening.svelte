<script>
    let { name, description } = $props();
</script>

    <div class="vacancy-item">
        <h3>{name}</h3>
        <p>{description}</p>
        
        <div class="overlay">
            <button class="pr-gray-btn">Enviar Currículo</button>
        </div>
    </div>

<style>
    .vacancy-item{
        position: relative;
        outline: 2px solid lavender;
        cursor: pointer;
        background-color: #d9d9d9;
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
        height: 50%;
        padding: 0.25ch 1.5rem;
        border-radius: 20px;
    }
</style>