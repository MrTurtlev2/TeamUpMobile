import React from "react";
import OnboardLayout from "../common/OnboardLayout";
import CustomButton from "../common/CustomButton";
import styled from "@emotion/native";
import {useNavigation} from "@react-navigation/native";
import {NavigationInterface} from "../../constants/interfaces";
import {OnboardRoutes} from "../../constants/routeName";

const ButtonsWrapper = styled.View`
  height: 100%;
  justify-content: center;
`

const LoginOrSignUpScreen = () => {

    const {navigate} = useNavigation<NavigationInterface>();
    return (
        <OnboardLayout>
            <ButtonsWrapper>
                <CustomButton onPress={() => navigate(OnboardRoutes.LOGIN)} text={'Zaloguj się'}
                              style={{marginBottom: 40}}/>
                <CustomButton onPress={() => null} text={'Zarejestruj się'} revert/>
            </ButtonsWrapper>
        </OnboardLayout>
    )
}
export default LoginOrSignUpScreen