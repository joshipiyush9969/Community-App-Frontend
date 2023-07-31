import React from "react";
import { Image } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";
import userDp from "../assets/userDp.png";

export default function UserCard({ item, index, navigation }) {
  return (
    <View
      style={{
        width: "90%",
        borderRadius: 10,
        borderWidth: 1,
        borderColor: colors.gray,
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
            User 2
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
  );
}
