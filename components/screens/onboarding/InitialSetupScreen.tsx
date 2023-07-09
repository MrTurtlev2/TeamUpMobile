import React, {useState} from 'react';
import styled from '@emotion/native/dist/emotion-native.cjs';
import {useAppDispatch} from "../../../state/hooks";
import OnboardLayout from "../../common/OnboardLayout";
import CustomInput from "../../common/CustomInput";
import CustomButton from "../../common/CustomButton";
import {setAgeRedux, setTimeFromRedux, setTimeToRedux} from "../../../state/authorization/UserRegisterSlice";
import {useNavigation} from "@react-navigation/native";
import {NavigationInterface} from "../../../constants/interfaces";
import {OnboardRoutes} from "../../../constants/routeName";
import {getAllGamesAsync} from "../../../service/gamesService";

const ButtonsWrapper = styled.View`
  height: 100%;
  justify-content: center;
`;

const InitialSetupScreen = () => {
    const [age, setAge] = useState('');
    const [timeFrom, setTimeFrom] = useState('');
    const [timeTo, setTimeTo] = useState('');

    const {navigate} = useNavigation<NavigationInterface>();
    const dispatch = useAppDispatch();
    const marginTop = 30;
    const isFormValid = age !== '' && timeFrom !== '' && timeTo !== ''
    const onSubmit = () => {
        dispatch(setAgeRedux(age))
        dispatch(setTimeFromRedux(timeFrom))
        dispatch(setTimeToRedux(timeTo))
        dispatch(getAllGamesAsync())
        navigate(OnboardRoutes.SET_GAMES)
    };

    return (
        <OnboardLayout>
            <ButtonsWrapper>

                <CustomInput value={age} onChangeText={text => setAge(text)} labelText="Wiek"
                             keyboardType={'number-pad'}/>
                <CustomInput
                    value={timeFrom}
                    onChangeText={text => setTimeFrom(text)}
                    labelText="Godzina dostępności od"
                    style={{marginTop}}
                    keyboardType={'number-pad'}
                />
                <CustomInput
                    value={timeTo}
                    onChangeText={text => setTimeTo(text)}
                    labelText="Godzina dostępności do"
                    style={{marginTop}}
                    keyboardType={'number-pad'}
                />

                <CustomButton onPress={() => onSubmit()} text={'Wybierz swoje gry'} revert
                              style={{marginTop}}
                              disabled={!isFormValid}
                />
            </ButtonsWrapper>
        </OnboardLayout>
    );
};
export default InitialSetupScreen;
