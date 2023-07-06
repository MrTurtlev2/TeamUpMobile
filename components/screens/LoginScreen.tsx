import React, {useState} from 'react';
import CustomButton from '../common/CustomButton';
import OnboardLayout from '../common/OnboardLayout';
import styled from '@emotion/native/dist/emotion-native.cjs';
import CustomInput from '../common/CustomInput';
import {useAppDispatch} from '../../state/hooks';
import {loginUser} from "../../state/authorization/UserLoginSlice";

const ButtonsWrapper = styled.View`
  height: 100%;
  justify-content: center;
`;

const LoginScreen = () => {
    const [nick, setNick] = useState('');
    const [password, setPassword] = useState('');
    const [inputError, setInputError] = useState(false);

    const dispatch = useAppDispatch();

    const onSubmit = () => {
        if (nick && password) {
            const userData = {
                email: nick,
                password: password,
            };
            dispatch(loginUser(userData));
        }
    };

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
                    style={{marginTop: 40}}
                />
                <CustomButton onPress={() => onSubmit()} text={'Zaloguj się'} style={{marginTop: 40}}/>
            </ButtonsWrapper>
        </OnboardLayout>
    );
};
export default LoginScreen;
