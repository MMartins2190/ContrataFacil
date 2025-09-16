<script>
    import CurriculumItem from '$lib/components/curriculum-item.svelte';
    import Header from "$lib/components/header.svelte";

    let { data } = $props();
</script>

<title>Currículos</title>

<Header />

<main>
    <h1
    style:margin="2rem 0 0 4rem"
    style:font-weight=600>Currículos:</h1>
    <div class="curriculums">
        <ul class="curriculums-list">
            {#each data.users as user}
                <CurriculumItem
                personName={user.name}
                cpf={user.zipcode}
                phoneNumber={user.phone}
                />
            {/each}
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
    }
</style>