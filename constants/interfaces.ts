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
    endHour: number,
    startHour: number,
}

export interface PersonBaseInterface {
    age: number,
    email: string,
    endHour: number,
    friendsList: object[]
    gamesList: object[]
    id: string
    startHour: number,
    username: string
    isFriend?: boolean
}

export interface ProposedPersonsInterface {
    age: number,
    email: string,
    endHour: number,
    friendsList: object[]
    gamesList: object[]
    id: string
    startHour: number,
    username: string
    isFriend?: boolean
}