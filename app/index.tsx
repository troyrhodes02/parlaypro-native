import { View, StyleSheet, Image, ScrollView, TouchableOpacity } from "react-native";
import { bu } from "./util/BU"
import Logo from "../assets/images/ParlayProLogo.png";
import CustomText from "./util/CustomText";

export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.imageContainer} source={Logo} />
        <CustomText style={styles.greeting}>Welcome to ParlayPro!</CustomText>
        <CustomText style={styles.blurb}>Ready to start Winning?</CustomText>
        <TouchableOpacity style={styles.signUpButton}>
          <CustomText style={styles.signUpButtonText}>
            Sign-Up
          </CustomText>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginButton}>
          <CustomText style={styles.loginButtonText}>
            Login
          </CustomText>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    padding: bu(15)
  },
  imageContainer: {
    alignItems: "center",
    paddingTop: bu(100),
    height: bu(200),
  },
  greeting: {
    color: "white",
    fontSize: bu(28),
    fontWeight: "700",
    paddingTop: bu(25)
  },
  blurb: {
    color: "#e8601d",
    fontSize: bu(20),
    paddingBottom: bu(100),
  },
  signUpButton: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: bu(10),
    backgroundColor: "#e8601d",
    width: bu(335),
    height: bu(45),
    marginBottom: bu(10)
  },
  loginButton: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: bu(10),
    backgroundColor: "white",
    width: bu(335),
    height: bu(45),
    marginBottom: bu(10)
  },
  signUpButtonText: {
    color: "white",
    fontSize: bu(14)
  },
  loginButtonText: {
    color: "#e8601d",
    fontSize: bu(14)
  }
})