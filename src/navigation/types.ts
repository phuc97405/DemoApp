import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from "@react-navigation/native";
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";

export const RootStack = createNativeStackNavigator<RootStackParamList>();
export const PrivateStack = createNativeStackNavigator<PrivateStackParamList>();
export const PublicStack = createNativeStackNavigator<PublicStackParamList>();
export const ModalStack = createNativeStackNavigator<ModalStackParamList>();

type PublicStackParamList = {
  signUp: undefined;
  signIp: undefined;
};

export type PublicStackScreenProps<T extends keyof PublicStackParamList> =
  NativeStackScreenProps<PublicStackParamList, T>;

export type PrivateStackParamList = {
  home: undefined;
  detail: {
    id: number;
  };
};

export type PrivateStackScreenProps<T extends keyof PrivateStackParamList> =
  CompositeScreenProps<
    NativeStackScreenProps<PrivateStackParamList, T>,
    RootStackScreenProps<keyof RootStackParamList>
  >;

type ModalStackParamList = {
  loading: {
    size?: "large" | "small";
    color?: string;
    text?: string;
  };
};
export type ModalStackScreenProps<T extends keyof ModalStackParamList> =
  NativeStackScreenProps<ModalStackParamList, T>;

export type RootStackParamList = {
  public: NavigatorScreenParams<PublicStackParamList>;
  private: NavigatorScreenParams<PrivateStackParamList>;
  calendar: undefined;
  modalLoading: NavigatorScreenParams<ModalStackParamList>;
};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
