import React from 'react';
import styled from '@emotion/native';
import {useNavigation} from '@react-navigation/native';
import {Dimensions} from 'react-native';
import {NavigationInterface} from '../constants/interfaces';
import colors from '../constants/colors';
import {Routes} from '../constants/routeName';
import AsyncStorage from "@react-native-async-storage/async-storage";

const DrawerWrapper = styled.View`
  flex: 1;
  padding: 60px 0 0 0;
  height: ${Dimensions.get('window').height - 160 + 'px'};
`;

const ItemWrapper = styled.TouchableHighlight`
  padding: 15px 30px;
`;
const ItemText = styled.Text`
  color: #fff;
  font-size: 17px;
`;

const DrawerContent = ({props, navigation}: any) => {
    const {navigate} = useNavigation<NavigationInterface>();

    const DrawerItem = ({onPress, text}: any) => {
        return (
            <ItemWrapper onPress={onPress} underlayColor={colors.lightBrown}>
                <ItemText>{text}</ItemText>
            </ItemWrapper>
        );
    };

    return (
        <DrawerWrapper>
            <DrawerItem text="ustawienia" onPress={() => navigate(Routes.HOME)}/>
            <DrawerItem text="wyczyść klucze" onPress={() => AsyncStorage.clear()}/>
        </DrawerWrapper>
    );
};
export default DrawerContent;
