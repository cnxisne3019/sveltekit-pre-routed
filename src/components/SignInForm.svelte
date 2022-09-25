<script>
  import axios from "axios";
  import Cookies from "js-cookie";

  // for login
  function handleLogin() {
    axios
    .post("http://localhost:1337/api/auth/local", {
      identifier: "john@kode.studio",
      password: "test1234",
    })
    .then((response) => {
      console.log("User profile", response.data.user);
      console.log("User token", response.data.jwt);
      Cookies.set("token", response.data.jwt);
    })
    .catch((error) => {
      console.log("An error occurred:", error.response);
    });
  }
</script>

<h1>This is a +page.svelte in /post</h1>
<p>The fastest way to login</p>
<button on:click="{handleLogin}">CLICK to LOGIN</button>
