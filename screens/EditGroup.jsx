import React, { useEffect, useState } from "react";
import { Alert, Text } from "react-native";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import colors from "../constants/colors";
import { AntDesign } from "@expo/vector-icons";
import { FlatList } from "react-native";
import UserCard from "../components/UserCard";
import { TouchableOpacity } from "react-native-gesture-handler";
import { StyleSheet } from "react-native";
import { TextInput } from "react-native";
import { Pressable } from "react-native";

export default function EditGroup({ navigation, route }) {
  const [name, setName] = useState("");
  const [des, setDes] = useState("");
  const [FEED_DATA, setFEED_DATA] = useState([]);

  useEffect(() => {
  

    if (route?.params?.data != undefined || route?.params?.data != null) {
      const newData = route.params?.data.filter(
        (item) => item.selected === true
      );
  
      setFEED_DATA(newData);
    }
  }, []);

  const isAnyFieldEmpty = () => {
    return name.trim() === "" || des.trim() === "";
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
      navigation.navigate("ViewGroup");
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
        <View
          style={{
            marginTop: 20,
            alignItems: "center",

            borderRadius: 10,
            padding: 20,
          }}
        >
          <View
            style={{
              width: 90,
              height: 90,

              borderRadius: 100,
              borderWidth: 2,
              justifyContent: "center",
              alignItems: "center",
              borderColor: colors.red,
            }}
          >
            <Text
              style={{
                fontSize: 40,
                color: colors.black,
                textAlign: "center",
                alignSelf: "center",
              }}
            >
              {name.trim().length === 0 ? "G" : name.charAt(0)}
            </Text>
          </View>
        </View>
        <View
          style={{
            height: 1,
            backgroundColor: colors.gray,
            width: "100%",
            marginVertical: 10,
            alignSelf: "center",
          }}
        />
        <View>
          <TextInput
            style={styles.input}
            onChangeText={setName}
            value={name}
            numberOfLines={1}
            placeholder="Circle Name"
          />
          <TextInput
            style={styles.input}
            onChangeText={setDes}
            value={des}
            numberOfLines={1}
            placeholder="Description"
          />
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
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
          <Pressable
            onPress={() => {
              navigation.navigate("AddGroupMember");
            }}
          >
            <Text
              style={{
                fontSize: 15,
                color: colors.red,
                fontWeight: "bold",
                marginRight: 10,
              }}
            >
              {FEED_DATA.length !=0?"EDIT":"ADD"}
            </Text>
          </Pressable>
        </View>
        <View style={{ marginTop: 20, flex: 1, width: "100%" }}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={FEED_DATA}
            renderItem={(item, index) => {
              return (
                <UserCard navigation={navigation} index={index} item={item} />
              );
            }}
          />
        </View>
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
  text: { alignSelf: "center", color: colors.white },
});
