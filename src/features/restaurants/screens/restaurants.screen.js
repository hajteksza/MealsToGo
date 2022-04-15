import React, {useContext, useState} from "react";
import {TouchableOpacity} from "react-native";
import {SafeArea} from "../../../components/utility/safe-area.component";
import {FadeInView} from "../../../components/animations/fade.animation";

import {RestaurantInfoCard} from "../components/restaurant-info-card.component";
import {Spacer} from "../../../components/spacer/spacer.component";
import {FavouritesBar} from "../../../components/favourites/favourites-bar.component";
import {RestaurantList, Loading, LoadingContainer} from "../components/restaurant-list.styles";

import {RestaurantsContext} from "../../../services/restaurants/restaurants.context";
import {FavouritesContext} from "../../../services/favourites/favourites.context";

import {Search} from "../components/search.component";

export const RestaurantsScreen = ({navigation}) => {
    const {restaurants, isLoading} = useContext(RestaurantsContext);
    const {favourites} = useContext(FavouritesContext);
    const [isToggled, setIsToggled] = useState(false);


    return (
        <SafeArea>
            <Search
                isFavouritesToggled={isToggled}
                onFavouritesToggle={() => setIsToggled(!isToggled)}
            />
            {isToggled &&
            <FavouritesBar favourites={favourites} onNavigate={navigation.navigate}/>
            }
            {isLoading && (
                <LoadingContainer>
                    <Loading size={50} animating={true}/>
                </LoadingContainer>
            )}
            <RestaurantList
                data={restaurants}
                renderItem={({item}) => (
                    <TouchableOpacity onPress={() => navigation.navigate("RestaurantDetail", {
                        restaurant: item,
                    })
                    }>
                        <Spacer position="bottom" size="large">
                            <FadeInView>
                                <RestaurantInfoCard restaurant={item}/>
                            </FadeInView>
                        </Spacer>
                    </TouchableOpacity>
                )}
                keyExtractor={(item) => item.name}
            />
        </SafeArea>
    )
};
