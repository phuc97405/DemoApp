import React from "react";
import { ActivityIndicator, StyleSheet, View, Text } from "react-native";
import { ModalStackScreenProps } from "../../navigation/types";

export default ({ route }: ModalStackScreenProps<"loading">) => {
  const { size = "large", color = "gray", text } = route.params || {};
  return (
    <View style={styles.wrapper}>
      <ActivityIndicator color={color} size={size} />
      {text && <Text style={styles.text}>{text}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  text: {
    // fontSize: FONT_SIZE.SMALL,
    textAlign: "center",
    marginTop: 10,
  },
});
