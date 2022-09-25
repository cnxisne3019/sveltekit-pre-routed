/** @type {import('./$types').Actions} */
/** @type {import('./$types').PageServerLoad} */

// import axios from "axios";
// import Cookies from "js-cookie";


export const actions = {
  default: async ({ request }) => {
    const data = await request.formData();
    const var1 = data.get("var1");
    const var2 = data.get("var2");

    return {
      isSuccess: true,
      var1: var1,
      var2: var2
    };
  }
};
// async function getToken() {
//   try{
//     await axios.post("http://localhost:1337/api/auth/local", {
//       identifier: "john@kode.studio",
//       password: "test1234",
//     })
//   }
//   catch(error){
//     console.log(error.message)
//   }

//   .then((response) => {
//     console.log("User profile", response.data.user);
//     console.log("User token", response.data.jwt);
//     Cookies.set("token", response.data.jwt);
//   })
//   .catch((error) => {
//     console.log("An error occurred:", error.response);
//   });
// }
