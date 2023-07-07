import React from "react";
import {Dimensions, ImageBackground, Text} from "react-native";
import styled from "@emotion/native";
import colors from "../../constants/colors";
import fonts from "../../constants/fonts";
import TimeBar from "../persons/TimeBar";
import {ProposedPersonBarInterface} from "../../constants/interfaces";

const GhostWrapper = styled.View`
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
  background-color: blue;
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
  width: 60px;
  padding: 20px 0;
  background-color: ${colors.softGreen};
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  margin-right: 5px;
`

const ProposedPersonBar = ({nick, timeFrom, timeTo, games}: ProposedPersonBarInterface) => {

    return (
        <GhostWrapper>
            <BarWrapper>
                <BgImageWrapper>
                    <StyledBgImage source={require('../../assets/png/PersonBarBg.png')} resizeMode="stretch"/>
                </BgImageWrapper>
                <NickWrapper>
                    <Nick>{nick}</Nick>
                </NickWrapper>
                <Content>
                    <TimeBar timeFrom={timeFrom} timeTo={timeTo}/>
                    <FavouriteGames>
                        {games.map((game: string, index) => (
                            <GameBox key={index}>
                                <Text>{game}</Text>
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