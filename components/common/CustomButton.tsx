import React, {CSSProperties} from "react";
import {TouchableOpacity} from "react-native";
import styled from "@emotion/native";
import colors from "../../constants/colors";

interface CustomButtonInterface {
    onPress: () => void
    text: string
    revert?: boolean
    style?: CSSProperties
}

const ButtonContent = styled.View<{ revert?: boolean }>`
  background-color: ${p => p.revert ? colors.softGreen : colors.blue};
  border-radius: 41px;
  padding: 18px 50px;
  align-self: flex-start;
  width: 250px;
  align-items: center;
`

const ButtonText = styled.Text<{ revert?: boolean }>`
  font-size: 18px;
  color: ${p => p.revert ? colors.black : colors.white};
`

const CustomButton = ({onPress, text, revert, style}: CustomButtonInterface) => {

    return (
        // @ts-ignore
        <TouchableOpacity style={style} onPress={onPress}>
            <ButtonContent revert={revert}>
                <ButtonText revert={revert}>
                    {text}
                </ButtonText>
            </ButtonContent>
        </TouchableOpacity>
    )
}
export default CustomButton