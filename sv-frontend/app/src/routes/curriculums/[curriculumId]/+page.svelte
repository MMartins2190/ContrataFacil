<script>
    import Header from "$lib/components/header.svelte";

    let { data } = $props();
</script>

<title>{"Nome do currículo"}</title>

<Header/>
<div class="page">

    <div class="file-contents">
        <input type="file" name="curriculo">
    </div>
    <div class="info-bar">
        <button class="ia-btn">IA</button>
        <h1>{"Nome do currículo"}</h1>
        <button class="hint-btn">?</button>
    </div>

    <div class="modal">

    </div>
</div>

<style>
    .page {
        display: flex;
        flex-direction: column;
    }

    .file-contents {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 70vh;
    }

    .info-bar {
        height: 20vh;
        display: flex;
        justify-content: space-between;
        background: #5b7bb4;
        align-items: center;
        color: white;
    }

    .modal {
        display: none;
    }
</style>