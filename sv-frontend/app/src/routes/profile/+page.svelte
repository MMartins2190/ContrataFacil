<script>
    import Header from "$lib/components/header.svelte";

    let { data } = $props();

    let {
        profilePicture = "https://via.placeholder.com/150",
        name = "João Silva",
        password = "••••••••",
        email = "joao.silva@email.com",
        cpf = "123.456.789-00"
    } = data;
</script>

<title>Meu Perfil</title>

<Header />

<div class="page-container">
    <div class="profile-card">
        <!-- Top Portion: Profile Picture and Name -->
        <div class="profile-header">
            <div class="profile-picture-wrapper">
                <img src={profilePicture} alt={name} class="profile-picture" />
            </div>
            <h1 class="profile-name">{name}</h1>
        </div>

        <!-- Middle Portion: Information Fields -->
        <div class="profile-info">
            <div class="info-field">
                <span class="field-label">Email</span>
                <span class="field-value">{email}</span>
            </div>

            <div class="info-field">
                <span class="field-label">Senha</span>
                <span class="field-value">{password}</span>
            </div>

            <div class="info-field">
                <span class="field-label">CPF</span>
                <span class="field-value">{cpf}</span>
            </div>
        </div>

        <!-- Bottom Portion: Edit Button -->
        <button class="edit-button">
            Editar Informações
        </button>
    </div>
</div>

<style>
    .page-container {
        min-height: 100vh;
        background-color: #f5f7fa;
        padding: 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .profile-card {
        width: 100%;
        max-width: 500px;
        background-color: white;
        border-radius: 24px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        overflow: hidden;
        display: flex;
        flex-direction: column;
    }

    /* Top Portion */
    .profile-header {
        background: linear-gradient(135deg, #5865C7 0%, #4954b8 100%);
        padding: 3rem 2rem 2rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1.5rem;
    }

    .profile-picture-wrapper {
        width: 150px;
        height: 150px;
        border-radius: 50%;
        overflow: hidden;
        border: 5px solid white;
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
        background-color: white;
    }

    .profile-picture {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .profile-name {
        font-size: 2rem;
        font-weight: 700;
        color: white;
        margin: 0;
        text-align: center;
        word-break: break-word;
    }

    /* Middle Portion */
    .profile-info {
        padding: 2.5rem 2rem;
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
    }

    .info-field {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        padding: 1.25rem;
        background-color: #f8f9fa;
        border-radius: 12px;
        border: 1px solid #e9ecef;
        transition: all 0.2s ease;
    }

    .info-field:hover {
        background-color: #f1f3f5;
        border-color: #dee2e6;
    }

    .field-label {
        font-size: 0.875rem;
        font-weight: 600;
        color: #718096;
        text-transform: uppercase;
        letter-spacing: 0.05em;
    }

    .field-value {
        font-size: 1.125rem;
        font-weight: 500;
        color: #2d3748;
        word-break: break-word;
    }

    /* Bottom Portion */
    .edit-button {
        width: 100%;
        background-color: #5865C7;
        color: white;
        border: none;
        padding: 1.25rem;
        font-size: 1.125rem;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.2s ease;
        border-radius: 0;
    }

    .edit-button:hover {
        background-color: #4954b8;
    }

    .edit-button:active {
        background-color: #3d4399;
    }

    /* Responsive design */
    @media (max-width: 768px) {
        .page-container {
            padding: 1rem;
        }

        .profile-header {
            padding: 2.5rem 1.5rem 1.5rem;
        }

        .profile-picture-wrapper {
            width: 120px;
            height: 120px;
        }

        .profile-name {
            font-size: 1.75rem;
        }

        .profile-info {
            padding: 2rem 1.5rem;
        }

        .edit-button {
            padding: 1rem;
            font-size: 1rem;
        }
    }

    @media (max-width: 480px) {
        .profile-picture-wrapper {
            width: 100px;
            height: 100px;
            border-width: 4px;
        }

        .profile-name {
            font-size: 1.5rem;
        }

        .profile-info {
            padding: 1.5rem 1rem;
            gap: 1rem;
        }

        .info-field {
            padding: 1rem;
        }

        .field-value {
            font-size: 1rem;
        }
    }
</style>