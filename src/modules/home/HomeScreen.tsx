import { observer } from "mobx-react-lite";
import { Text, TouchableOpacity, View } from "react-native";
import { PrivateStackScreenProps } from "../../navigation/types";
import { useViewModel } from "../../utils/hook";
import { HomeModel } from "./home-model";

const HomeScreen = ({ route, navigation }: PrivateStackScreenProps<"home">) => {
  const homeModel = useViewModel(HomeModel);
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor:'white' }}>
      <Text>Home</Text>

      <TouchableOpacity
        onPress={() => navigation.navigate("detail", { id: 12 })}
      >
        <Text>Go Detail</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("modalLoading", {
            screen: "loading",
            params: {},
          })
        }
      >
        <Text>Go Detail</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={homeModel.changeLoading}>
        <Text>Change status</Text>
      </TouchableOpacity>
      <Text>{homeModel.isLoading ? "123" : "321"}</Text>
    </View>
  );
};

export default observer(HomeScreen);
