import { ref } from "vue";
import { Auth } from "aws-amplify";

const error = ref<string | null>(null);
// Add Ref for whenever making a request
const isPending = ref<boolean>(false);

async function logout() {
  error.value = null;
  isPending.value = true;

  try {
    await Auth.signOut();
    console.log("useLogout:logout::SUCCESS");
    isPending.value = false;
  } catch (error) {
    console.log(error.message);
    error.value = error.message;
    isPending.value = false;
  }
}

function useLogout() {
  return { error, logout, isPending };
}

export default useLogout;
