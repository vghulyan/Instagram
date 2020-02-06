import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator, TransitionPresets, CardStyleInterpolators } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import SettingsScreen from "./AppTabNavigator/SettingsTab";
import HomeStackNavigator from "./AppTabNavigator/HomeTab";
import ProfileStackNavigator from "./AppTabNavigator/ProfileTab";
import SearchStackNavigator from "./AppTabNavigator/SearchTab";
import LikesStackNavigator from "./AppTabNavigator/LikesTab";
import AddMediaStackNavigator from "./AppTabNavigator/AddMediaTab";

import { Ionicons } from "@expo/vector-icons";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

import { getHeaderTitle, shouldHeaderBeShown } from './utils';

const HomeTabNavigator = ({ navigation, route }) => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                    let iconName;
                    if (route.name == "Home") {
                        iconName = "ios-home";
                    } else if (route.name == "Media") {
                        iconName = "ios-add-circle";
                    } else if (route.name == "Likes") {
                        iconName = "ios-heart";
                    } else if (route.name == "Search") {
                        iconName = "ios-search";
                    } else if (route.name == "Settings") {
                        iconName = "ios-settings";
                    } else if (route.name == "Profile") {
                        iconName = "ios-person";
                    }
                    return <Ionicons name={iconName} size={size} color={color} />;
                }
            })}
        >
            <Tab.Screen name="Home" component={HomeStackNavigator} />

            <Tab.Screen name="Media" component={AddMediaStackNavigator} />

            <Tab.Screen name="Likes" component={LikesStackNavigator} />

            <Tab.Screen name="Search" component={SearchStackNavigator} />

            <Tab.Screen name="Settings" component={SettingsScreen} />

            <Tab.Screen name="Profile" component={ProfileStackNavigator} />

        </Tab.Navigator>
    );
};

export default function MainScreen() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    gestureEnabled: true,
                    gestureDirection: "horizontal",
                    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
                    // transitionSpec: {
                    //   open: config,
                    //   close: closeConfig
                    // }
                }}
                headerMode="float"
                animation="fade"
            >
                <Stack.Screen
                    options={({ route }) => ({
                        title: getHeaderTitle(route),
                        //headerShown: shouldHeaderBeShown(route)
                        headerShown: false
                    })}
                    name="Home"
                    component={HomeTabNavigator}
                />
                {/**<Stack.Screen name="Settings" component={SettingsScreen} />*/}
            </Stack.Navigator>
        </NavigationContainer>
    );
}
