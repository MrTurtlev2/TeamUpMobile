import {StyleProp, ViewStyle} from 'react-native';

export interface NavigationInterface {
    navigate: (navigator: string, screen?: { screen: string }) => void;
}

export interface CustomInputInterface {
    onChangeText: (text: string) => void;
    value: string;
    labelText?: string;
    isError?: boolean;
    style?: StyleProp<ViewStyle>;
    secureTextEntry?: boolean;
    keyboardType?: string;
}

export interface CustomButtonInterface {
    onPress: () => void;
    text: string;
    revert?: boolean;
    style?: StyleProp<ViewStyle>;
    disabled?: boolean
}

export interface CustomCheckboxInterface {
    state: boolean;
    onPress: () => void;
    label: string;
    style?: StyleProp<ViewStyle>;
}

export interface TimeBarInterface {
    timeFrom: string;
    timeTo: string
}

export interface ProposedPersonBarInterface extends TimeBarInterface {
    nick: string
    games: string[]
}