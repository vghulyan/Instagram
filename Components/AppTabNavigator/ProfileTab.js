import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    Dimensions,
    FlatList
} from "react-native";

import {CardStyleInterpolators, createStackNavigator} from "@react-navigation/stack";

import { getHeaderTitle, shouldHeaderBeShown } from '../utils';

const Stack = createStackNavigator();

import { Container, Content, Icon, Header, Left, Body, Right, Segment, Button } from 'native-base'
import EntypoIcon from 'react-native-vector-icons/Entypo';

const { height, width } = Dimensions.get('window');

import {Ionicons} from "@expo/vector-icons";

import CardComponent from '../CardComponent'

const images = [
    require('../../assets/feed_images/1.jpg'),
    require('../../assets/feed_images/2.jpg'),
    require('../../assets/feed_images/3.png'),
    require('../../assets/feed_images/4.jpg'),
    require('../../assets/feed_images/5.jpg'),
    require('../../assets/feed_images/6.jpg'),
    require('../../assets/feed_images/7.jpg'),
    require('../../assets/feed_images/8.png'),
    require('../../assets/feed_images/9.jpg'),
    require('../../assets/feed_images/10.jpg'),
    require('../../assets/feed_images/11.jpg'),
    require('../../assets/feed_images/12.jpg'),
];

const ProfileTab = ({ navigation }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    navigation.setOptions({
        tabBarIcon: ({ tintColor }) => (
            <Ionicons name="person" style={{ color: tintColor }} size={32} />
        ),
        headerRight: () => (
            <Button
                title="Profile Tab"
                onPress={() => {
                    //save the changes
                    navigation.replace("Home");
                }}
            />
        )
    });
    const segmentClicked = (index) => {
        setActiveIndex(index);
    };

    const checkActive = (index) => {
        if (activeIndex !== index) {
            return (
                { color: 'grey' }
            )
        }
        else {
            return (
                {}
            )
        }

    };

    const renderSectionOne = () => {
        return images.map((image, index) => {
            return (
                <View key={index} style={[{ width: (width) / 3 }, { height: (width) / 3 }, { marginBottom: 2 }, index % 3 !== 0 ? { paddingLeft: 2 } : { paddingLeft: 0 }]}>
                    <Image style={{
                        flex: 1,
                        alignSelf: 'stretch',
                        width: undefined,
                        height: undefined,

                    }}
                           source={image}>
                    </Image>

                </View>
            )
        })

    };

    const renderSection = () => {

        if (activeIndex == 0) {

            return (
                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>

                    {renderSectionOne()}
                </View>
            )

        }
        else if (activeIndex == 1) {
            return (
                <View>
                    <CardComponent imageSource="1" likes="101" />
                    <CardComponent imageSource="2" likes="101" />
                    <CardComponent imageSource="3" likes="101" />
                </View>
            )
        }
    };


    return (
        <Container style={styles.container}>
            <Header style={{ paddingLeft: 10, paddingRight: 10 }}>
                <Left>
                    <Ionicons name="md-person-add" size={32} />
                </Left>
                <Right>
                    <EntypoIcon name="back-in-time" style={{ fontSize: 32 }} />
                </Right>
            </Header>

            <Content>

                <View style={{ paddingTop: 10 }}>

                    {/** User Photo Stats**/}
                    <View style={{ flexDirection: 'row' }}>

                        {/**User photo takes 1/3rd of view horizontally **/}
                        <View
                            style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start' }}>
                            <Image source={require('../../assets/me.jpg')}
                                   style={{ width: 75, height: 75, borderRadius: 37.5 }} />

                        </View>

                        {/**User Stats take 2/3rd of view horizontally **/}
                        <View style={{ flex: 3 }}>

                            {/** Stats **/}
                            <View
                                style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-around',
                                    alignItems: 'flex-end'
                                }}>
                                <View style={{ alignItems: 'center' }}>
                                    <Text>30</Text>
                                    <Text style={{ fontSize: 10, color: 'grey' }}>Posts</Text>
                                </View>
                                <View style={{ alignItems: 'center' }}>
                                    <Text>405</Text>
                                    <Text style={{ fontSize: 10, color: 'grey' }}>Followers</Text>
                                </View>
                                <View style={{ alignItems: 'center' }}>
                                    <Text>13</Text>
                                    <Text style={{ fontSize: 10, color: 'grey' }}>Following</Text>
                                </View>
                            </View>

                            {/**Edit profile and Settings Buttons **/}
                            <View style={{ flexDirection: 'row', alignItems: 'flex-start', paddingTop: 10 }}>

                                <View
                                    style={{ flexDirection: 'row' }}>

                                    {/** Edit profile takes up 3/4th **/}
                                    <Button bordered dark
                                            style={{ flex: 3, marginLeft: 10, justifyContent: 'center', height: 30 }}><Text>Edit Profile</Text></Button>


                                    {/** Settings takes up  1/4th place **/}
                                    <Button bordered dark style={{
                                        flex: 1,
                                        height: 30,
                                        marginRight: 10, marginLeft: 5,
                                        justifyContent: 'center'
                                    }}>
                                        <Ionicons name="ios-settings" size={18} />
                                    </Button>
                                </View>
                            </View>{/**End edit profile**/}
                        </View>
                    </View>

                    <View style={{ paddingBottom: 10 }}>
                        <View style={{ paddingHorizontal: 10 }}>
                            <Text style={{ fontWeight: 'bold' }}>Vardan GHULYAN</Text>
                            <Text>Father | Web Developer | Dreamer</Text>
                            <Text>www.vg.com</Text>
                        </View>
                    </View>


                </View>


                <View >
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', borderTopWidth: 1, borderTopColor: '#eae5e5' }}>
                        <Button
                            onPress={() => segmentClicked(0)}
                            transparent
                            active={activeIndex == 0}
                        >
                            <Ionicons name="ios-apps" style={[{ fontSize: 18 }, activeIndex == 0 ? {} : { color: 'grey' }]}></Ionicons>
                        </Button>
                        <Button
                            onPress={() => segmentClicked(1)}
                            transparent active={activeIndex == 1}>
                            <Ionicons name="ios-list" style={[{ fontSize: 18 }, activeIndex == 1 ? {} : { color: 'grey' }]}></Ionicons>
                        </Button>
                        <Button
                            onPress={() => segmentClicked(2)}
                            transparent active={activeIndex == 2}>
                            <Ionicons name="ios-bookmark" style={[{ fontSize: 18 }, activeIndex == 2 ? {} : { color: 'grey' }]}></Ionicons>
                        </Button>
                        <Button
                            onPress={() => segmentClicked(3)}
                            transparent last active={activeIndex == 3}>
                            <Ionicons name="ios-people" style={[{ fontSize: 18 }, activeIndex == 3 ? {} : { color: 'grey' }]}></Ionicons>
                        </Button>
                    </View>



                    {/** Height =width/3 so that image sizes vary according to size of the phone yet remain squares **/}

                    {renderSection()}

                </View>
            </Content>
        </Container >
    );
};
const ProfileStackNavigator = ({ navigation, route }) => {
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
                name="Profile Tab"
                component={ProfileTab}
            />

        </Stack.Navigator>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    }
});

export default ProfileStackNavigator;
