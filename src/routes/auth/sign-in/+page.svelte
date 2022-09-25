<script>
  let email;
  let password;

  /** @type {import('./$types').PageData} */
  export let data;

  /** @type {import('./$types').ActionData} */
  export let form;

  console.log(form)

</script>

<section>
  <form method="POST">
    <label for="var1">
      <div>email</div>
      <input bind:value="{email}" name="var1" type="text" />
    </label>

    <label for="var2">
      <div>password</div>
      <input bind:value="{password}" name="var2" type="text" />
    </label>

    <button type="submit">SUBMIT</button>
  </form>
</section>

{#if form?.isSuccess}
  <!-- this message is ephemeral; it exists because the page was rendered in
    response to a form submission. it will vanish if the user reloads -->
  <pre>{JSON.stringify(form, null, 2)}</pre>
  <!-- <button on:click="{logThis(form)}">LogThis</button> -->
{/if}
