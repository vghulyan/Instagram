import React from 'react';
import {useIsFocused} from '@react-navigation/core';
import {Button, Text, View} from 'react-native';

const SettingsScreen = ({ navigation }) => {
    const isFocused = useIsFocused();
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Text style={{ color: isFocused ? "green" : "black" }}>SettingsScreen</Text>
            <Button title="Go Back One Screen, i.e. Search screen" onPress={() => navigation.goBack()} />
        </View>
    );
};

export default SettingsScreen;
