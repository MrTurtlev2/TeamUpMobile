import React from 'react';
import {TouchableOpacity} from 'react-native';
import styled from '@emotion/native';
import colors from '../../constants/colors';
import fonts from '../../constants/fonts';
import {CustomButtonInterface} from '../../constants/interfaces';

const ButtonContent = styled.View<{ revert?: boolean, disabled?: boolean }>`
  background-color: ${p => (p.disabled ? colors.disabled : p.revert ? colors.softGreen : colors.blue)};
  border-radius: 41px;
  padding: 18px 50px;
  align-self: flex-start;
  width: 250px;
  align-items: center;
`;

const ButtonText = styled.Text<{ revert?: boolean }>`
  font-size: 18px;
  color: ${p => (p.revert ? colors.black : colors.white)};
  font-family: ${fonts.bold};
`;

const CustomButton = ({onPress, text, revert, style, disabled}: CustomButtonInterface) => {
    return (
        // @ts-ignore
        <TouchableOpacity style={style} onPress={disabled ? null : onPress}>
            <ButtonContent revert={revert} disabled={disabled}>
                <ButtonText revert={revert}>{text}</ButtonText>
            </ButtonContent>
        </TouchableOpacity>
    );
};
export default CustomButton;
