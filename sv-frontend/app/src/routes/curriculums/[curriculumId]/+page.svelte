<script>
    import Header from "$lib/components/header.svelte";

    let { data } = $props();
    let {
        user = {name: "Sérgio Freitas"},
        candidacy = {status: "Em andamento"},
        structure = "",
        text = "",
        reviewsidk = "",
    } = data;

</script>

<title>{user.name}</title>

<Header />
<div class="page-container">
    <main class="main-content">
        <div class="content-wrapper">
            
        </div>
    </main>
    
    <aside class="sidebar">
        <div class="sidebar-content">
            <h2>{user.name}</h2>
            <p class="sidebar-item">AvaliaçõesSla</p>
            <form method="post" class="candidatura">
                <p style:color=white>Em Andamento</p>
                <button 
                type="submit"
                formaction="?/approve" 
                style:background="rgb(100, 200, 100)" 
                class="sidebar-item"
                >Aprovado</button>
                <button
                type="submit" 
                formaction="?/reject" 
                style:background="rgb(200, 100, 100)" 
                class="sidebar-item"
                >Desaprovado</button>
            </form>
        </div>
    </aside>
</div>

<style>
    .page-container {
        display: grid;
        grid-template-columns: 2fr 1fr;
        min-height: 100vh;
        gap: 0;
    }

    .main-content {
        background-color: #DDDDFF;
        padding: 2rem;
        overflow-y: auto;
    }

    .content-wrapper {
        max-width: 1200px;
        margin: 0 auto;
    }

    .sidebar {
        background-color: #5865C7;
        padding: 2rem;
        overflow-y: auto;
        box-shadow: -4px 0 12px rgba(0, 0, 0, 0.1);
    }

    .sidebar h2 {
        color: white;
        font-size: 1.5rem;
        margin-bottom: 1.5rem;
        font-weight: 600;
    }

    .sidebar-item {
        background-color: rgba(255, 255, 255, 0.1);
        color: white;
        padding: 1rem;
        margin-bottom: 0.75rem;
        border-radius: 8px;
        transition: all 0.2s ease;
        cursor: pointer;
        border: 1px solid rgba(255, 255, 255, 0.2);
    }

    .sidebar-item:hover {
        background-color: rgba(255, 255, 255, 0.2);
        transform: translateX(-4px);
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
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