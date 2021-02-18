import { reactive, readonly } from "vue";
import { Auth } from "aws-amplify";

const state = reactive({
  user: async () => await Auth.currentUserInfo()
});

// async function getCurrentUserInfo() {
//   state.user = await Auth.currentUserInfo();
// }

function useState() {
  // return { state: readonly(state), getCurrentUserInfo };
  return { state: readonly(state) };
}

export default useState;
