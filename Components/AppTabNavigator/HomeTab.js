import React from 'react';
import {
    View,
    Text,
    Button,
    StyleSheet,
    ScrollView
} from "react-native";

import { Container, Content, Thumbnail, Header, Left, Right, Body } from 'native-base'
import CardComponent from '../CardComponent'

import {createStackNavigator} from "@react-navigation/stack";
import {Ionicons} from "@expo/vector-icons";

const HomeStack = createStackNavigator();

const HomeScreen = ({ navigation }) => {
    navigation.setOptions({
        headerShown: false,
        // headerRight: () => (
        //     <Button
        //         title="Save"
        //         // onPress={() => {
        //         //     //save the changes
        //         //     navigation.replace("Home");
        //         // }}
        //     />
        // )
    });
    return (
        <Container style={styles.container}>
            <Header>
                <Left><Ionicons name="ios-camera" style={{ paddingLeft: 10 }} size={32} /></Left>
                <Body><Text style={{ fontSize: 20 }}>Instagram</Text></Body>
                <Right><Ionicons name="ios-send" style={{ paddingRight: 10 }} size={32} /></Right>
            </Header>
            <Content>

                <View style={{ height: 100 }}>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 7 }}>
                        <Text style={{ fontWeight: 'bold' }}>Stories</Text>

                        <View style={{ flexDirection: 'row', 'alignItems': 'center' }}>
                            <Ionicons name="md-play" style={{ fontSize: 14 }} />
                            <Text style={{ fontWeight: 'bold' }}> Watch All</Text>
                        </View>
                    </View>
                    <View style={{ flex: 3 }}>
                        <ScrollView
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={{
                                alignItems: 'center',
                                paddingStart: 5,
                                paddingEnd: 5
                            }}

                        >

                            <Thumbnail
                                style={{ marginHorizontal: 5, borderColor: 'pink', borderWidth: 2 }}
                                source={require('../../assets/StoriesHeaderThumbnails/1.jpg')} />

                            <Thumbnail
                                style={{ marginHorizontal: 5, borderColor: 'pink', borderWidth: 2 }}
                                source={require('../../assets/StoriesHeaderThumbnails/2.jpg')} />

                            <Thumbnail
                                style={{ marginHorizontal: 5, borderColor: 'pink', borderWidth: 2 }}
                                source={require('../../assets/StoriesHeaderThumbnails/3.jpg')} />
                            <Thumbnail
                                style={{ marginHorizontal: 5, borderColor: 'pink', borderWidth: 2 }}
                                source={require('../../assets/StoriesHeaderThumbnails/4.jpg')} />

                            <Thumbnail
                                style={{ marginHorizontal: 5, borderColor: 'pink', borderWidth: 2 }}
                                source={require('../../assets/StoriesHeaderThumbnails/5.jpg')} />
                            <Thumbnail
                                style={{ marginHorizontal: 5, borderColor: 'pink', borderWidth: 2 }}
                                source={require('../../assets/StoriesHeaderThumbnails/6.jpg')} />
                            <Thumbnail
                                style={{ marginHorizontal: 5, borderColor: 'pink', borderWidth: 2 }}
                                source={require('../../assets/StoriesHeaderThumbnails/7.jpg')} />
                            <Thumbnail
                                style={{ marginHorizontal: 5, borderColor: 'pink', borderWidth: 2 }}
                                source={require('../../assets/StoriesHeaderThumbnails/9.jpg')} />

                            <Thumbnail
                                style={{ marginHorizontal: 5, borderColor: 'pink', borderWidth: 2 }}
                                source={require('../../assets/StoriesHeaderThumbnails/8.jpg')} />

                        </ScrollView>
                    </View>
                </View>
                <CardComponent imageSource="1" likes="101" />
                <CardComponent imageSource="2" likes="201" />
                <CardComponent imageSource="3" likes="301" />
            </Content>
        </Container>
    );
};

const DetailsScreen = props => (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>DetailsScreen</Text>
    </View>
);

const HomeStackNavigator = ({ navigation, route }) => {
    if (route.state) {
        navigation.setOptions({
            tabBarVisible: route.state.index > 0 ? false : true
        });
    }

    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name="Home" component={HomeScreen} />
            <HomeStack.Screen name="Details" component={DetailsScreen} />
        </HomeStack.Navigator>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    }
});

export default HomeStackNavigator;
