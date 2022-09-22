<script>
  import { page } from '$app/stores';
</script>

<section title="error-page">
  <h1>{$page.status} from +error.svelte in routes/routes</h1>
  <p>{$page.error.message}</p>
</section>

<style>
  section{
    width: 100vw;
    text-align: center;
  }
</style>