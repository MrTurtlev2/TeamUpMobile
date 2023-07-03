import DrawerContent from "./DrawerContent";
import React from "react";
import {createDrawerNavigator, DrawerContentScrollView} from '@react-navigation/drawer';
import styled from "@emotion/native";
import {Dimensions, Text} from "react-native";
import colors from "../constants/colors";
import {TAB_NAVIGATOR} from "../constants/routeName";
import TabNavigator from "./TabNavigator";
// import CloseSvg from "../../../assets/svg/navigation/CloseSvg";

const DrawerScrollView = styled(DrawerContentScrollView)`
  height: ${Dimensions.get('window').height + 'px'};
  background-color: ${colors.mainBrown}
`;
const DrawerCloseButton = styled.TouchableOpacity`
  position: absolute;
  bottom: 0;
  right: 30px;
  padding: 30px;
`;

function CustomDrawerContent(props: any) {
    return (
        <>
            <DrawerScrollView {...props}>
                <DrawerContent {...props} />
            </DrawerScrollView>
            <DrawerCloseButton onPress={() => props.navigation.closeDrawer()}>
                <Text>Zamknij</Text>
            </DrawerCloseButton>
        </>
    );
}


const DrawerTabNavigation = () => {
    const Drawer = createDrawerNavigator();

    return (
        <Drawer.Navigator
            drawerContent={({navigation}) => <CustomDrawerContent navigation={navigation}/>}
            backBehavior="history"
            screenOptions={{
                drawerPosition: 'right',
                headerShown: false,
            }}
        >
            <Drawer.Screen
                name={TAB_NAVIGATOR}
            >
                {(props) => <TabNavigator {...props} navigation={props.navigation}/>}
            </Drawer.Screen>

        </Drawer.Navigator>
    );
}
export default DrawerTabNavigation;
