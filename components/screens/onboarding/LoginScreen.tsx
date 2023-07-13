import React, {useState} from 'react';
import styled from '@emotion/native/dist/emotion-native.cjs';
import {useAppDispatch} from "../../../state/hooks";
import {loginUser} from "../../../state/authorization/UserLoginSlice";
import OnboardLayout from "../../common/OnboardLayout";
import CustomInput from "../../common/CustomInput";
import CustomButton from "../../common/CustomButton";

const ButtonsWrapper = styled.View`
  height: 100%;
  justify-content: center;
`;

const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [inputError, setInputError] = useState(false);

    const dispatch = useAppDispatch();

    const onSubmit = () => {
        if (email && password) {
            const userData = {
                email: email.toLowerCase(),
                password: password,
            };
            dispatch(loginUser(userData));
        }
    };

    return (
        <OnboardLayout>
            <ButtonsWrapper>
                <CustomInput isError={inputError} value={email} onChangeText={text => setEmail(text)}
                             labelText="Email"/>
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
