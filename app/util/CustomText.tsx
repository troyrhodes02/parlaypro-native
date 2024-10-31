import React from 'react';
import { Text, StyleSheet, TextProps } from 'react-native';

interface CustomTextProps extends TextProps {
  children: React.ReactNode;
}

export default function CustomText(props: CustomTextProps) {
  return <Text style={[styles.text, props.style]}>{props.children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Poppins',
  },
});
