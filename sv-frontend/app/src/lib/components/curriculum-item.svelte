<script>
    let { 
        personName = "Nome da Pessoa",
        cpf = "000.000.000-00",
        phoneNumber = "99 9999-9999",
        } = $props();
</script>

<li class="curriculum-item">
    <span class="person-name">{personName}</span>
    <span class="cpf">{cpf}</span>
    <span class="phone-number">{phoneNumber}</span>
    <button class="pr-blue-btn"
    style:color=black
    style:padding="0rem 2rem"
    style:border="1px solid black"
    style:border-radius=25px>Ver Currículo</button>
</li>

<style>
    .curriculum-item{
        background-color: #d9d9d9;
        padding: 0rem 3rem;
        margin: 1rem 0;
        display: flex;
        justify-content: space-between;
    }

    span{
        outline: 1px solid purple;
        margin: 1rem 0
    }
</style>