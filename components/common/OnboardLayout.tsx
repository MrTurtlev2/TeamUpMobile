import React from 'react';
import {Dimensions, ImageBackground, ScrollView, View} from 'react-native';
import styled from '@emotion/native';
import Logo from '../../assets/icons/Logo';
import colors from '../../constants/colors';
import CurvedSvg from '../../assets/CurvedBg';
import BackArrowSvg from "../../assets/svg/BackArrowSvg";

const ScreenHeight = Dimensions.get('screen').height;
const ScreenWidth = Dimensions.get('screen').width;

const TopBlock = styled.View`
  background-color: ${colors.blue};
  width: 100%;
  height: ${ScreenHeight * 0.3 + 'px'};
`;
const BgImageWrapper = styled.View`
  position: absolute;
  bottom: 0;
  left: 0;
`;
const StyledBgImage = styled(ImageBackground)`
  flex: 1;
`;
const BottomBlock = styled.View`
  background-color: ${colors.blue};
  width: 100%;
  height: ${ScreenHeight * 0.7 + 'px'};
`;
const BottomContent = styled.View`
  background-color: ${colors.white};
  width: ${ScreenWidth + 'px'};
  height: ${ScreenHeight * 0.65 + 'px'};
  position: absolute;
  z-index: 2;
  bottom: 0;
  align-items: center;
  padding-top: 20px;
`;
const BottomSubContent = styled.View`
  width: 100%;
  align-items: center;
  height: ${ScreenHeight * 0.65 - 140 + 'px'};
`;
const BackArrowWrap = styled.TouchableOpacity`
  position: absolute;
  top: 60px;
  left: 30px;
  z-index: 2;
`;

const OnboardLayout = ({children, hideLogo, goBack}: any) => {
    return (
        <ScrollView style={{flex: 1}}>
            <View style={{flex: 1}}>
                {hideLogo && (
                    <BackArrowWrap onPress={goBack}>
                        <BackArrowSvg/>
                    </BackArrowWrap>
                )}
                <TopBlock>
                    <StyledBgImage source={require('../../assets/png/onboardBg.png')} resizeMode="cover"/>
                </TopBlock>
                <BottomBlock>
                    <BgImageWrapper>
                        <BottomContent>
                            {!hideLogo && <Logo/>}
                            <BottomSubContent>{children}</BottomSubContent>
                        </BottomContent>
                        <CurvedSvg/>
                    </BgImageWrapper>
                </BottomBlock>
            </View>
        </ScrollView>
    );
};
export default OnboardLayout;
