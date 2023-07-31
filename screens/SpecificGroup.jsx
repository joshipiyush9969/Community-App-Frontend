import React from "react";
import { Text } from "react-native";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import colors from "../constants/colors";
import { AntDesign } from "@expo/vector-icons";
import { FlatList } from "react-native";
import UserCard from "../components/UserCard";
import { TouchableOpacity } from "react-native-gesture-handler";

const FEED_DATA = [1, 2, 3, 4, 5, 6, 6];

export default function SpecificGroup({ navigation }) {
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
        <Text
          style={{
            fontSize: 25,
            color: colors.black,
            marginTop: 20,
            fontWeight: "bold",
          }}
        >
          Group Name
        </Text>
        <View
          style={{
            marginTop: 20,
            alignItems: "center",
            backgroundColor: colors.red,
            borderRadius: 10,
            padding: 20,
          }}
        >
          <View
            style={{
              width: 50,
              height: 50,
              backgroundColor: colors.white,
              borderRadius: 100,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: 35,
                color: colors.black,
                textAlign: "center",
                alignSelf: "center",
              }}
            >
              G
            </Text>
          </View>
          <Text
            style={{
              fontSize: 18,
              color: colors.white,
              marginTop: 10,
              fontWeight: "bold",
            }}
          >
            10 Participants
          </Text>
          <View style={{ marginTop: 10 }}>
            <Text
              style={{ fontSize: 14, color: colors.white, textAlign: "center" }}
            >
              Discuss the latest tech trends, gadgets, and news. Get support,
              share knowledge, and grow together in the world of technology!
              📱💻🌐{" "}
            </Text>
          </View>
        </View>
        <View
          style={{
            height: 1,
            backgroundColor: colors.gray,
            width: "90%",
            marginVertical: 20,
            alignSelf: "center",
          }}
        />
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text
            style={{
              fontSize: 14,
              color: colors.black,
              fontWeight: "bold",
              marginLeft: 10,
              marginRight: 5,
            }}
          >
            Members
          </Text>
          <AntDesign name="down" size={14} color="black" />
        </View>
        <View style={{ marginTop: 20, flex: 1, width: "100%" }}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={FEED_DATA}
            renderItem={(item, index) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("GroupUser");
                  }}
                >
                  <UserCard navigation={navigation} index={index} item={item} />
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </SafeAreaView>
    </View>
  );
}
