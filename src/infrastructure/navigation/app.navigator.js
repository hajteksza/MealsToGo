import React from 'react';
import {RestaurantsScreen} from "../../features/restaurants/screens/restaurants.screen";
import {NavigationContainer} from "@react-navigation/native";
import {SafeArea} from "../../components/utility/safe-area.component";
import {Text} from "react-native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {Ionicons} from "@expo/vector-icons";

const Tab = createBottomTabNavigator();


const Settings = () => (
    <SafeArea>
        <Text>Settings</Text>
    </SafeArea>
);
const Map = () => (
    <SafeArea>
        <Text>Map</Text>
    </SafeArea>
);

const createScreenOptions = ({route}) => {
    const iconName = TAB_ICON[route.name];
    return {
        tabBarIcon: ({size, color}) => (
            <Ionicons name={iconName} size={size} color={color}/>
        )
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
                screenOptions={createScreenOptions}
                tabBarOptions={{
                    inactiveTintColor: "gray",
                    activeTintColor: "tomato",
                }}
            >
                <Tab.Screen name="Restaurants" component={RestaurantsScreen}/>
                <Tab.Screen name="Map" component={Map}/>
                <Tab.Screen name="Settings" component={Settings}/>
            </Tab.Navigator>
        </NavigationContainer>
    )
}