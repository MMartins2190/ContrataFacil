<script>
    import Header from "$lib/components/header.svelte";
    import Opening from "$lib/components/opening-item.svelte";

    const curriculumsUrl = "http://127.0.0.1:8000/curriculos/";
    const hints = [
        "Sugma",
        "No pics",
        "Do not lock DLC behind New game plus",
    ]
    let { data } = $props();
    let modalDisplay = $state(false);

    async function registerCurriculum(e) {
        // implementar candidatos!!!!!

        // const file = e.target.files?.[0];
        // if (!file) {
        //     return;
        // }
        // const bodyData = new FormData();
        // bodyData.append("curriculo", file);
        // bodyData.append("usuario", data.)
    
        // try {
        //     await fetch(curriculumsUrl, {
        //         method: "POST",
        //         body: bodyData,
        //     }).then(res=>console.log(res));

        // } catch (error) {
        //     console.warn(error);
        // }
    }

    function showModal() {
        modalDisplay = true;
    }

    function closeModal() {
        modalDisplay = false;
    }

</script>

<title>{"Nome do Usuário"}</title>

<Header />
<div class="page-container">
    <main class="main-content">
        <input type="file" name="curriculo" onchange={registerCurriculum}>
    </main>
    
    <aside class="sidebar">
        <div class="sidebar-content">
            <div class="sidebar-header">
                <h2>{"Nome do usuário"}</h2>
                <button onclick={showModal}>?</button>
            </div>
        </div>
    </aside>
</div>

{#if modalDisplay}
    <div class="modal-overlay" onclick={closeModal}>
        <div class="modal-content" onclick={e => e.stopPropagation()}>
            <h1>Dicas de criação de um currículo</h1>
            <ol>
                {#each hints as hint}
                    <li class="sidebar-item">{hint}</li>
                {/each}
            </ol>
        </div>
    </div>
{/if}

<style>
    .page-container {
        display: grid;
        grid-template-columns: 6fr 5fr;
        min-height: 90vh;
    }

    .main-content {
        background-color: #DDDDFF;
        overflow-y: auto;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .sidebar {
        background-color: #5865C7;
        color: white;
        padding: 2rem;
        overflow-y: auto;
        box-shadow: -4px 0 12px rgba(0, 0, 0, 0.1);
    }

    .sidebar-header h2 {
        color: white;
        font-size: 1.5rem;
        margin-bottom: 1.5rem;
        font-weight: 600;
    }

    .sidebar-header {
        display: flex;
        justify-content: space-between;
    }

    .sidebar-header button {
        width: 50px;
        height: 50px;
        border-radius: 100%;
        background: linear-gradient(hsl(233, 50%, 56%), hsl(233 50% 60%));
        color: white;
        cursor: pointer;
    }
    .sidebar-header button:hover {
        background: linear-gradient(hsl(233 70% 50%), hsl(250 72% 42%));
    }

    .sidebar-item {
        background-color: rgba(255, 255, 255, 0.1);
        color: white;
        padding: 1rem;
        margin-bottom: 0.75rem;
        border-radius: 8px;
        transition: all 0.2s ease;
        border: 1px solid rgba(255, 255, 255, 0.2);
    }

    .sidebar-item:hover {
        background-color: rgba(255, 255, 255, 0.2);
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
    }

    /*******
      Modal
    *******/

    .modal-overlay {
        position: fixed;
        inset: 0 0 0 0;
        z-index: 999;
        background-color: rgba(0, 0, 0, 0.6);
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .modal-content {
        width: 100%;
        height: 100%;
        max-width: 800px;
        max-height: 800px;
        padding: 2rem;
        background: #5865C7;
        border-radius: 20px;
        color: white;
    }

    .modal-content h1 {
        margin: 1rem 0;
    }

    /* Responsive design */
    @media (max-width: 1024px) {
        .page-container {
            grid-template-columns: 1fr;
        }

        .sidebar {
            order: -1;
            min-height: auto;
            position: relative;
        }

        .sidebar-content {
            position: static;
        }

        .main-content {
            padding: 1.5rem;
        }
    }

    @media (max-width: 768px) {
        .main-content {
            padding: 1rem;
        }

        .sidebar {
            padding: 1.5rem;
        }

        .sidebar h2 {
            font-size: 1.25rem;
        }
    }
</style>