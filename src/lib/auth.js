import axios from "axios";
import Cookies from "js-cookie";

const url = "http://localhost:1337/api/users/me";

export function isLogin() {
  let token = Cookies.get("token");
  const response = axios
    .get(url, { headers: { Authorization: "Bearer " + token } })
    .then(function (response) {
      if (response.statusText == "OK") {
        console.log("You Logged In");
      } else if (response.statusText != "OK") {
        console.log("Hello Guest");
      }
    })
    .catch(function (error) {
      if (error.response) {
        console.log(error.toJSON());
      }
    });
}
