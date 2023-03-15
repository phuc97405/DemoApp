import DetailScreen from "~modules/home/DetailScreen";
import HomeScreen from "~modules/home/HomeScreen";
import { PrivateStack } from "../types";

const FuncComponent = () => {
  return (
    <PrivateStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <PrivateStack.Screen component={HomeScreen} name="home" />
      <PrivateStack.Screen component={DetailScreen} name="detail" />
    </PrivateStack.Navigator>
  );
};

export default FuncComponent;
