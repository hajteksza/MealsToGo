import React from "react";
import styled from "styled-components/native"
import {Text, StyleSheet} from "react-native"
import { Card} from 'react-native-paper';

const Title = styled.Text`
    padding: 16px;
    color:red
`;




export const RestaurantInfoCard = ({restaurant = {}}) => {
    const {
        name = 'Some Restaurant',
        icon = '',
        photos = [
            'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHN8ZW58MHx8MHx8&w=1000&q=80'
        ],
        address = '100 some random street',
        isOpenNow = true,
        rating = 4,
        isClosedTemporarily
    } = restaurant;

    return <Card elevation={5} style={styles.card}>
        <Card.Cover key={name} source={{ uri: photos[0] }} style={styles.photo}/>
        <Title>{name}</Title>
    </Card>;
};

const styles = StyleSheet.create({
    card: {
        backgroundColor:"white"
    },
    photo: {
        padding: 20,
        backgroundColor: "white"
    },
    title: {
        padding:16
    }
});

