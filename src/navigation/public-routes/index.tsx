import SignIn from "../../modules/authen/sign-in/SignIn";
import SignUp from "../../modules/authen/sign-up/SignUp";
import { PublicStack } from "../types";

const FuncComponent = () => {
  return (
    <PublicStack.Navigator>
      <PublicStack.Screen component={SignIn} name="signIp" />
      <PublicStack.Screen component={SignUp} name="signUp" />
    </PublicStack.Navigator>
  );
};

export default FuncComponent;
