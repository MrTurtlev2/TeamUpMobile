import React from "react";
import OnboardLayout from "../common/OnboardLayout";
import CustomButton from "../common/CustomButton";
import styled from "@emotion/native";

const ButtonsWrapper = styled.View`
  height: 100%;
  //background-color: red;
  justify-content: center;
`

const LoginOrSignUpScreen = () => {

    return (
        <OnboardLayout>
            <ButtonsWrapper>
                <CustomButton onPress={() => null} text={'Zaloguj się'} style={{marginBottom: 50}}/>
                <CustomButton onPress={() => null} text={'Zarejestruj się'} revert/>
            </ButtonsWrapper>
        </OnboardLayout>
    )
}
export default LoginOrSignUpScreen