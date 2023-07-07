import React from "react";
import styled from "@emotion/native";
import {NativeModules, Platform} from "react-native";
import colors from "../../constants/colors";

const {StatusBarManager} = NativeModules;

const Wrapper = styled.View<{ barHeight: number }>`
  flex: 1;
  padding-top: ${p => p.barHeight + 'px'};
  background-color: ${colors.white};
`

const Layout = ({children}: any) => {
    const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBarManager.HEIGHT;


    return (
        <Wrapper barHeight={STATUSBAR_HEIGHT}>
            {children}
        </Wrapper>
    )
}
export default Layout