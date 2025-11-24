<script>
    let menuOpen = $state(false);
    
    function toggleMenu() {
        menuOpen = !menuOpen;
    }
</script>

<header>
    <a href="/"><h1>ContrataFácil</h1></a>
    
    <button class="hamburger" onclick={toggleMenu} aria-label="Toggle menu">
        <span class="line"></span>
        <span class="line"></span>
        <span class="line"></span>
    </button>
    
    <nav class:open={menuOpen}>
        <a href="/openings" class="nav-item nav-link">Vagas</a>
        <a href="/curriculums" class="nav-item nav-link">Currículos</a>
        <a href="/enterprise-intro" class="nav-item nav-link">Para Empresas</a>
        <a href="/about" class="nav-item nav-link">Sobre</a>
        <a href="/profile" class="nav-item nav-link">Perfil</a>
    </nav>
</header>

<style>
    header {
        position: sticky;
        top: 0%;
        z-index: 100;
        display: flex;
        width: auto;
        height: 10vh;
        background-color: #F6F7F9;
        padding: 0 3rem;
        align-items: center;
    }
    
    .nav-link:hover {
        color: rgb(81, 117, 184);
    }
    
    nav {
        margin-left: auto;
        display: flex;
        align-items: center;
    }
    
    .nav-item {
        margin: 0 1.5vw 0 0;
    }
    
    .hamburger {
        display: none;
        flex-direction: column;
        background: none;
        border: none;
        cursor: pointer;
        padding: 0;
        margin-left: auto;
        gap: 5px;
    }
    
    .line {
        width: 25px;
        height: 3px;
        background-color: #333;
        transition: all 0.3s ease;
    }
    
    @media (max-width: 768px) {
        header {
            padding: 0 1.5rem;
        }
        
        .hamburger {
            display: flex;
        }
        
        nav {
            position: absolute;
            top: 10vh;
            left: 0;
            right: 0;
            flex-direction: column;
            background-color: #F6F7F9;
            padding: 1rem 0;
            margin-left: 0;
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.3s ease;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        
        nav.open {
            max-height: 400px;
        }
        
        .nav-item {
            margin: 0;
            padding: 1rem 1.5rem;
            width: 100%;
            text-align: left;
        }
        
        .nav-item:hover {
            background-color: #e8eaed;
        }
    }
</style>