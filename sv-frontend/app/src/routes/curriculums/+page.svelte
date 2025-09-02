<div class="main">
    <h1 class="title">Currículos:</h1>
    <div class="curriculums">
        <ul class="curriculums-list">
            <!-- Data -->
            <li class="curriculum-item">
                <span class="person-name">Nome pessoa</span>
                <span class="cpf">000.000.000-00</span>
                <span class="phone-number">99 9999-9999</span>
                <button class="detail-button">Ver Currículo</button>
            </li>
        </ul>
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

    .title{
        outline: 1px solid blue;
        margin: 2rem 0 0 4rem;
        font-weight: 100;
    }

    .main{
       outline: 1px solid green;
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

    .detail-button{
        background-color: blue;
        padding: 0rem 2rem;
        border-radius: 25px;
    }

    span{
        outline: 1px solid purple;
        margin: 1rem 0
    }
</style>