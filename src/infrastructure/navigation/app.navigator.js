import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {SafeArea} from "../../components/utility/safe-area.component";
import {Text} from "react-native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {Ionicons} from "@expo/vector-icons";
import {RestaurantsNavigator} from "./restaurants.navigator";
import {MapScreen} from "../../features/map/screens/map.screen";

const Tab = createBottomTabNavigator();


const Settings = () => (
    <SafeArea>
        <Text>Settings</Text>
    </SafeArea>
);

const createScreenOptions = ({route}) => {
    const iconName = TAB_ICON[route.name];
    return {
        tabBarIcon: ({size, color}) => (
            <Ionicons name={iconName} size={size} color={color}/>
        ),
        headerShown: false,
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray"
    };
};


const TAB_ICON = {
    Restaurants: "md-restaurant",
    Map: "md-map",
    Settings: "md-settings",
};

export const AppNavigator = () => {

    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={createScreenOptions}r
            >
                <Tab.Screen options={{heaaderShown: false}} name="Restaurants" component={RestaurantsNavigator}/>
                <Tab.Screen name="Map" component={MapScreen}/>
                <Tab.Screen name="Settings" component={Settings}/>
            </Tab.Navigator>
        </NavigationContainer>
    )
}


