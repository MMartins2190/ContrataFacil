<script>
    import EnterpriseCurriculumItem from '$lib/components/enterprise-curriculum.svelte';
    import CandidateCurriculumItem from '$lib/components/candidate-curriculum.svelte';
    import Header from "$lib/components/header.svelte";

    let { data } = $props();
</script>

<title>Currículos</title>

<Header />

<main>
    <h1>Meus Currículos:</h1>
    {#if data.curriculums.length === 0}
        <h2>Insira um currículo!</h2>
    {:else}
        <div class="curriculums-candidate">
            {#each data.curriculums as curriculum}
                <CandidateCurriculumItem curriculumFile={curriculum.curriculo}/>
            {/each}
        </div>
    {/if}
</main>

<style>
    main {
        min-height: 90vh;
    }

    h1 {
        display: inline-block;
        font-size: 3rem;
        margin: 2rem 0 4rem 5rem;
        background: rgb(81, 117, 184);
        color: white;
        padding: 1rem;
        border-radius: 30px;
    }

    h2 {
        font-size: 5ch;
        /* proper styling */
    }

    .curriculums-candidate {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: repeat(auto, 200px);
        gap: 1rem;
        margin: 2rem;
    }
</style>