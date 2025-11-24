<script>
    let {
        id = "0",
        titulo = "Vaga00",
        salario = "0000,00",
        descricao = "Não há descrição",
        requisitos = "Nenhum Requisito foi posto para essa vaga",
    } = $props();

    const formattedSalary = `R$ ${salario}`;
</script>

<div class="vacancy-item">
    <a href="/openings/{id}/" aria-label="Ver detalhes da vaga: {titulo}" class="vacancy-link">
        <div class="vacancy-header">
            <h3 class="vacancy-title">{titulo}</h3>
            <div class="salary-badge">{formattedSalary}</div>
        </div>
        
        <div class="vacancy-content">
            <div class="requisites-section">
                <h4 class="section-title">Requisitos</h4>
                <p class="requisites-text">{requisitos}</p>
            </div>
        </div>
    </a>
</div>

<style>
    .vacancy-item {
        position: relative;
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 100%;
        background: white;
        border: 2px solid #e1e7f5;
        border-radius: 20px;
        overflow: hidden;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        box-shadow: 0 4px 6px rgba(81, 117, 184, 0.1);
    }
    
    .vacancy-item:hover {
        border-color: #5175b8;
        box-shadow: 0 12px 24px rgba(81, 117, 184, 0.2);
        transform: translateY(-4px);
    }
    
    .vacancy-link {
        display: flex;
        flex-direction: column;
        padding: 1.5rem;
        text-decoration: none;
        color: inherit;
    }

    .vacancy-header {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        margin-bottom: 1.5rem;
    }

    .vacancy-title {
        font-size: 1.5rem;
        font-weight: 700;
        color: #2c3e50;
        line-height: 1.3;
        overflow: hidden;
    }

    .salary-badge {
        align-self: flex-start;
        background: linear-gradient(135deg, #5175b8, #4a68a8);
        color: white;
        padding: 0.5rem 1rem;
        border-radius: 25px;
        font-size: 0.9rem;
        font-weight: 600;
        box-shadow: 0 2px 4px rgba(81, 117, 184, 0.3);
    }

    .vacancy-content {
        flex: 1;
        display: flex;
        flex-direction: column;
    }

    .requisites-section {
        flex: 1;
    }

    .section-title {
        margin: 0 0 0.75rem 0;
        font-size: 1rem;
        font-weight: 600;
        color: #5175b8;
        text-transform: uppercase;
        letter-spacing: 0.5px;
    }

    .requisites-text {
        margin: 0;
        color: #64748b;
        line-height: 1.6;
        font-size: 0.95rem;
        overflow: hidden;
    }

    @keyframes slideUp {
        from {
            transform: translateY(100%);
            opacity: 0;
        }
        to {
            transform: translateY(0);
            opacity: 1;
        }
    }

    /* Responsive adjustments */
    @media (max-width: 768px) {
        .vacancy-item {
            margin: 0.5rem;
            height: 35vh;
            min-height: 250px;
        }

        .vacancy-link {
            padding: 1rem;
        }

        .vacancy-title {
            font-size: 1.25rem;
        }
    }
</style>