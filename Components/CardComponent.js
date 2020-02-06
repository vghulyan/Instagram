import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image
} from "react-native";

import { Card, CardItem, Thumbnail, Body, Left, Right, Button } from 'native-base'
import {Ionicons} from "@expo/vector-icons";

class CardComponent extends Component {

    render() {

        const images = {

            "1": require('../assets/feed_images/1.jpg'),
            "2": require('../assets/feed_images/2.jpg'),
            "3": require('../assets/feed_images/3.png')
        };

        return (
            <Card>
                <CardItem>
                    <Left>
                        <Thumbnail source={require('../assets/me.jpg')} />
                        <Body>
                            <Text>Vardan </Text>
                            <Text note>Feb 13, 2020</Text>
                        </Body>
                    </Left>
                </CardItem>
                <CardItem cardBody>
                    <Image source={images[this.props.imageSource]} style={{ height: 200, width: null, flex: 1 }} />
                </CardItem>
                <CardItem style={{ height: 45 }}>
                    <Left>
                        <Button transparent>
                            <Ionicons name="ios-heart" size={24} />
                        </Button>
                        <Button transparent>
                            <Ionicons name="ios-chatbubbles" size={24} />
                        </Button>
                        <Button transparent>
                            <Ionicons name="ios-send" size={24} />
                        </Button>


                    </Left>
                </CardItem>

                <CardItem style={{ height: 20 }}>
                    <Text>{this.props.likes} likes</Text>
                </CardItem>
                <CardItem>
                    <Body>
                        <Text>
                            <Text style={{ fontWeight: "900" }}>Vardan </Text>
                            Ea do Lorem occaecat laborum do. Minim ullamco ipsum minim eiusmod dolore cupidatat magna exercitation amet proident qui. Est do irure magna dolor adipisicing do quis labore excepteur. Commodo veniam dolore cupidatat nulla consectetur do nostrud ea cupidatat ullamco labore. Consequat ullamco nulla ullamco minim.
                        </Text>
                    </Body>
                </CardItem>
            </Card>
        );
    }
}
export default CardComponent;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
