import React from "react";
import {Button, Text, View} from "react-native";
import {CardStyleInterpolators, createStackNavigator} from "@react-navigation/stack";

import { getHeaderTitle, shouldHeaderBeShown } from '../utils';

const Stack = createStackNavigator();

const AddMediaTab = ({ navigation }) => {
    navigation.setOptions({
        headerRight: () => (
            <Button
                title="Media Tab"
                onPress={() => {
                    //save the changes
                    navigation.replace("Home");
                }}
            />
        )
    });
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Text>AddMediaScreen</Text>
            <Button title="Go To Details Screen" />
        </View>
    );
};
const AddMediaStackNavigator = ({ navigation, route }) => {
    if (route.state) {
        navigation.setOptions({
            tabBarVisible: route.state.index > 0 ? false : true
        });
    }
    return (
        <Stack.Navigator
            screenOptions={{
                gestureEnabled: true,
                gestureDirection: "horizontal",
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
            }}
            headerMode="float"
            animation="fade"
        >
            <Stack.Screen
                options={({ route }) => ({
                    title: getHeaderTitle(route),
                    headerShown: shouldHeaderBeShown(route)
                })}
                name="Add Media Tab"
                component={AddMediaTab}
            />

        </Stack.Navigator>
    );
};

export default AddMediaStackNavigator;
