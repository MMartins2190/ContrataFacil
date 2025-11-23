<!--
    -> Does not work due to X-Frame-Options=DENY http header set by middleware
-->

<script>
    let { data } = $props();
    console.log(data);
    const pdfFile = data.pdf;
</script>

<main>
    <iframe src={pdfFile} frameborder="0" title="Diplayin' stuff"></iframe>
</main>

<style>
    iframe {
        position: absolute;
        left: 50;
        outline: 2px solid red;
        height: 700px;
        width: 700px;
    }
</style>