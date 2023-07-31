import { createStackNavigator } from "@react-navigation/stack";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Profile from "../screens/Profile";
import Directory from "../screens/Directory";
import Check from "../screens/Check";
import Login from "../screens/Login";
import { StatusBar } from "expo-status-bar";
import Groups from "../screens/Groups";
import colors from "../constants/colors";
import { Feather } from "@expo/vector-icons";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import SpecificGroup from "../screens/SpecificGroup";
import GroupUser from "../screens/GroupUser";
import DirectoryUser from "../screens/DirectoryUser";
import HomeUser from "../screens/HomeUser";
import EditProfile from "../screens/EditProfile";
import EditGroup from "../screens/EditGroup";
import AddGroupMember from "../screens/AddGroupMember";

const Main = createBottomTabNavigator();
const Internal = createStackNavigator();

const Flow = createStackNavigator();

const SearchStack = createStackNavigator();
const GroupStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const HomeStack = createStackNavigator();

const GroupModel = () => {
  return (
    <GroupStack.Navigator
      initialRouteName="ViewGroup"
      screenOptions={{ headerShown: false }}
    >
      <GroupStack.Screen name="Group" component={SpecificGroup} />
      <GroupStack.Screen
        name="ViewGroup"
        component={Groups}
        initialParams={{ isOwn: true }}
      />
      <GroupStack.Screen name="GroupUser" component={GroupUser} />
      <GroupStack.Screen name="EditGroup" component={EditGroup} />
      <GroupStack.Screen name="AddGroupMember" component={AddGroupMember} />
    </GroupStack.Navigator>
  );
};

const SearchModel = () => {
  return (
    <SearchStack.Navigator
      initialRouteName="Directory"
      screenOptions={{ headerShown: false }}
    >
      <SearchStack.Screen name="Search" component={Directory} />
      <SearchStack.Screen name="SearchUser" component={DirectoryUser} />
      <SearchStack.Screen
        name="ViewGroup"
        component={Groups}
        initialParams={{ isOwn: false }}
      />
      <SearchStack.Screen name="GroupUser" component={GroupUser} />
      <GroupStack.Screen name="Group" component={SpecificGroup} />
    </SearchStack.Navigator>
  );
};

const HomeModel = () => {
  return (
    <HomeStack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen name="HomeUser" component={HomeUser} />
      <HomeStack.Screen
        name="ViewGroup"
        component={Groups}
        initialParams={{ isOwn: false }}
      />
      <HomeStack.Screen name="GroupUser" component={GroupUser} />
      <GroupStack.Screen name="Group" component={SpecificGroup} />
    </HomeStack.Navigator>
  );
};

const ProfileModel = () => {
  return (
    <ProfileStack.Navigator
      initialRouteName="Profile"
      screenOptions={{ headerShown: false }}
    >
      <ProfileStack.Screen name="Profile" component={Profile} />
      <ProfileStack.Screen name="EditProfile" component={EditProfile} />
    </ProfileStack.Navigator>
  );
};

const Bottom = () => {
  return (
    <Main.Navigator
      screenOptions={{ headerShown: false, tabBarActiveTintColor: colors.red }}
      initialRouteName="HomeModel"
    >
      <Main.Screen
        name="HomeModel"
        component={HomeModel}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <Feather
                name="menu"
                size={24}
                color={focused ? colors.red : colors.gray}
              />
            );
          },
        }}
      />
      <Main.Screen
        name="Directory"
        component={SearchModel}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <Feather
                name="search"
                size={24}
                color={focused ? colors.red : colors.gray}
              />
            );
          },
        }}
      />
      <Main.Screen
        name="Groups"
        component={GroupModel}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <MaterialCommunityIcons
                name="account-group"
                size={24}
                color={focused ? colors.red : colors.gray}
              />
            );
          },
        }}
      />
      <Main.Screen
        name="ProfileModel"
        component={ProfileModel}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <Feather
                name="user"
                size={24}
                color={focused ? colors.red : colors.gray}
              />
            );
          },
        }}
      />
    </Main.Navigator>
  );
};

const Stack = () => {
  return (
    <Internal.Navigator
      initialRouteName="Check"
      screenOptions={{ headerShown: false }}
    >
      <Internal.Screen name="Check" component={Check} />
      <Internal.Screen name="Login" component={Login} />
    </Internal.Navigator>
  );
};

const MyTheme = {
  ...DefaultTheme,
  // colors: {
  //   ...DefaultTheme.colors,
  //   background: globalColors.backgroundColor,
  // },
};

export default AppNav = () => {
  return (
    <NavigationContainer theme={MyTheme}>
      <StatusBar
        style="auto"
        translucent
        backgroundColor="transparent"
        // barStyle={"dark-content"}
      />
      <Flow.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Stack"
      >
        <Flow.Screen name="Stack" component={Stack} />
        <Flow.Screen name="Bottom" component={Bottom} />
      </Flow.Navigator>
    </NavigationContainer>
  );
};
