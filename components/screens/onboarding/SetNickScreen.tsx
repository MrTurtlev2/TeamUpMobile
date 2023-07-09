import React, {useState} from 'react';
import styled from '@emotion/native/dist/emotion-native.cjs';
import {useAppDispatch} from "../../../state/hooks";
import OnboardLayout from "../../common/OnboardLayout";
import CustomInput from "../../common/CustomInput";
import CustomButton from "../../common/CustomButton";
import {setNickRedux} from "../../../state/authorization/UserRegisterSlice";
import {OnboardRoutes} from "../../../constants/routeName";
import {useNavigation} from "@react-navigation/native";
import {NavigationInterface} from "../../../constants/interfaces";

const ButtonsWrapper = styled.View`
  height: 100%;
  justify-content: center;
`;

const SetNickScreen = () => {
    const [nick, setNick] = useState('');
    const {navigate} = useNavigation<NavigationInterface>();
    const dispatch = useAppDispatch();
    const isFormValid = nick !== ''
    const onSubmit = () => {
        if (nick) {
            dispatch(setNickRedux(nick))
            navigate(OnboardRoutes.INITIAL_SETUP)
        }
    };

    return (
        <OnboardLayout>
            <ButtonsWrapper>
                <CustomInput value={nick} onChangeText={text => setNick(text)} labelText="Nick"/>
                <CustomButton onPress={() => onSubmit()} text={'Ustawienia profilu'} style={{marginTop: 40}}
                              disabled={!isFormValid}/>
            </ButtonsWrapper>
        </OnboardLayout>
    );
};
export default SetNickScreen;
