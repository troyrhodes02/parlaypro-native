import { View, ScrollView, Image, TouchableOpacity, StyleSheet, TextInput } from "react-native";
import { useRouter } from "expo-router";
import CustomText from "../util/CustomText";
import { bu } from "../util/BU";
import Logo from "../../assets/images/ParlayProLogo.png";
import theme from "../util/theme";

export default function LoginScreen() {
  const router = useRouter();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={Logo} />
        <CustomText style={styles.createYourAccountText}>Login to Your ParlayPro Account</CustomText>

        <View style={styles.signUpContainer}>
          <View style={styles.inputLabelContainer}>
            <CustomText style={styles.inputLabel}>Email</CustomText>
            <CustomText style={styles.asterisk}>*</CustomText>
          </View>
          <TextInput
            style={styles.inputContainer}
            placeholder="example@email.com"
            placeholderTextColor="#aaa"
          />
        </View>

        <View style={styles.signUpContainer}>
          <View style={styles.inputLabelContainer}>
            <CustomText style={styles.inputLabel}>Password</CustomText>
            <CustomText style={styles.asterisk}>*</CustomText>
          </View>
          <TextInput
            style={styles.inputContainer}
            placeholder="Enter your password"
            placeholderTextColor="#aaa"
            secureTextEntry={true}
          />
        </View>

        <TouchableOpacity style={styles.loginButton}>
          <CustomText style={styles.loginButtonText}>Login</CustomText>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push("./SignUpScreen")}>
          <CustomText style={styles.signUpLinkText}>Don't have an Account?</CustomText>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
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
  createYourAccountText: {
    color: theme.colors.text,
    fontSize: bu(20),
    fontWeight: "700",
    paddingTop: bu(25),
    paddingBottom: bu(25),
  },
  signUpContainer: {
    width: "100%",
    justifyContent: "center",
  },
  inputLabelContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  inputLabel: {
    color: "white",
    fontSize: bu(16),
    fontWeight: "500",
    textAlign: "left",
  },
  inputContainer: {
    width: "100%",
    height: bu(45),
    borderRadius: bu(12),
    marginBottom: bu(15),
    borderWidth: 1,
    borderColor: "white",
    paddingHorizontal: bu(10),
    color: "white",
  },
  asterisk: {
    color: theme.colors.primary.main,
    fontSize: bu(16),
    fontWeight: "500",
    marginLeft: bu(2),
  },
  loginButton: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: bu(10),
    backgroundColor: theme.colors.primary.main,
    width: "100%",
    height: bu(45),
    marginBottom: bu(10),
  },
  loginButtonText: {
    color: theme.colors.text,
    fontSize: bu(14),
  },
  signUpLinkText: {
    color: theme.colors.text,
    fontSize: bu(14),
    textAlign: "center",
    marginTop: bu(10),
    textDecorationLine: "underline",
  },
});
