import { ref } from "vue";
import { Auth, Hub } from "aws-amplify";

const error = ref<string | null>(null);
const user = ref(null);
// const user = ref(await Auth.currentAuthenticatedUser());

async function getCurrentAuthenticatedUser() {
  try {
    user.value = await Auth.currentAuthenticatedUser();
    console.log("user:", user.value);
    return user;
  } catch (error) {
    console.log(error.message);
    error.value = error.message;
  }
}

// Firebase Example:
// NOTE Technically adding an 'observer'
// auth.onAuthStateChanged(_user => {
//   // Each sign-in/out let's update the user Ref value to keep reactive
//   console.log("User state change. Current user is: ", _user);
//   user.value = _user; // firebase.User | null
// });

// AWS uses Hub to listen to auth events
// https://docs.amplify.aws/lib/utilities/hub/q/platform/js#installation
// Q: What's the onAuthStateChanged() equivalent in AWS? Is it Hub.listen()?
Hub.listen("auth", data => {
  console.log("Hub.listen('auth')...");
  console.log("data: ", data);
  const { payload } = data;
  console.log("payload: ", payload);
  const event = data.payload.event;
  console.log("event:", event);

  if (event === "signOut") {
    console.log("user signed out...");
  }
});

// Again, return a composable interface/reactive object to work with
function getUser() {
  return { user, error, getCurrentAuthenticatedUser };
}

export default getUser;
