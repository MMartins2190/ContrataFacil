<script>
    let { nome } = $props();
</script>

<a href="./">
    <div class="vacancy-item">
        <p>Nome: {nome}</p>
        <!-- <div class="overlay"><button class="choose-vacancy">Escolher Vaga</button></div> -->
    </div>
</a>

<style>
    .vacancy-item{
        outline: 2px solid lavender;
        background-color: #D9D9D9;
        border-radius: 15px;
        height: 40vh;
        margin: 0.5rem;
    }
    /* .vacancy-item:hover{
        display: flex;
        flex-direction: column-reverse;
        .overlay{
            background-color: rgba(0, 0, 0, 0.5);
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }

    .overlay{
        outline: 2px solid green;
        display: none;
    } */

    /* .choose-vacancy{
        padding: 1.5rem;
    }
    .choose-vacancy:hover{
        background-color:  rgb(80, 80, 80);
    } */
</style>