import React, { useState } from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import userDp from "../assets/userDp.png";
import { Image } from "react-native";
import { StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { TextInput } from "react-native";
import colors from "../constants/colors";
import { Pressable } from "react-native";
import { Alert } from "react-native";

export default function EditProfile({ navigation }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [altPhone, setaltPhone] = useState("");
  const [company, setCompany] = useState("");
  const [occ, setOcc] = useState("");
  const [aadhar, setaadhar] = useState("");
  const [pan, setPan] = useState("");
  const [voterId, setvoterId] = useState("");
  const [address, setaddress] = useState("");

  const isAnyFieldEmpty = () => {
    return (
      name.trim() === "" ||
      email.trim() === "" ||
      altPhone.trim() === "" ||
      company.trim() === "" ||
      occ.trim() === "" ||
      aadhar.trim() === "" ||
      pan.trim() === "" ||
      voterId.trim() === "" ||
      address.trim() === ""
    );
  };

  const handleFormSubmit = () => {
    if (isAnyFieldEmpty()) {
      // At least one field is empty
      Alert.alert("Invalid Submission", "Please enter all the details", [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "OK", onPress: () => console.log("OK Pressed") },
      ]);
    } else {
      //SAVE
      navigation.goBack();
    }
  };

  return (
    <View
      style={{
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
      }}
    >
      <SafeAreaView
        style={{
          width: "90%",

          marginTop: 20,
          flex: 1,
        }}
      >
        <Pressable onPress={handleFormSubmit}>
          <Text
            style={{
              fontSize: 15,
              color: colors.red,
              fontWeight: "bold",
              position: "absolute",
              right: 10,
            }}
          >
            SAVE
          </Text>
        </Pressable>
        <View style={{ marginTop: 40, alignItems: "center" }}>
          <Image
            style={{
              alignSelf: "center",
              justifyContent: "center",
              width: 100,
              height: 100,
            }}
            source={userDp}
            resizeMode={"cover"}
          />
          <View
            style={{
              height: 1,
              backgroundColor: colors.gray,
              width: "100%",
              marginVertical: 20,
            }}
          />
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ flexGrow: 1 }}
        >
          <TextInput
            style={styles.input}
            onChangeText={setName}
            value={name}
            numberOfLines={1}
            placeholder="Name"
          />
          <TextInput
            style={styles.input}
            onChangeText={setEmail}
            value={email}
            numberOfLines={1}
            keyboardType="email-address"
            placeholder="Email"
          />
          <TextInput
            style={styles.input}
            onChangeText={setaltPhone}
            value={altPhone}
            numberOfLines={1}
            keyboardType="numeric"
            placeholder="Alternate Phone Number"
          />
          <TextInput
            style={styles.input}
            onChangeText={setCompany}
            value={company}
            numberOfLines={1}
            placeholder="Company"
          />
          <TextInput
            style={styles.input}
            onChangeText={setOcc}
            value={occ}
            numberOfLines={1}
            placeholder="Occupation"
          />
          <TextInput
            style={styles.input}
            onChangeText={setaadhar}
            value={aadhar}
            numberOfLines={1}
            placeholder="Aadhar"
          />
          <TextInput
            style={styles.input}
            onChangeText={setPan}
            value={pan}
            numberOfLines={1}
            placeholder="PAN"
          />
          <TextInput
            style={styles.input}
            onChangeText={setvoterId}
            value={voterId}
            numberOfLines={1}
            placeholder="Voter Id"
          />
          <TextInput
            style={styles.input2}
            onChangeText={setaddress}
            value={address}
            multiline={true}
            placeholder="Address"
            numberOfLines={2}
          />
          <Pressable
            style={{ padding: 15, marginBottom: 30, alignSelf: "center" }}
            onPress={handleFormSubmit}
          >
            <Text
              style={{
                fontSize: 15,
                color: colors.red,
                fontWeight: "bold",
              }}
            >
              SAVE
            </Text>
          </Pressable>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}
const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    padding: 10,
    borderColor: "white",

    fontSize: 18,
    color: colors.black,
    marginBottom: 30,
    alignItems: "center",
    justifyContent: "center",
    borderBottomColor: "#cdcdcd",
  },
  input2: {
    borderWidth: 1,
    padding: 10,
    borderColor: "white",

    fontSize: 18,
    color: colors.black,
    marginBottom: 20,
    alignItems: "center",
    justifyContent: "center",
    borderBottomColor: "#cdcdcd",
  },
  text: { alignSelf: "center", color: colors.white },
});
