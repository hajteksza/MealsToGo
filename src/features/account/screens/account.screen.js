import React from "react";
import LottieView from "lottie-react-native"
import {Spacer} from "../../../components/spacer/spacer.component";
import {Title} from "../components/account.styles"
import {AccountCover, AccountBackground, AccountContainer, AuthButton, AnimationWrapper} from "../components/account.styles";

export const AccountScreen = ( {navigation }) => {
    return (
        <AccountBackground>
            <AccountCover/>
            <AnimationWrapper>
            <LottieView
                key="animation"
                autoPlay
                loop
                resizeMode="cover"
                source={require("../../../../assets/watermelon")}
            />
            </AnimationWrapper>
            <Title>Meals To Go</Title>
            <AccountContainer>
                <AuthButton
                    icon="lock-open-outline"
                    mode="contained"
                    onPress={() => navigation.navigate("Login")}
                >
                    Login
                </AuthButton>
                <Spacer position="top" size="large">
                    <AuthButton
                        icon="email"
                        mode="contained"
                        onPress={() => navigation.navigate("Register")}
                    >
                        Register
                    </AuthButton>
                </Spacer>
            </AccountContainer>
        </AccountBackground>
    );
};