import React, {useState} from 'react';
import CustomButton from '../common/CustomButton';
import OnboardLayout from '../common/OnboardLayout';
import styled from '@emotion/native/dist/emotion-native.cjs';
import CustomInput from '../common/CustomInput';
import {useAppDispatch} from '../../state/hooks';
import {handleOnboardingCompleted} from '../../state/navigation/NavigationSlice';
import CustomCheckbox from '../common/CustomCheckbox';

const ButtonsWrapper = styled.View`
  height: 100%;
  justify-content: center;
`;

const RegisterScreen = () => {
    const [nick, setNick] = useState('');
    const [password, setPassword] = useState('');
    const [passwordSecond, setPasswordSecond] = useState('');
    const [regulationsAccepted, setRegulationsAccepted] = useState(false);

    const [inputError, setInputError] = useState(false);

    const dispatch = useAppDispatch();
    const marginTop = 30;

    return (
        <OnboardLayout>
            <ButtonsWrapper>
                <CustomInput isError={inputError} value={nick} onChangeText={text => setNick(text)} labelText="Nick"/>
                <CustomInput
                    isError={inputError}
                    value={password}
                    onChangeText={text => setPassword(text)}
                    labelText="Hasło"
                    secureTextEntry
                    style={{marginTop}}
                />
                <CustomInput
                    isError={inputError}
                    value={passwordSecond}
                    onChangeText={text => setPasswordSecond(text)}
                    labelText="Powtórz hasło"
                    secureTextEntry
                    style={{marginTop}}
                />
                <CustomCheckbox
                    onPress={() => setRegulationsAccepted(!regulationsAccepted)}
                    state={regulationsAccepted}
                    label={'Akceptuję regulamin'}
                    style={{marginTop}}
                />
                <CustomButton onPress={() => dispatch(handleOnboardingCompleted(true))} text={'Zarejestruj się'} revert
                              style={{marginTop}}
                              disabled={!regulationsAccepted}
                />
            </ButtonsWrapper>
        </OnboardLayout>
    );
};
export default RegisterScreen;
