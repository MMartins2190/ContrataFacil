<script>
    let {
        id,
        personName = "Nome da Pessoa",
        cpf = "000.000.000-00",
        phoneNumber = "99 9999-9999",
    } = $props();
</script>

<li class="curriculum-item">
    <div class="person-info">
        <span class="person-name">{personName}</span>
        <div class="contact-info">
            <span class="cpf">{cpf}</span>
            <span class="phone-number">{phoneNumber}</span>
        </div>
    </div>
    <a href="/curriculums/{id}" class="view-curriculum-link">
        Ver Currículo
    </a>
</li>

<style>
    .curriculum-item {
        background-color: #f8f9fa;
        border: 1px solid #e9ecef;
        border-radius: 12px;
        padding: 1.5rem 2rem;
        margin: 1rem 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        transition: all 0.2s ease;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
    }

    .curriculum-item:hover {
        background-color: hsla(219, 90%, 82%, 0.5);
        color: white;
        box-shadow: 0 4px 12px rgba(81, 117, 184, 0.2);
        transform: translateY(-2px);
    }

    .person-info {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        flex: 1;
    }

    .person-name {
        font-size: 1.125rem;
        font-weight: 600;
        color: #2d3748;
        margin: 0;
    }

    .contact-info {
        display: flex;
        gap: 2rem;
        flex-wrap: wrap;
    }

    .cpf, .phone-number {
        font-size: 0.875rem;
        color: #718096;
        margin: 0;
        padding: 0.25rem 0.75rem;
        background-color: #edf2f7;
        border-radius: 20px;
        border: 1px solid #e2e8f0;
    }

    .view-curriculum-link {
        background-color: #5865c7;
        color: white;
        text-decoration: none;
        padding: 0.75rem 1.5rem;
        border-radius: 25px;
        font-weight: 500;
        font-size: 0.875rem;
        transition: all 0.2s ease;
        border: 2px solid #5865c7;
        min-width: 120px;
        text-align: center;
    }

    .view-curriculum-link:hover {
        background-color: #4954b8;
        border-color: #4954b8;
        transform: translateY(-1px);
        box-shadow: 0 4px 8px rgba(88, 101, 199, 0.3);
    }

    .view-curriculum-link:active {
        transform: translateY(0);
        box-shadow: 0 2px 4px rgba(88, 101, 199, 0.2);
    }

    /* Responsive design */
    @media (max-width: 768px) {
        .curriculum-item {
            flex-direction: column;
            align-items: stretch;
            gap: 1rem;
        }

        .contact-info {
            gap: 1rem;
        }

        .view-curriculum-link {
            align-self: center;
        }
    }

    @media (max-width: 480px) {
        .curriculum-item {
            padding: 1rem;
        }

        .contact-info {
            flex-direction: column;
            gap: 0.5rem;
        }

        .cpf, .phone-number {
            align-self: flex-start;
        }
    }
</style>