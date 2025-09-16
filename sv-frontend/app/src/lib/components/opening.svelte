<script>
    
</script>

    <div class="vacancy-item">
        <p>Some text here</p>
        <p>More text</p>
        <p>even more peepeepoopoo</p>
        <div class="overlay">
            <button>Enviar Currículo</button>
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
        justify-content: center;
        align-items: center;
        height: 20%;
        width: 100%;
        background-color: rgba(80, 80, 80, 0.25);
        bottom: 0%;
        border-radius: 0 0 15px 15px;
        border-top: 1px solid black;
    }
    button{
        height: 50%;
        padding: 0.25ch 1.5rem;
        border-radius: 20px;
    }

    p{
        height: 33%;
    }
</style>