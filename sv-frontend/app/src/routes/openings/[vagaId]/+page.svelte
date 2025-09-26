<script>
    import Header from "$lib/components/header.svelte";

    let { data } = $props();
    let {
        id = "não há",
        title = "Vaga00",
        salary = "0000,00",
        description = "Não há descrição",
        requisites = "Nenhum Requisito foi posto para essa vaga",
    } = data;
</script>