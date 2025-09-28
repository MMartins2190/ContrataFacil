<script>
    import Header from "$lib/components/header.svelte";

    let { data } = $props();
    let {
        user = {},
        structure = "",
        text = "",
        reviewsidk = "",
    } = data;

</script>

<title>username</title>

<Header />

<div class="body">
  <div class="curriculum-display">
    {text}
  </div>
  <aside>
    <div class="userData">
      {user}
    </div>
    <p class="structure">
      {structure}
    </p>
    <div class="reviewsidk">
      {reviewsidk}
    </div>
  </aside>
</div>

<style>
  .body {
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-template-areas: "c d";
  }

  .curriculum-display {
    grid-area: c;
  }

  aside {
    background-color: rgb(81, 117, 184);
    color: white;
    display: flex;
    flex-direction: column;
    padding: 2rem 0;
    justify-content: center;
    align-content: space-between;
  }

</style>