import {StatusBar as ExpoStatusBar} from "expo-status-bar";
import React, {useState, useEffect} from "react";
import {ThemeProvider} from "styled-components/native";
import {
    useFonts as useOswald,
    Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import {useFonts as useLato, Lato_400Regular} from "@expo-google-fonts/lato";

import {theme} from "./src/infrastructure/theme";
import {AuthenticationContextProvider} from "./src/services/authentication/authentication.context";
import {Navigation} from "./src/infrastructure/navigation";
import * as firebase from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCpEO5XU-Cz_HX0mcF9wUOR6youGkGxHn0",
    authDomain: "mealstogo-ee4ac.firebaseapp.com",
    projectId: "mealstogo-ee4ac",
    storageBucket: "mealstogo-ee4ac.appspot.com",
    messagingSenderId: "566392679156",
    appId: "1:566392679156:web:cd4c77900e018787b9cca1"
};

firebase.initializeApp(firebaseConfig);

export default function App() {

    const [oswaldLoaded] = useOswald({
        Oswald_400Regular,
    });

    const [latoLoaded] = useLato({
        Lato_400Regular,
    });

    if (!oswaldLoaded || !latoLoaded) {
        return null;
    }


    return (
        <>
            <ThemeProvider theme={theme}>
                <AuthenticationContextProvider>
                    <Navigation/>
                </AuthenticationContextProvider>
            </ThemeProvider>
            <ExpoStatusBar style="auto"/>
        </>
    );
}
