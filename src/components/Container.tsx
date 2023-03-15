import React, { PureComponent } from "react";
import {
  StyleSheet,
  SafeAreaView,
  ViewProps,
  View,
  StyleProp,
  ViewStyle,
} from "react-native";
import KeyboardAvoidingView from "./KeyboardAvoidingView";

interface State {
  error?: Error | undefined;
  errorInfo?: any;
}
interface IContainerProps extends ViewProps {
  unSafe?: boolean;
  keyboardAvoidingView?: boolean;
  safeAreaStyle?: StyleProp<ViewStyle>;
}
export default class Container extends PureComponent<IContainerProps, State> {
  constructor(props: IContainerProps) {
    super(props);
    this.state = { error: undefined };
  }

  //   componentDidCatch(error: Error, errorInfo: any) {
  //     this.setState({
  //       error: error,
  //       errorInfo: errorInfo,
  //     });
  //   }

  render() {
    const { error } = this.state;
    const { children, style, safeAreaStyle, keyboardAvoidingView, ...rest } =
      this.props;

    const content = this.props.unSafe ? (
      <View {...rest} style={[styles.wrapper, style]}>
        {children}
      </View>
    ) : (
      <SafeAreaView style={[styles.wrapper, safeAreaStyle]}>
        <View {...rest} style={[styles.wrapper, style]}>
          {children}
        </View>
      </SafeAreaView>
    );

    return keyboardAvoidingView ? (
      <KeyboardAvoidingView>{content}</KeyboardAvoidingView>
    ) : (
      content
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor:'white'
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
});
