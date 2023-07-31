import React from "react";
import { FlatList } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";
import { SafeAreaView } from "react-native";
import colors from "../constants/colors";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Pressable } from "react-native";

const FEED_DATA = [
  1, 2, 3, 4, 5, 6, 5, 4, 343, 42, 423, 423, 4234, 234, 234, 32423,
];
export default function GroupComponent({ navigation, onPress, isOwn }) {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#fff",
        paddingTop: 30,
        alignItems: "center",
      }}
    >
      <View style={{ marginTop: 30, flex: 1, width: "100%" }}>
        {isOwn === true ? (
          <Pressable onPress={onPress}>
            <Text
              style={{
                fontSize: 15,
                color: colors.red,
                fontWeight: "bold",
                position: "absolute",
                right: 30,
              }}
            >
              NEW CIRCLE
            </Text>
          </Pressable>
        ) : null}
        <Text
          style={{
            fontSize: 25,
            color: colors.black,
            fontWeight: "bold",
            marginLeft: 15,
            marginBottom: 30,
            marginTop: 20,
          }}
        >
          {isOwn ? "Your" : "User 2"} Circles
        </Text>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={FEED_DATA}
          renderItem={(item, index) => {
            return (
              <Pressable
                onPress={() => navigation.navigate("Group")}
                style={{
                  width: "90%",
                  borderRadius: 10,
                  elevation: 5,
                  marginBottom: 10,
                  padding: 15,
                  alignSelf: "center",
                  alignItems: "center",
                  backgroundColor: colors.red,
                }}
                key={index}
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
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginBottom: 10,
                  }}
                >
                  <View style={{ marginLeft: 10 }}>
                    <Text
                      style={{
                        fontSize: 18,
                        color: colors.white,
                        textAlign: "center",
                        fontWeight: "bold",
                      }}
                    >
                      Group Name
                    </Text>
                    <Text
                      style={{
                        fontSize: 14,
                        color: colors.white,
                        textAlign: "center",
                        marginTop: 5,
                      }}
                    >
                      Discuss the latest tech trends, gadgets, and news. Get
                      support, share knowledge, and grow together in the world
                      of technology! 📱💻🌐
                    </Text>
                  </View>
                </View>
              </Pressable>
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
}
