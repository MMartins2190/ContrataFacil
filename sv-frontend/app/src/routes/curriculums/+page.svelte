<title>Currículos</title>

<main>
    <h1 class="title"
    style:margin="2rem 0 0 4rem"
    style:font-weight=600>Currículos:</h1>
    <div class="curriculums">
        <ul class="curriculums-list">
            <!-- Data -->
            <li class="curriculum-item">
                <span class="person-name">Nome pessoa</span>
                <span class="cpf">000.000.000-00</span>
                <span class="phone-number">99 9999-9999</span>
                <button class="pr-blue-btn"
                style:color=black
                style:padding="0rem 2rem"
                style:border="1px solid black"
                style:border-radius=25px>Ver Currículo</button>
            </li>
        </ul>
    </div>
</main>

<style>
    main{
       min-height: 100vh; 
    }

    ul{
        outline: 1px solid red;
        margin-top: 5rem;
        display: flex;
        
    }

    .curriculum-item{
        width: 100vw;
        background-color: #d9d9d9;
        padding: 0rem 3rem;
        display: flex;
        justify-content: space-between;
    }

    span{
        outline: 1px solid purple;
        margin: 1rem 0
    }
</style>