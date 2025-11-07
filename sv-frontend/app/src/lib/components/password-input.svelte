<script>
    let passwordToggle = $state("password");

    function passwordShow(event) {
        event.preventDefault();
        passwordToggle = "text";
    }

    function passwordHide(event) {
        event.preventDefault();
        passwordToggle = "password";
    }
</script>

<div class="field-item">
    <label for="passwordid">Senha:</label>
    <div class="password-input-wrapper">
        <input type={passwordToggle} id="passwordid" name="password">
        <button onmousedown={passwordShow} onmouseup={passwordHide} onmouseleave={passwordHide} type="button" class="toggle-password" id="togglePassword" aria-label="Mostrar senha">
            <!-- Eye icon (hidden) -->
            <svg id="eyeIcon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
            <!-- Eye slash icon (visible) - hidden by default -->
            <svg id="eyeSlashIcon" style:display=none xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
            </svg>
        </button>  
    </div>
</div>

<style>
    .field-item{ 
        display: flex;
        width: 100px;
        flex-direction: column;
    }
    input {
        height: 3ch;
        border-radius: 10px;
        border: 1px solid black;
    }

    .password-input-wrapper {
        display: flex;
        position: relative;
    }

    .toggle-password {
        position: absolute;
        right: .5rem;
        top: .5ch;
        width: 20px;
        background: none;
        cursor: pointer;
        border-radius: 0 100vw 100vw 0;
    }
</style>