import Loading from "../../modules/modals/Loading";
import { ModalStack } from "../types";

const FuncComponent = () => {
  return (
    <ModalStack.Navigator
      screenOptions={{
        headerShown: false,
        presentation: 'transparentModal',
      }}
    >
      <ModalStack.Screen component={Loading} name="loading" />
    </ModalStack.Navigator>
  );
};

export default FuncComponent;
