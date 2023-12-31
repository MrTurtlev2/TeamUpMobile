import React, {useEffect} from 'react';
import HomeScreen from '../components/screens/HomeScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TabBar from './TabBar';
import {OnboardRoutes, Routes} from '../constants/routeName';
import {useAppDispatch, useAppSelector} from '../state/hooks';
import LoginOrSignUpScreen from '../components/screens/LoginOrSignUpScreen';
import {createStackNavigator} from '@react-navigation/stack';
import LoadingModal from "../components/common/LoadingModal";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {loginUser} from "../state/authorization/UserLoginSlice";
import InitialSetupScreen from "../components/screens/onboarding/InitialSetupScreen";
import LoginScreen from "../components/screens/onboarding/LoginScreen";
import RegisterScreen from "../components/screens/onboarding/RegisterScreen";
import SetGamesScreen from "../components/screens/onboarding/SetGamesScreen";
import SetNickScreen from "../components/screens/onboarding/SetNickScreen";
import FriendsScreen from "../components/screens/FriendsScreen";
import SelectedPersonScreen from "../components/screens/SelectedPersonScreen";

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
            <Stack.Screen
                name={OnboardRoutes.INITIAL_SETUP}
                options={() => ({
                    headerShown: false,
                    presentation: 'modal',
                })}>
                {() => <InitialSetupScreen/>}
            </Stack.Screen>
            <Stack.Screen
                name={OnboardRoutes.SET_GAMES}
                options={() => ({
                    headerShown: false,
                    presentation: 'modal',
                })}>
                {() => <SetGamesScreen/>}
            </Stack.Screen>
            <Stack.Screen
                name={OnboardRoutes.SET_NICK}
                options={() => ({
                    headerShown: false,
                    presentation: 'modal',
                })}>
                {() => <SetNickScreen/>}
            </Stack.Screen>
        </Stack.Navigator>
    );
};

const MainNavigator = ({navigation}: any) => {
    const {isLoggedIn, isAuthLoading} = useAppSelector(state => state.ReduxAuth);
    const {isRegistered, isRegistrationLoading} = useAppSelector(state => state.ReduxRegister);
    const {isRecommendedPeopleLoading} = useAppSelector(state => state.ReduxRecommendedPeople);
    const {isFriendListLoading} = useAppSelector(state => state.ReduxFriendsList);
    const Tab = createBottomTabNavigator();
    const dispatch = useAppDispatch()
    const getUserAuthData = async () => {
        const userData = await AsyncStorage.getItem('userData');
        if (userData) {
            dispatch(loginUser(JSON.parse(userData)));
        }
    };

    useEffect(() => {
        getUserAuthData().catch((e) => console.log(e));
    }, []);


    return (
        <>
            {(isAuthLoading || isRegistrationLoading || isRecommendedPeopleLoading || isFriendListLoading) &&
                <LoadingModal/>}
            {(isLoggedIn || isRegistered) ? (
                <Tab.Navigator
                    backBehavior="history"
                    initialRouteName={Routes.HOME}
                    screenOptions={{
                        headerShown: false,
                    }}
                    tabBar={props => <TabBar {...props} />}>
                    <Tab.Screen name="Home" component={HomeScreen}/>
                    <Tab.Screen name={Routes.FRIENDS} component={FriendsScreen}/>
                    <Tab.Screen name={Routes.PERSON_DETAILS} component={SelectedPersonScreen}/>
                </Tab.Navigator>
            ) : (
                <OnboardStackNavigator/>
            )}
        </>
    );
};
export default MainNavigator;
