import React, {useEffect, useRef} from 'react';
import styled from '@emotion/native';
import colors from '../../constants/colors';
import {Animated, TouchableWithoutFeedback} from 'react-native';
import CheckMarkSvg from '../../assets/svg/CheckMarkSvg';
import {CustomCheckboxInterface} from '../../constants/interfaces';
import fonts from '../../constants/fonts';

const MainWrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;

const CheckboxWrapper = styled.View`
  width: 25px;
  height: 25px;
  background-color: ${colors.blue};
  border-radius: 6px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin-right: 10px;
`;
const AnimatedWrapper = styled(Animated.View)``;

const LabelWrapper = styled.View``;
const LabelText = styled.Text`
  font-size: 14px;
  font-family: ${fonts.bold};
`;

const CustomCheckbox = ({state, onPress, label, style}: CustomCheckboxInterface) => {
    const fadeAnim = useRef(new Animated.Value(state ? 0 : 1)).current;

    useEffect(() => {
        Animated.timing(fadeAnim, {
            toValue: state ? 1 : 0,
            duration: 300,
            useNativeDriver: true,
        }).start();
    }, [state]);
    return (
        <MainWrapper style={style}>
            <TouchableWithoutFeedback onPress={onPress}>
                <CheckboxWrapper>
                    <AnimatedWrapper
                        style={{
                            opacity: fadeAnim,
                        }}>
                        <CheckMarkSvg/>
                    </AnimatedWrapper>
                </CheckboxWrapper>
            </TouchableWithoutFeedback>
            <LabelWrapper>
                <LabelText>{label}</LabelText>
            </LabelWrapper>
        </MainWrapper>
    );
};
export default CustomCheckbox;
