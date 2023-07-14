import React from 'react';
import styled from '@emotion/native/dist/emotion-native.cjs';
import {useAppDispatch} from "../../state/hooks";
import OnboardLayout from "../common/OnboardLayout";
import {useNavigation} from "@react-navigation/native";
import {Routes} from "../../constants/routeName";
import {NavigationInterface} from "../../constants/interfaces";
import {addToFriendsListAsync, removeFriendAsync} from "../../service/friendsService";
import {Dimensions, Image, Text} from "react-native";
import fonts from "../../constants/fonts";
import colors from "../../constants/colors";

const Content = styled.View`
  height: 100%;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  width: ${Dimensions.get('screen').width + 'px'};
`;
const UserNameWrapper = styled.View`
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 0 60px;
`
const UserName = styled.Text`
  font-family: ${fonts.bold};
  font-size: 28px;
`
const GameListWrapper = styled.View`
  padding: 30px 30px 10px 30px;
  flex: 1;
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
`
const GameBox = styled.View`
  width: 100px;
  height: 100px;
  padding: 20px 0;
  background-color: ${colors.softGreen};
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  margin-right: 5px;
`
const AddFriendButton = styled.TouchableOpacity`
  position: absolute;
  right: 0;
  top: -10px;
  z-index: 5;
`

const SelectedPersonScreen = ({route, navigation}: any) => {
    const {email, username, id, gamesList, isFriend} = route.params;
    const {navigate} = useNavigation<NavigationInterface>()
    const dispatch = useAppDispatch();


    const handleAddingFriend = () => {
        addToFriendsListAsync([id]).then((res: any) => {
            if (res.status === 200) navigate(Routes.HOME)
        })
    };
    const handleRemovingFriend = () => {
        removeFriendAsync(id).then((res: any) => {
            if (res.status === 200) navigate(Routes.FRIENDS)
        })
    };


    return (
        <OnboardLayout hideLogo goBack={() => isFriend ? navigate(Routes.FRIENDS) : navigate(Routes.HOME)}>
            <Content>
                <UserNameWrapper>
                    <UserName>{username}</UserName>
                    {isFriend ? (
                        <AddFriendButton onPress={() => handleRemovingFriend()}>
                            <Image source={require('../../assets/png/removeFriend.png')}/>
                        </AddFriendButton>
                    ) : (
                        <AddFriendButton onPress={() => handleAddingFriend()}>
                            <Image source={require('../../assets/png/addFriend.png')}/>
                        </AddFriendButton>
                    )}
                </UserNameWrapper>
                <GameListWrapper>
                    {gamesList.map((item: any, index: number) => (
                        <GameBox key={index}>
                            <Text>{item.name}</Text>
                        </GameBox>
                    ))}
                </GameListWrapper>
            </Content>
        </OnboardLayout>
    );
};
export default SelectedPersonScreen;
