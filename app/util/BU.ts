import { Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const BASE_WIDTH = 375;

export const bu = (value: number) => {
  return (value * width) / BASE_WIDTH;
};