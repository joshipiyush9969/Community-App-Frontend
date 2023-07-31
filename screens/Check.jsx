import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native";
import { TextInput } from "react-native";
import { Button } from "react-native";
import { View, Text } from "react-native";
import colors from "../constants/colors";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";
import icon from "../assets/Jito.png";
import { Image } from "react-native";
import { KeyboardAvoidingView } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { MaterialIcons } from "@expo/vector-icons";
export default function Login({ navigation }) {
  const [phone, setPhone] = useState("");
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: colors.red,
      }}
    >
      <KeyboardAvoidingView>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            height: "30%",
            alignSelf: "center",
          }}
        >
          <AntDesign
            name="login"
            size={70}
            style={{ marginBottom: 20 }}
            color={colors.white}
          />
          <Text style={[styles.text, { fontSize: 16, marginVertical: 10 }]}>
            Sign Up
          </Text>
          <Text style={[styles.text, { fontSize: 13 }]}>
            We need to send OTP to authenticate your number
          </Text>
        </View>
        <View
          style={{
            backgroundColor: colors.white,
            borderTopLeftRadius: 100,
            paddingBottom: "100%",
          }}
        >
          <Image
            style={{
              alignSelf: "center",
              marginBottom: "20%",
              marginTop: "20%",
            }}
            source={icon}
            resizeMode={"cover"}
          />
          <Text style={{ marginLeft: "10%", fontWeight: "bold", fontSize: 16 }}>
            Welcome
          </Text>
          <TextInput
            style={styles.input}
            onChangeText={setPhone}
            value={phone}
            placeholder="+91 99999-88888"
          />
          <TouchableOpacity
            onPress={() => navigation.navigate("Login")}
            style={{
              marginTop: "15%",
              backgroundColor: colors.red,
              padding: 12,
              borderRadius: 100,
              alignSelf: "center",
            }}
          >
            <MaterialIcons
              name="arrow-forward-ios"
              size={30}
              color={colors.white}
            />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 44,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: colors.gray,
    borderRadius: 10,
    fontSize: 16,
    color: colors.black,
    marginLeft: "10%",
    width: "80%",
  },
  text: { alignSelf: "center", color: colors.white },
});
