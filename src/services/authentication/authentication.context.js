import React, {useState, createContext} from "react"
import {LoginRequest, NewAccountRequest, StateChanged, Logout} from "./authentication.service"
import {errors} from "./authenthication.errors";

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({children}) => {
    const [isLoading, setIsLoading] = useState(false);
    const [user, setUser] = useState(null);
    const [error, setError] = useState([]);

    StateChanged((usr) => {
       if(usr) {
           setUser(usr);
           setIsLoading(false);
       } else {
           setIsLoading(false)
       }
    });

    const onLogin = (email, password) => {
        setIsLoading(true);
        LoginRequest(email, password).then((user) => {
            setUser(user);
            setIsLoading(false);
        }).catch((e) => {
            setIsLoading(false);
            const message = errors[Object.keys(errors).map((key) => {
                if (e.toString().search(key) > 0) return key
            }).filter(Boolean)];
            setError(message);
        })
    };

    const onRegister = (email, password, repeatedPassword) => {
          if(password !== repeatedPassword) {
              setError("Passwords do not match");
              return;
          }

        NewAccountRequest(email, password).then((user) => {
            setUser(user);
            setIsLoading(false);
        }).catch((e) => {
            setIsLoading(false);
            const message = errors[Object.keys(errors).map((key) => {
                if (e.toString().search(key) > 0) return key
            }).filter(Boolean)];
            setError(message);
        })
    };

    const onLogout = () => {
        setUser(null);
        Logout();
    };

    return (
        <AuthenticationContext.Provider
            value={{
                isAuthenticated: !!user,
                user,
                isLoading,
                error,
                onLogin,
                onRegister,
                onLogout
            }}
        >
            {children}
        </AuthenticationContext.Provider>
    )
};



