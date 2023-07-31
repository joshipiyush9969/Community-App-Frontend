import React from "react";
import { FlatList } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";
import { SafeAreaView } from "react-native";
import colors from "../constants/colors";
import GroupComponent from "../components/GroupComponent";

export default function Groups({ navigation, route, }) {
  const onPress = () => {
    navigation.navigate("EditGroup");
  };
  return (
    <GroupComponent
      onPress={onPress}
      navigation={navigation}
      isOwn={route.params.isOwn}
    />
  );
}
