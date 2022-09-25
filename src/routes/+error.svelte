<script>
  import { page } from "$app/stores";
</script>

<section title="error-page">
  <h1>{$page.status} from +error.svelte in routes</h1>
  <p>{"Page " + $page.error.message}</p>
</section>

<style>
  section {
    width: 100%;
    text-align: center;
    border: 1rem solid #212121;
    box-sizing: border-box;
  }

  section :is(h1) {
    font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
    font-size: 3rem;
    line-height: 1rem;
  }

  section :is(p) {
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
      "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
    font-size: 1rem;
  }
</style>
