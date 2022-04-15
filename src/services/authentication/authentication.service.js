import {getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, signOut} from "@firebase/auth";

export const LoginRequest = (email, password) => {
    const auth = getAuth();

    return signInWithEmailAndPassword(auth, email, password);
};

export const NewAccountRequest = (email, password) => {
    const auth = getAuth();

    return createUserWithEmailAndPassword(auth, email, password);
};

export const StateChanged = (user) => {
    const auth = getAuth();

    return onAuthStateChanged(auth, user);
};

export const Logout = () => {
    const auth = getAuth();

    return signOut(auth);
};


