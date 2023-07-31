import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { View, Text, FlatList } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import userDp from "../assets/userDp.png";

import { SafeAreaView } from "react-native-safe-area-context";
import colors from "../constants/colors";
import { Image } from "react-native";
import UserCard from "../components/UserCard";
import { Pressable } from "react-native";

const FEED_DATA = [
  { id: 1, name: "User 2", selected: false },
  { id: 2, name: "User 2", selected: false },
  { id: 3, name: "User 2", selected: false },
  { id: 4, name: "User 2", selected: false },
  { id: 5, name: "User 2", selected: false },
  { id: 6, name: "User 2", selected: false },
  { id: 7, name: "User 2", selected: false },
  { id: 8, name: "User 2", selected: false },

  // Add more items as needed
];

export default function AddGroupMember({ navigation }) {
  const [search, setSearch] = useState("");
  const [data, setData] = useState(FEED_DATA);
  const toggleSelection = (itemId) => {
    setData((prevData) =>
      prevData.map((item) =>
        item.id === itemId ? { ...item, selected: !item.selected } : item
      )
    );
  };


  return (
    <>
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: "#fff",
          paddingTop: 40,
          alignItems: "center",
        }}
      >
        <View
          style={{
            width: "90%",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <TextInput
            style={styles.input}
            onChangeText={setSearch}
            value={search}
            placeholder="Add memebers by name, company, role, locality"
          />
          <Pressable
            onPress={() => {
              navigation.replace("EditGroup", { data: data });
            }}
          >
            <Text
              style={{
                fontSize: 15,
                color: colors.red,
                fontWeight: "bold",
              }}
            >
              NEXT
            </Text>
          </Pressable>
        </View>
        <View style={{ marginTop: 30, flex: 1, width: "100%" }}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={data}
            renderItem={({ item, index }) => {
              return (
                <TouchableOpacity onPress={() => toggleSelection(item.id)}>
                  <View
                    style={{
                      width: "90%",
                      borderRadius: 10,
                      borderWidth: 1,
                      borderColor: item.selected ? colors.red : colors.gray,
                      marginBottom: 20,
                      padding: 15,
                      alignSelf: "center",
                    }}
                    key={index}
                  >
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                      }}
                    >
                      <Image
                        style={{
                          justifyContent: "center",
                          width: 54,
                          height: 54,
                        }}
                        source={userDp}
                        resizeMode={"cover"}
                      />
                      <View style={{ marginLeft: 10 }}>
                        <Text
                          style={{
                            fontSize: 16,
                            color: colors.black,
                          }}
                        >
                          {item.name}
                        </Text>
                        <Text
                          style={{
                            fontSize: 12,
                            color: colors.gray,
                          }}
                        >
                          Company Name
                        </Text>
                        <Text
                          style={{
                            fontSize: 12,
                            color: colors.gray,
                          }}
                        >
                          Role
                        </Text>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    borderColor: colors.gray,
    borderRadius: 10,
  },
});
