import React, { ComponentType, memo, PropsWithChildren } from "react";
import { KeyboardAvoidingView, StyleSheet } from "react-native";
import { CONSTANTS } from "../values/contants";

interface IKeyboardAvoidingViewProps extends PropsWithChildren<any> {
  keyboardVerticalOffset?: number;
}

const FuncComponent = memo((props: IKeyboardAvoidingViewProps) => {
  return (
    <KeyboardAvoidingView
      keyboardVerticalOffset={-40}
      behavior="padding"
      style={styles.container}
    >
      {props.children}
    </KeyboardAvoidingView>
  );
});

(FuncComponent as ComponentType<IKeyboardAvoidingViewProps>).defaultProps = {
  keyboardVerticalOffset: CONSTANTS.IS_ANDROID
    ? 61
    : CONSTANTS.IS_IPHONE_X
    ? 93
    : 69,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default FuncComponent;
