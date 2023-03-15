import { useEffect } from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { PanGestureHandler } from "react-native-gesture-handler";
import Animated, {
  Easing,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { useViewModel } from "../../../utils/hook";
import { SignInModel } from "./sign-in-model";

const wid = Dimensions.get("screen").width;
console.log(wid);
const SignIn = () => {
  const signInModel = useViewModel(SignInModel);
  const valueShare = useSharedValue(0);
  const startingPosition = 100;
  const x = useSharedValue(startingPosition);
  const y = useSharedValue(startingPosition);
  const animatesStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: x.value }, { translateY: y.value }],
    };
  });

  useEffect(() => {
    x.value = withTiming(0, {
      duration: 1000,
      easing: Easing.bounce,
    });
    y.value = withTiming(0, {
      duration: 1000,
      easing: Easing.bounce,
    });
  }, []);
  const eventHandler = useAnimatedGestureHandler({
    onStart: (event, ctx) => {
      console.log(JSON.stringify(ctx));
      ctx.startX = x.value;
      ctx.startY = y.value;
    },
    onActive: (event, ctx) => {
      x.value = ctx.startX + event.translationX;
      y.value = ctx.startY + event.translationY;
    },
    onEnd: (event, ctx) => {
      console.log(event);
      if (event.absoluteX > wid / 2) {
        console.log(123);
        x.value = withTiming(0, {
          duration: 1000,
          easing: Easing.bounce,
        });
        y.value = withTiming(0, {
          duration: 1000,
          easing: Easing.bounce,
        });
      }
    },
  });
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <PanGestureHandler onGestureEvent={eventHandler}>
        <Animated.View style={[styles.box, animatesStyle]} />
      </PanGestureHandler>
      <Text
        onPress={() => {
          valueShare.value = withTiming(Math.random() * 255);
        }}
      >
        SignIn
      </Text>

      <Text
        onPress={() => {
          signInModel.singIn();
        }}
      >
        SignIn now
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    height: 100,
    width: 100,
    backgroundColor: "blue",
  },
});

export default SignIn;
