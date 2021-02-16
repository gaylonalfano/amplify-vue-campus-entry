import { ref } from "vue";
import { Auth } from "aws-amplify";

const error = ref<string | null>(null);
// Add Ref for whenever making a request
const isPending = ref<boolean>(false);

async function login(email: string, password: string) {
  error.value = null;
  isPending.value = true;

  try {
    const response = await Auth.signIn(email, password);
    // console.log("useLogin:login::SUCCESS");
    // console.log(response);
    isPending.value = false;
    return response;
  } catch (error) {
    console.log(error.message);
    error.value = error.message;
    isPending.value = false;
  }
}

// For Multi-factor Auth: https://docs.amplify.aws/lib/auth/emailpassword/q/platform/js#sign-up
// async function resendConfirmationCode() {
//   try {
//     await Auth.resendSignUp(username);
//     console.log("code resent successfully");
//   } catch (err) {
//     console.log("error resending code: ", err);
//   }
// }

function useLogin() {
  return { error, login, isPending };
}

export default useLogin;
