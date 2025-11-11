<script>
    let {
        id = 0,
        curriculo = null,
    } = $props()
</script>
<a href="/curriculums/{id}" aria-label="Ver currículo">
    <div>
        {curriculo}
    </div>
</a>
<style>
    div {
        border-radius: 20px;
        border: 3px solid #5175b8;
    }
</style>