import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

type Props = {
  title: string;
  style?: any;
  type: "primary" | "primary-light";
  disabled?: boolean | null;
  onPress: () => void;
};

const Button = (props: Props) => {
  return (
    <TouchableOpacity
      style={[props.style, { opacity: props.disabled ? 0.5 : 1 }]}
      // activeOpacity={}
      onPress={props.onPress}
    //   disabled={props.disabled}
    >
      <View
        style={{
          ...styles.button,
          ...(props.type === "primary"
            ? styles.btnPrimaryBg
            : styles.btnPrimaryBgLight)
        }}
      >
        <Text
          style={{
            ...styles.buttonText,
            ...(props.type === "primary"
              ? styles.btnPrimaryText
              : styles.btnPrimaryTextLight)
          }}
        >
          {props.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderRadius: 50,
    marginVertical: 10
  },
  buttonText: {
    fontSize: 16,
    textAlign: "center",
    fontWeight: "700"
  },
  btnPrimaryBgLight: {
    backgroundColor: "rgb(100 116 139)"
  },
  btnPrimaryTextLight: {
    color: "white"
  },
  btnPrimaryBg: {
    backgroundColor: "#6E00D9"
  },
  btnPrimaryText: {
    color: "white"
  }
});
