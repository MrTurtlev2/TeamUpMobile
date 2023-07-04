import {CSSProperties} from "react";

export interface NavigationInterface {
    navigate: (navigator: string, screen?: { screen: string }) => void;
}

export interface CustomInputInterface {
    onChangeText: (text: string) => void;
    value: string;
    labelText?: string;
    isError?: boolean;
    style?: CSSProperties
    secureTextEntry?: boolean
}

export interface CustomButtonInterface {
    onPress: () => void
    text: string
    revert?: boolean
    style?: CSSProperties
}