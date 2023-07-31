import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { View, Text, FlatList } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";

import { SafeAreaView } from "react-native-safe-area-context";
import colors from "../constants/colors";
import { Image } from "react-native";
import UserCard from "../components/UserCard";

const FEED_DATA = [
  1, 2, 3, 4, 5, 6, 5, 4, 343, 42, 423, 423, 4234, 234, 234, 32423,
];

export default function Directory({ navigation }) {
  const [search, setSearch] = useState("");
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#fff",
        paddingTop: 30,
        alignItems: "center",
      }}
    >
      <TextInput
        style={styles.input}
        onChangeText={setSearch}
        value={search}
        placeholder="Search By name, company, role, locality"
      />
      <View style={{ marginTop: 30, flex: 1, width: "100%" }}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={FEED_DATA}
          renderItem={(item, index) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("SearchUser");
                }}
              >
                <UserCard
                  navigation={navigation}
                  name={"Test User 2"}
                  index={index}
                  item={item}
                />
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    borderColor: colors.gray,
    borderRadius: 10,
    width: "90%",
  },
});
