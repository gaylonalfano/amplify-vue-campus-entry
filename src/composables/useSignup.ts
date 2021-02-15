import { Auth } from "aws-amplify";

async function signup() {
  try {
    await Auth.signUp({
      username: this.email,
      password: this.password
    });
    alert("User successfully registered. Please login");
  } catch (error) {
    alert(error.message);
  }
}

function useSignup() {
  return { signup };
}

export default useSignup;
