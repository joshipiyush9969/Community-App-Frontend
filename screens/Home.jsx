import React from "react";
import { View, Text } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import colors from "../constants/colors";
import { Image } from "react-native";
import userDp from "../assets/userDp.png";
import { FlatList } from "react-native";
import card1 from "../assets/Card2.png";
import card2 from "../assets/Card3.png";
import card3 from "../assets/Card4.png";
import { Feather } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

const DATA = [
  { image: card1, id: 1 },
  {
    image: card2,
    id: 2,
  },
  {
    image: card3,
    id: 3,
  },
];

const FEED_DATA = [1, 2, 3, 4, 5];

export default function Home(props) {
  return (
    <ScrollView
      contentContainerStyle={{
        backgroundColor: "#fff",

        justifyContent: "center",
      }}
    >
      <SafeAreaView
        style={{
          width: "90%",
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 30,
          alignSelf: "center",
          marginTop: 20,
        }}
      >
        <View>
          <Text style={{ fontSize: 30, color: colors.red, fontWeight: "bold" }}>
            Good Morning
          </Text>
          <Text
            style={{ fontSize: 22, color: colors.black, fontWeight: "bold" }}
          >
            Test User
          </Text>
          <Text
            style={{ fontSize: 22, color: colors.black, fontWeight: "bold" }}
          >
            🌧️
          </Text>
        </View>
        <Image
          style={{
            alignSelf: "center",
            justifyContent: "center",
            width: 54,
            height: 54,
          }}
          source={userDp}
          resizeMode={"cover"}
        />
      </SafeAreaView>
      <View
        style={{
          width: "90%",

          justifyContent: "space-between",

          alignSelf: "center",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text
            style={{
              fontSize: 18,
              color: colors.black,
              fontWeight: "bold",
              marginBottom: 10,
            }}
          >
            Community Updates
          </Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Feather name="users" size={20} color={colors.gray} />
            <Text
              style={{
                fontSize: 14,
                color: colors.gray,
                fontWeight: "bold",
                marginLeft: 2,
              }}
            >
              12K
            </Text>
          </View>
        </View>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          data={DATA}
          renderItem={({ item }) => {
            return (
              <View style={{ marginRight: 20 }}>
                <Image
                  style={{
                    alignSelf: "center",
                    width: 200,
                    height: 126,
                  }}
                  source={item.image}
                  resizeMode={"cover"}
                />
              </View>
            );
          }}
        />
      </View>
      <View
        style={{
          width: "90%",

          justifyContent: "space-between",

          alignSelf: "center",
        }}
      >
        <Text
          style={{
            fontSize: 18,
            color: colors.black,
            fontWeight: "bold",
            marginVertical: 10,
          }}
        >
          Newcomers!
        </Text>
        {FEED_DATA.map((i, index) => {
          return (
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate("HomeUser");
              }}
              style={{
                borderRadius: 10,
                borderWidth: 1,
                borderColor: colors.gray,
                marginBottom: 10,
                padding: 15,
              }}
              key={index}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginBottom: 10,
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
              <Text
                style={{
                  fontSize: 12,
                  color: colors.gray,
                  fontWeight: "500",
                  marginLeft: 5,
                }}
              >
                New tech guy here! 👋 Ready to geek out and learn! 💻🔧 Any hot
                gadgets to share? 🚀
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </ScrollView>
  );
}
