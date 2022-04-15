import React, {useContext, useState} from "react"
import {RestaurantsContext} from "../../../services/restaurants/restaurants.context";
import {FavouritesContext} from "../../../services/favourites/favourites.context";
import {SafeArea} from "../../../components/utility/safe-area.component";
import { TouchableOpacity} from "react-native";
import {Spacer} from "../../../components/spacer/spacer.component";
import {RestaurantInfoCard} from "../../restaurants/components/restaurant-info-card.component";
import styled from "styled-components/native/dist/styled-components.native.esm";
import {Text } from "../../../components/typography/text.component"
import {RestaurantList, LoadingContainer, Loading} from "../../restaurants/components/restaurant-list.styles";

const NoFavouritesArea = styled(SafeArea)`
    align-items:center;
    justify-content: center;
`;

export const FavouritesScreen = ({navigation}) => {
    const {isLoading} = useContext(RestaurantsContext);
    const {favourites } = useContext(FavouritesContext);


    return favourites.length ? (
        <SafeArea>
            {isLoading && (
                <LoadingContainer>
                    <Loading size={50} animating={true}/>
                </LoadingContainer>
            )}
            <RestaurantList
                data={favourites}
                renderItem={({item}) => (
                    <TouchableOpacity onPress={() => navigation.navigate("RestaurantDetail", {
                        restaurant: item,
                    })
                    }>
                        <Spacer position="bottom" size="large">
                            <RestaurantInfoCard restaurant={item}/>
                        </Spacer>
                    </TouchableOpacity>
                )}
                keyExtractor={(item) => item.name}
            />
        </SafeArea>
    ) : (
        <NoFavouritesArea>
        <Text>No favourites yet</Text>
        </NoFavouritesArea>
    )
}