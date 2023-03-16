import React from "react";
import { StyleSheet, Modal } from "react-native";

interface Props {
  isVisible: boolean;
  children: React.ReactNode;
  animationType?: "none" | "slide" | "fade" | undefined;
  transparent?: boolean;
}

export const ModalCustom = (props: Props) => {
  const { children, isVisible, animationType, transparent = false } = props;

  return (
    <Modal
      statusBarTranslucent
      transparent={transparent}
      style={{ zIndex: 1 }}
      animationType={animationType}
      visible={isVisible}
    >
      {children}
    </Modal>
  );
};
