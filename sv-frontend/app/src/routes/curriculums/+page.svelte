<script>
    import CurriculumItem from '$lib/components/curriculum-item.svelte';
    import Header from "$lib/components/header.svelte";

    //User data and curriculum data
    let { data } = $props();
</script>

<title>Currículos</title>

<Header />

<main>
    <h1>Currículos:</h1>
    <div class="curriculums">
        <ul class="curriculums-list">
            {#each data.curriculums as curriculum}
                <CurriculumItem
                id={curriculum.id}
                personName={curriculum.usuario.nome}
                cpf={curriculum.usuario.cpf}
                phoneNumber={curriculum.usuario.telefone}
                />
            {/each}
        </ul>
    </div>
</main>

<style>
    h1 {
        display: inline-block;
        font-size: 3rem;
        margin: 2rem 0 4rem 5rem;
        background: rgb(81, 117, 184);
        color: white;
        padding: 1rem;
        border-radius: 30px;
    }
</style>