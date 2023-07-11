import React from "react";
import {Dimensions, ImageBackground, Text} from "react-native";
import styled from "@emotion/native";
import colors from "../../constants/colors";
import fonts from "../../constants/fonts";
import TimeBar from "../persons/TimeBar";
import {ProposedPersonsInterface} from "../../constants/interfaces";
import {useNavigation} from "@react-navigation/native";
import {Routes} from "../../constants/routeName";

const GhostWrapper = styled.TouchableOpacity`
  width: ${Dimensions.get('screen').width + 'px'};
  align-items: center;
  margin-top: 60px;
`
const BarWrapper = styled.View`
  width: 80%;
  background-color: ${colors.blue};
  border-radius: 12px;
  padding: 10px 20px;

`

const BgImageWrapper = styled.View`
  position: absolute;
  top: -30px;
  right: 0;
  z-index: 3;
`;
const StyledBgImage = styled(ImageBackground)`
  flex: 1;
  width: 250px;
  height: 150px;
  opacity: 0.2;
`;
const AvatarWrapper = styled.View`
  width: 90px;
  height: 90px;
  position: absolute;
  left: -20px;
  top: -40px;
  border-radius: 60px;
`
const Avatar = styled.Image`
  width: 90px;
  height: 90px;
  border-radius: 60px;
`
const NickWrapper = styled.View`
  flex-direction: row-reverse;
  align-items: center;
`
const Nick = styled.Text`
  font-family: ${fonts.bold};
  font-size: 20px;
  color: ${colors.white};
`
const Content = styled.View`
  margin-top: 30px;
  flex-direction: row;
`
const FavouriteGames = styled.View`
  flex-direction: row;
  padding-left: 20px;
`
const GameBox = styled.View`
  width: 70px;
  padding: 20px 0;
  background-color: ${colors.softGreen};
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  margin-right: 5px;
`
const AddFriendButton = styled.View`
  width: 50px;
  height: 50px;
  border-radius: 50px;
  background-color: red;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
`

const ProposedPersonBar = ({
                               email,
                               username,
                               endHour,
                               startHour,
                               age,
                               id,
                               gamesList,
                               friendsList
                           }: ProposedPersonsInterface) => {

    const {navigate} = useNavigation()


    return (
        // @ts-ignore
        <GhostWrapper onPress={() => navigate(Routes.PERSON_DETAILS, {
            email,
            username,
            endHour,
            startHour,
            age,
            id,
            gamesList,
            friendsList
        })}>
            <BarWrapper>
                <BgImageWrapper>
                    <StyledBgImage source={require('../../assets/png/PersonBarBg.png')} resizeMode="stretch"/>
                </BgImageWrapper>

                <NickWrapper>
                    <Nick>{username}</Nick>
                </NickWrapper>
                <Content>
                    <TimeBar startHour={startHour} endHour={endHour}/>
                    <FavouriteGames>
                        {gamesList.map((item: any, index) => (
                            <GameBox key={index}>
                                <Text>{item.name}</Text>
                            </GameBox>
                        ))}
                    </FavouriteGames>
                </Content>
                <AvatarWrapper>
                    <Avatar source={require('../../assets/png/UnnownPersonAvatar.png')}/>
                </AvatarWrapper>
            </BarWrapper>
        </GhostWrapper>
    )
}
export default ProposedPersonBar