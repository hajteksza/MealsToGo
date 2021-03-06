import React, {useState} from "react"
import {RestaurantInfoCard} from "../components/restaurant-info-card.component";
import {SafeArea} from "../../../components/utility/safe-area.component";
import {ScrollView} from "react-native";
import {List} from 'react-native-paper';


export const RestaurantDetailScreen = ({route}) => {
    const {restaurant} = route.params;

    const [breakfastExpanded, setBreakfastExpanded] = useState(false);
    const [lunchExpanded, setLunchExpanded] = useState(false);
    const [dinnerExpanded, setDinnerExpanded] = useState(false);
    const [drinksExpanded, setDrinksExpanded] = useState(false);

    const handlePressBreakfast = () => setBreakfastExpanded(!breakfastExpanded);
    const handlePressLunch = () => setLunchExpanded(!lunchExpanded);
    const handlePressDinner = () => setDinnerExpanded(!dinnerExpanded);
    const handlePressDrinks = () => setDrinksExpanded(!drinksExpanded);


    return (
        <SafeArea>
            <RestaurantInfoCard restaurant={restaurant}/>
            <ScrollView>
                <List.Section>
                    <List.Accordion
                        title="Breakfast"
                        left={props => <List.Icon {...props} icon="bread-slice"/>}
                        expanded={breakfastExpanded}
                        onPress={handlePressBreakfast}
                    >
                        <List.Item title="Scrambled Eggs"/>
                        <List.Item title="Sausages"/>
                        <List.Item title="Classic Breakfast"/>
                    </List.Accordion>

                    <List.Accordion
                        title="Lunch"
                        left={props => <List.Icon {...props} icon="hamburger"/>}
                        expanded={lunchExpanded}
                        onPress={handlePressLunch}
                    >
                        <List.Item title="Pepperoni Burger"/>
                        <List.Item title="Rostbeaf steak"/>
                        <List.Item title="Ceasar Salad"/>
                    </List.Accordion>
                    <List.Accordion
                        title="Dinner"
                        left={props => <List.Icon {...props} icon="food-variant"/>}
                        expanded={dinnerExpanded}
                        onPress={handlePressDinner}
                    >
                        <List.Item title="Spaghetti Bolognese"/>
                        <List.Item title="Veal Cutlet with Chicken Mushroom Rotini"/>
                        <List.Item title="Steak Frites"/>
                    </List.Accordion>
                    <List.Accordion
                        title="Drinks"
                        left={props => <List.Icon {...props} icon="cup"/>}
                        expanded={drinksExpanded}
                        onPress={handlePressDrinks}
                    >
                        <List.Item title="Coffee"/>
                        <List.Item title="Tea"/>
                        <List.Item title="Modelo"/>
                        <List.Item title="Coke"/>
                        <List.Item title="Fanta"/>
                    </List.Accordion>
                </List.Section>
            </ScrollView>
        </SafeArea>
    )
}