import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet, Text, View} from "react-native";
import {Searchbar} from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";


export const RestaurantsScreen = () => (
    <SafeAreaView style={styles.container}>
        <View style={styles.searchBox}>
            <Searchbar/>
        </View>
        <View style={styles.itemList}>
            <RestaurantInfoCard />
        </View>
    </SafeAreaView>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight
    },
    searchBox: {
        backgroundColor: 'white',
        padding: 16
    },
    itemList: {
        flex: 1,
        backgroundColor: 'blue',
        padding: 16
    },
    text: {
        fontSize: 15
    }
});
