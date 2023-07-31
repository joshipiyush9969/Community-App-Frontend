import React from "react";
import { Button } from "react-native";
import { View, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import userDp from "../assets/userDp.png";
import { Image } from "react-native";
import colors from "../constants/colors";
import { TouchableOpacity } from "react-native";
import { Pressable } from "react-native";

export default function ProfileCards({
  Name,
  navigation,
  Phone,
  Email,
  PAN,
  VoterId,
  Aadhar,
  Company,
  Occupation,
  Address,
  Alternate,
  ownProfile,
  onPress,
}) {
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
        {ownProfile && (
          <Pressable onPress={onPress}>
            <Text
              style={{
                fontSize: 15,
                color: colors.red,
                fontWeight: "bold",
                position: "absolute",
                right: 10,
              }}
            >
              EDIT
            </Text>
          </Pressable>
        )}
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
          <Text style={{ fontSize: 22, color: colors.black, marginTop: 10 }}>
            {ownProfile ? "User Name" : "User 2"}
          </Text>
          <View style={{ flexDirection: "row", marginTop: 10 }}>
            <Text style={{ fontSize: 14, color: colors.black }}>{Phone} </Text>
            <Text style={{ fontSize: 14, color: colors.black }}>.</Text>
            <Text style={{ fontSize: 14, color: colors.black }}> {Email}</Text>
          </View>
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
          <View>
            <Text
              style={{
                fontSize: 20,
                color: colors.black,
                alignSelf: "center",
                fontWeight: "bold",
              }}
            >
              Identity
            </Text>
            <View
              style={{
                height: 1,
                backgroundColor: "#cdcdcd",
                width: "90%",
                alignSelf: "center",
                marginVertical: 20,
              }}
            />
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginVertical: 10,
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  color: colors.black,
                  alignSelf: "center",
                }}
              >
                PAN
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  color: colors.black,
                  alignSelf: "center",
                }}
              >
                {PAN}
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginVertical: 10,
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  color: colors.black,
                  alignSelf: "center",
                }}
              >
                Voter Id
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  color: colors.black,
                  alignSelf: "center",
                }}
              >
                {VoterId}
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginVertical: 10,
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  color: colors.black,
                  alignSelf: "center",
                }}
              >
                Aadhar
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  color: colors.black,
                  alignSelf: "center",
                }}
              >
                {Aadhar}
              </Text>
            </View>
          </View>
          <View>
            <Text
              style={{
                fontSize: 20,
                color: colors.black,
                alignSelf: "center",
                fontWeight: "bold",
                marginTop: 20,
              }}
            >
              Work and Occupation
            </Text>
            <View
              style={{
                height: 1,
                backgroundColor: "#cdcdcd",
                width: "90%",
                alignSelf: "center",
                marginVertical: 20,
              }}
            />
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginVertical: 10,
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  color: colors.black,
                  alignSelf: "center",
                }}
              >
                Company
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  color: colors.black,
                  alignSelf: "center",
                }}
              >
                {Company}
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginVertical: 10,
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  color: colors.black,
                  alignSelf: "center",
                }}
              >
                Occupation
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  color: colors.black,
                  alignSelf: "center",
                }}
              >
                {Occupation}
              </Text>
            </View>
          </View>
          <View>
            <Text
              style={{
                fontSize: 20,
                color: colors.black,
                alignSelf: "center",
                fontWeight: "bold",
                marginTop: 20,
              }}
            >
              Additional Details
            </Text>
            <View
              style={{
                height: 1,
                backgroundColor: "#cdcdcd",
                width: "90%",
                alignSelf: "center",
                marginVertical: 20,
              }}
            />
            <View
              style={{
                marginVertical: 10,
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  color: colors.black,
                  alignSelf: "center",
                  marginBottom: 5,
                }}
              >
                Address
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  color: colors.black,
                  alignSelf: "center",
                  textAlign: "center",
                  width: "85%",
                }}
              >
                {Address}
              </Text>
            </View>
            <View
              style={{
                marginVertical: 10,
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  color: colors.black,
                  alignSelf: "center",
                  marginBottom: 5,
                }}
              >
                Alternate Phone
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  color: colors.black,
                  alignSelf: "center",
                }}
              >
                {Alternate}
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => {
                ownProfile
                  ? navigation.navigate("Groups", { ownProfile: ownProfile })
                  : navigation.navigate("ViewGroup", {
                      ownProfile: ownProfile,
                    });
              }}
              style={{ marginTop: 15, paddingBottom: 40 }}
            >
              <Text
                style={{
                  fontSize: 18,
                  color: colors.red,
                  alignSelf: "center",
                }}
              >
                View Circles
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}
