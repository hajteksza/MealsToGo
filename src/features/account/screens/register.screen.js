import React, {useState, useContext} from "react";

import {ActivityIndicator, Colors} from "react-native-paper"

import {
    AccountBackground,
    AccountCover,
    AccountContainer,
    AuthButton,
    AuthInput, Title,
} from "../components/account.styles";
import {Text} from "../../../components/typography/text.component";
import {Spacer} from "../../../components/spacer/spacer.component";
import {AuthenticationContext} from "../../../services/authentication/authentication.context";


export const RegisterScreen = ({navigation}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatedPassword, setRepeatedPassword] = useState("");
    const {onRegister, isLoading, error} = useContext(AuthenticationContext);
    return (
        <AccountBackground>
            <AccountCover/>
            <Title>Meals To Go</Title>
            <AccountContainer>
                <AuthInput
                    label="E-mail"
                    value={email}
                    textContentType="emailAddress"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    onChangeText={(u) => setEmail(u)}
                />
                <Spacer size="large">
                    <AuthInput
                        label="Password"
                        value={password}
                        textContentType="password"
                        secureTextEntry
                        autoCapitalize="none"
                        onChangeText={(p) => setPassword(p)}
                    />
                </Spacer>
                <Spacer size="large">
                    <AuthInput
                        label="Repeat password"
                        value={repeatedPassword}
                        textContentType="repeated_password"
                        secureTextEntry
                        autoCapitalize="none"
                        onChangeText={(p) => setRepeatedPassword(p)}
                    />
                </Spacer>
                {error && (
                    <Spacer size="large">
                        <Text variant="error">{error}</Text>
                    </Spacer>
                )}
                <Spacer size="large">
                    {!isLoading ? (<AuthButton
                        mode="contained"
                        onPress={() => onRegister(email, password, repeatedPassword)}
                    >
                        Register
                    </AuthButton>) : (
                        <ActivityIndicator animating={true} color={Colors.blue300}/>
                    )}
                </Spacer>
            </AccountContainer>
            <Spacer size="large">
                <AuthButton mode="contained" onPress={() => navigation.goBack()}>
                    Back
                </AuthButton>
            </Spacer>
        </AccountBackground>
    );
};