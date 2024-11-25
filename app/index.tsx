import { View, StyleSheet, Image, ScrollView, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { bu } from "./util/BU";
import Logo from "../assets/images/ParlayProLogo.png";
import CustomText from "./util/CustomText";

export default function SplashScreen() {
  const router = useRouter();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={Logo} />
        <CustomText style={styles.greeting}>Welcome to ParlayPro!</CustomText>
        <CustomText style={styles.blurb}>Ready to Start Winning?</CustomText>
        <TouchableOpacity
          style={styles.getStartedButton}
          onPress={() => router.push("/authentication/SignUpScreen")}
        >
          <CustomText style={styles.getStartedButtonText}>Get Started</CustomText>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    padding: bu(15),
  },
  imageContainer: {
    alignItems: "center",
    paddingTop: bu(100),
  },
  image: {
    height: bu(200),
    width: bu(200),
    resizeMode: "contain",
  },
  greeting: {
    color: "white",
    fontSize: bu(28),
    fontWeight: "700",
    paddingTop: bu(25),
  },
  blurb: {
    color: "#e8601d",
    fontSize: bu(20),
    paddingBottom: bu(100),
  },
  getStartedButton: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: bu(10),
    backgroundColor: "#e8601d",
    width: "100%",
    height: bu(45),
    marginBottom: bu(10),
  },
  getStartedButtonText: {
    color: "white",
    fontSize: bu(15),
  },
});
