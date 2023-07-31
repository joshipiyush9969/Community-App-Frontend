import React from "react";
import { Button } from "react-native";
import { View, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import userDp from "../assets/userDp.png";
import { Image } from "react-native";
import colors from "../constants/colors";
import { TouchableOpacity } from "react-native";
import ProfileCards from "../components/ProfileCards";

export default function Profile({ navigation }) {

  const onPress = () => {
    navigation.navigate("EditProfile")
  }

  return (
    <ProfileCards
      Name={"User Name"}
      navigation={navigation}
      Phone={"+91 2087599036"}
      Email={"user@gmail.com"}
      PAN={"AAAAA8888A"}
      VoterId={"ABC1234567"}
      Aadhar={"3977 8800 0234"}
      Company={"AsuInfotech"}
      Occupation={"S/W Developer"}
      Address={"212/214, Central Facility Building II Maharashtra"}
      Alternate={"+913738473738"}
      ownProfile={true}
      onPress={onPress}
    />
  );
}
