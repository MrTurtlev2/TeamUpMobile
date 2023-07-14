import React from 'react';
import styled from '@emotion/native';
import {useNavigation} from '@react-navigation/native';
import {Dimensions, Text} from 'react-native';
import {NavigationInterface} from '../constants/interfaces';
import colors from '../constants/colors';
import AsyncStorage from "@react-native-async-storage/async-storage";
import {useAppDispatch, useAppSelector} from "../state/hooks";
import fonts from "../constants/fonts";
import ProfileSvg from "../assets/svg/navigation/ProfileSvg";
import * as Clipboard from 'expo-clipboard';
import {deleteAccountAsync} from "../service/userService";
import {setSignedOutStatus} from "../state/authorization/UserLoginSlice";

const DrawerWrapper = styled.View`
  flex: 1;
  padding: 60px 0 0 0;
  height: ${Dimensions.get('window').height - 160 + 'px'};
  align-items: center;
`;
const UserNameWrapper = styled.TouchableOpacity`
  align-items: center;
`
const UserName = styled.Text`
  margin-top: 10px;
  font-size: 25px;
  color: ${colors.black};
  font-family: ${fonts.bold};
`

const ItemWrapper = styled.TouchableOpacity`
  padding: 15px 30px;
`;
const ItemText = styled.Text`
  font-size: 17px;
`;
const DrawerCentral = styled.View`
  flex: 1;
  justify-content: center;

`

const DrawerContent = ({props, navigation}: any) => {
    const {userData} = useAppSelector(state => state.ReduxUserData)
    const {navigate} = useNavigation<NavigationInterface>();
    const dispatch = useAppDispatch()


    const handleDeletingAccount = () => {
        deleteAccountAsync().then(res => {
            if (res.status === 200) {
                AsyncStorage.clear()
                dispatch(setSignedOutStatus(false))
            }
        })
    }

    const DrawerItem = ({onPress, text}: any) => {
        return (
            <ItemWrapper onPress={onPress}>
                <ItemText>{text}</ItemText>
            </ItemWrapper>
        );
    };

    return (
        <DrawerWrapper>
            <ProfileSvg color={colors.black} width={100} height={100}/>
            <UserNameWrapper onPress={() => Clipboard.setStringAsync(userData.id)}>
                <UserName>{userData.username}</UserName>
                <Text>Kopiuj link do profilu</Text>
            </UserNameWrapper>
            <DrawerCentral>
                <DrawerItem text="wyczyść klucze" onPress={() => AsyncStorage.clear()}/>
                <DrawerItem text="ustawienia" onPress={() => null}/>
                <DrawerItem text="usuń konto" onPress={() => handleDeletingAccount()}/>
            </DrawerCentral>
        </DrawerWrapper>
    );
};
export default DrawerContent;
