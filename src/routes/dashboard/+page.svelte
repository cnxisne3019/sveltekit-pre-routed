<script>
  // import Auth from "../../lib/auth";
  import { beforeUpdate } from "svelte";
  import Cookies from 'js-cookie'
  import axios from 'axios'

  let user = false;
  let url = 'http://localhost:1337/api/users/me'

  beforeUpdate(async () => {
    let token = Cookies.get("token");
    const response = axios
      .get(url, { headers: { Authorization: "Bearer " + token } })
      .then(function (response) {
        if (response.statusText == "OK") {
          console.log("You Logged In");
          user = true;
        } else if (response.statusText != "OK") {
          console.log("Hello Guest");
        }
      })
      .catch(function (error) {
        if (error.response) {
          console.log(error.toJSON());
        }
      });
  });

  function removeToken(){
    Cookies.remove('token');
    user = false;
  }

  console.log(user)
</script>

{#if user}
  <p>hi</p>
  <button on:click="{removeToken}">Remove Token to Sign Out</button>
  {:else}
  <span>You're not login</span>
  <a href="/">Goto Login page</a>
{/if}

