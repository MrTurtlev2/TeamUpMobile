import React from "react";
import HomeScreen from "../components/screens/HomeScreen";
import ProfileScreen from "../components/screens/ProfileScreen";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import TabBar from "./TabBar";
import {Routes} from "../constants/routeName";

const MainNavigator = ({navigation}: any) => {
    const Tab = createBottomTabNavigator();
    return (

        <Tab.Navigator
            backBehavior="history"
            initialRouteName={Routes.HOME}
            screenOptions={{
                headerShown: false
            }}
            tabBar={props => <TabBar {...props} />}>

            <Tab.Screen name="Home" component={HomeScreen}/>
            <Tab.Screen name="Settings" component={ProfileScreen}/>
        </Tab.Navigator>
    )
}
export default MainNavigator