import React from 'react';
import HomeScreen from '../components/screens/HomeScreen';
import ProfileScreen from '../components/screens/ProfileScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TabBar from './TabBar';
import {OnboardRoutes, Routes} from '../constants/routeName';
import {useAppSelector} from '../state/hooks';
import LoginOrSignUpScreen from '../components/screens/LoginOrSignUpScreen';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../components/screens/LoginScreen';
import RegisterScreen from '../components/screens/RegisterScreen';
import LoadingModal from "../components/common/LoadingModal";

const OnboardStackNavigator = () => {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator initialRouteName={OnboardRoutes.LOGIN_OR_SIGNUP} screenOptions={{headerShown: false}}>
            <Stack.Screen
                name={OnboardRoutes.LOGIN_OR_SIGNUP}
                options={() => ({
                    headerShown: false,
                    presentation: 'modal',
                })}>
                {() => <LoginOrSignUpScreen/>}
            </Stack.Screen>
            <Stack.Screen
                name={OnboardRoutes.LOGIN}
                options={() => ({
                    headerShown: false,
                    presentation: 'modal',
                })}>
                {() => <LoginScreen/>}
            </Stack.Screen>
            <Stack.Screen
                name={OnboardRoutes.REGISTER}
                options={() => ({
                    headerShown: false,
                    presentation: 'modal',
                })}>
                {() => <RegisterScreen/>}
            </Stack.Screen>
        </Stack.Navigator>
    );
};

const MainNavigator = ({navigation}: any) => {
    const {isLoggedIn, isAuthLoading} = useAppSelector(state => state.ReduxAuth);
    const Tab = createBottomTabNavigator();
    return (
        <>
            {isAuthLoading && <LoadingModal/>}
            {isLoggedIn ? (
                <Tab.Navigator
                    backBehavior="history"
                    initialRouteName={Routes.HOME}
                    screenOptions={{
                        headerShown: false,
                    }}
                    tabBar={props => <TabBar {...props} />}>
                    <Tab.Screen name="Home" component={HomeScreen}/>
                    <Tab.Screen name="Settings" component={ProfileScreen}/>
                </Tab.Navigator>
            ) : (
                <OnboardStackNavigator/>
            )}
        </>
    );
};
export default MainNavigator;
