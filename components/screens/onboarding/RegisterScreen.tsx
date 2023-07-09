import {useState} from "react";
import styled from '@emotion/native/dist/emotion-native.cjs';
import {useAppDispatch} from "../../../state/hooks";
import OnboardLayout from "../../common/OnboardLayout";
import CustomInput from "../../common/CustomInput";
import CustomCheckbox from "../../common/CustomCheckbox";
import CustomButton from "../../common/CustomButton";
import {useNavigation} from "@react-navigation/native";
import {OnboardRoutes} from "../../../constants/routeName";
import {NavigationInterface} from "../../../constants/interfaces";
import {setEmailRedux, setPasswordRedux} from "../../../state/authorization/UserRegisterSlice";

const ButtonsWrapper = styled.View`
  height: 100%;
  justify-content: center;
`;

const RegisterScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordSecond, setPasswordSecond] = useState('');
    const [regulationsAccepted, setRegulationsAccepted] = useState(false);

    const [inputError, setInputError] = useState(false);

    const {navigate} = useNavigation<NavigationInterface>();
    const dispatch = useAppDispatch();
    const marginTop = 30;
    const handleNextStep = () => {
        dispatch(setEmailRedux(email))
        dispatch(setPasswordRedux(password))
        navigate(OnboardRoutes.SET_NICK)
    }

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
                <CustomButton onPress={() => handleNextStep()}
                              text={'Zarejestruj się'}
                              revert
                              style={{marginTop}}
                              disabled={!regulationsAccepted}
                />
            </ButtonsWrapper>
        </OnboardLayout>
    );
};
export default RegisterScreen;
