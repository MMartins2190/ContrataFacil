<script>
    import Header from '$lib/components/header.svelte';

    let { data } = $props();

    const {
        cnpj = "XX. XXX. XXX/0001-XX",
        name = "XPTechO Industries",
        email = "Sumimasen@enterprise.org.br",
        description = "Nenhuma descrição existe para a empresa"
    } = data;
</script>

<title>{name}</title>

<Header />

<div class="page-container">
    <div class="content-wrapper">
        <button class="edit-button">
            Editar
        </button>

        <div class="info-card">
            <h1 class="company-name">{name}</h1>
            
            <div class="info-item">
                <span class="label">CNPJ</span>
                <span class="value">{cnpj}</span>
            </div>

            <div class="info-item">
                <span class="label">E-mail</span>
                <span class="value">{email}</span>
            </div>

            <div class="description-section">
                <span class="label">Descrição</span>
                <p class="description">{description}</p>
            </div>
        </div>
    </div>
</div>

<style>
    .page-container {
        min-height: 100vh;
        background-color: #f5f7fa;
        padding: 2rem;
        display: flex;
        justify-content: center;
        align-items: flex-start;
    }

    .content-wrapper {
        width: 100%;
        max-width: 800px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2rem;
    }

    .edit-button {
        background-color: #5865C7;
        color: white;
        border: none;
        padding: 0.875rem 2.5rem;
        border-radius: 25px;
        font-size: 1rem;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.2s ease;
        box-shadow: 0 4px 12px rgba(88, 101, 199, 0.3);
        align-self: flex-end;
    }

    .edit-button:hover {
        background-color: #4954b8;
        transform: translateY(-2px);
        box-shadow: 0 6px 16px rgba(88, 101, 199, 0.4);
    }

    .edit-button:active {
        transform: translateY(0);
        box-shadow: 0 2px 8px rgba(88, 101, 199, 0.3);
    }

    .info-card {
        width: 100%;
        background-color: white;
        border-radius: 24px;
        padding: 3rem;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        gap: 2rem;
    }

    .company-name {
        font-size: 2.5rem;
        font-weight: 700;
        color: #2d3748;
        margin: 0;
        word-break: break-word;
    }

    .info-item {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.5rem;
        padding: 1.25rem;
        background-color: #f8f9fa;
        border-radius: 16px;
        border: 1px solid #e9ecef;
    }

    .description-section {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
        padding: 1.5rem;
        background-color: #f8f9fa;
        border-radius: 16px;
        border: 1px solid #e9ecef;
    }

    .label {
        font-size: 0.875rem;
        font-weight: 600;
        color: #718096;
        text-transform: uppercase;
        letter-spacing: 0.05em;
    }

    .value {
        font-size: 1.125rem;
        font-weight: 500;
        color: #2d3748;
    }

    .description {
        font-size: 1rem;
        line-height: 1.7;
        color: #4a5568;
        margin: 0;
        max-width: 100%;
    }

    /* Responsive design */
    @media (max-width: 768px) {
        .page-container {
            padding: 1rem;
        }

        .info-card {
            padding: 2rem 1.5rem;
            gap: 1.5rem;
        }

        .company-name {
            font-size: 2rem;
        }

        .edit-button {
            align-self: center;
            width: 100%;
            max-width: 200px;
        }
    }

    @media (max-width: 480px) {
        .company-name {
            font-size: 1.75rem;
        }

        .info-card {
            padding: 1.5rem 1rem;
            border-radius: 16px;
        }

        .value {
            font-size: 1rem;
        }

        .description {
            font-size: 0.9375rem;
        }
    }
</style>