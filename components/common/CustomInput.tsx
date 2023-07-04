import React, {useRef} from 'react';
import styled from '@emotion/native';
import colors from '../../constants/colors';
import {Animated, Keyboard, TouchableWithoutFeedback} from 'react-native';
import {CustomInputInterface} from '../../constants/interfaces';
import fonts from "../../constants/fonts";

const CustomInputWrapper = styled.View`
  width: 250px;
`;
const LabelWrapper = styled(Animated.View)`
  position: absolute;
  left: 15px;
  top: 16px;
  background-color: ${colors.softGrey};
  z-index: 2;
  padding: 0 5px;
`;
const Label = styled(Animated.Text)`
  font-family: ${fonts.bold};
`;

const StyledTextInput = styled.TextInput<{ isError: boolean }>`
  border: 2px solid ${p => (p.isError ? 'red' : colors.black)};
  border-radius: 12px;
  padding: 10px 15px 10px 24px;
  font-weight: 600;
`;

const CustomInput = ({onChangeText, value, labelText, isError, secureTextEntry, style}: CustomInputInterface) => {
    const focusAnim = useRef(new Animated.Value(-1)).current;
    const animatedTextScale = useRef(new Animated.Value(1.1)).current;
    const handleInputFocus = () => {
        Animated.parallel([
            Animated.timing(animatedTextScale, {
                toValue: 0.9,
                duration: 100,
                useNativeDriver: true,
            }),
            Animated.timing(focusAnim, {
                toValue: -27,
                duration: 150,
                useNativeDriver: true,
            }),
        ]).start();
    };
    const handleInputBlur = () => {
        if (value === '') {
            Animated.parallel([
                Animated.timing(animatedTextScale, {
                    toValue: 1,
                    duration: 100,
                    useNativeDriver: true,
                }),
                Animated.timing(focusAnim, {
                    toValue: 0,
                    duration: 150,
                    useNativeDriver: true,
                }),
            ]).start();
            Keyboard.dismiss();
        }
    };

    return (
        // @ts-ignore
        <CustomInputWrapper style={style}>
            {labelText && (
                <TouchableWithoutFeedback onPress={() => handleInputFocus()}>
                    <LabelWrapper style={{transform: [{translateY: focusAnim}]}}>
                        <Label style={{transform: [{scale: animatedTextScale}]}}>{labelText}</Label>
                    </LabelWrapper>
                </TouchableWithoutFeedback>
            )}
            <StyledTextInput
                onChangeText={onChangeText}
                value={value}
                underlineColorAndroid={colors.transparent}
                onBlur={() => handleInputBlur()}
                onFocus={() => handleInputFocus()}
                secureTextEntry={secureTextEntry}
                // isError={isError}
                isError={false}
            />
        </CustomInputWrapper>
    );
};
export default CustomInput;
