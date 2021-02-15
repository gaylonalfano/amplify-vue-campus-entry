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
    console.log("useLogin:login::SUCCESS");
    console.log(response);
    isPending.value = false;
    return response;
  } catch (error) {
    console.log(error.message);
    error.value = error.message;
    isPending.value = false;
  }
}

function useLogin() {
  return { error, login, isPending };
}

export default useLogin;
