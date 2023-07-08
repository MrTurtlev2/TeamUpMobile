import React from "react";
import {TimeBarInterface} from "../../constants/interfaces";
import styled from "@emotion/native";
import ClockSvg from "../../assets/svg/ClockSvg";
import fonts from "../../constants/fonts";
import colors from "../../constants/colors";

const BarWrapper = styled.View`
  flex-direction: row;
  align-items: center;
`
const Hours = styled.Text`
  color: ${colors.white};
  font-family: ${fonts.semi};
  margin-left: 6px;
`

const TimeBar = ({timeFrom, timeTo}: TimeBarInterface) => {

    return (
        <BarWrapper>
            <ClockSvg/>
            <Hours>
                {`${timeFrom}-${timeTo}`}
            </Hours>
        </BarWrapper>
    )
}
export default TimeBar