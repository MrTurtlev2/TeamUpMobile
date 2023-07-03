import {Animated} from 'react-native';

export interface NavigationInterface {
    navigate: (navigator: string, screen?: { screen: string }) => void;
}