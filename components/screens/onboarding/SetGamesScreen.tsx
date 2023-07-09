import React, {useRef, useState} from 'react';
import styled from '@emotion/native/dist/emotion-native.cjs';
import {useAppDispatch, useAppSelector} from "../../../state/hooks";
import OnboardLayout from "../../common/OnboardLayout";
import MultiSelect from "react-native-multiple-select";
import {View} from 'react-native';
import colors from "../../../constants/colors";
import fonts from "../../../constants/fonts";
import CustomButton from "../../common/CustomButton";
import {registerUserAsync} from "../../../service/userService";

const ButtonsWrapper = styled.View`
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const SetGamesScreen = () => {
    const gamesList = useAppSelector(state => state.ReduxGames.gamesList)
    const {email, password, age, nick, timeFrom, timeTo} = useAppSelector(state => state.ReduxRegister.userRegisterData)
    const [selectedItems, onSelectedItemsChange] = useState([]);
    const dispatch = useAppDispatch();
    const ref = useRef<any>();
    const handleNextStep = () => {
        dispatch(registerUserAsync({
            email,
            username: nick,
            password,
            age,
            startHour: timeFrom,
            endHour: timeTo,
            gamesList: selectedItems
        }))
    };
    return (
        <OnboardLayout>
            <ButtonsWrapper>
                <View style={{width: 300, borderColor: colors.black}}>
                    <MultiSelect
                        // @ts-ignore
                        items={gamesList}
                        uniqueKey="id"
                        ref={ref}
                        onSelectedItemsChange={(value: any) => onSelectedItemsChange(value)}
                        selectedItems={selectedItems}
                        selectText="wybierz lub wyszukaj grę"
                        searchInputPlaceholderText="Search Items..."
                        onChangeInput={(text) => console.log(text)}
                        altFontFamily={fonts.bold}
                        tagRemoveIconColor={colors.softGreen}
                        tagBorderColor={colors.blue}
                        tagTextColor={colors.black}
                        selectedItemTextColor={colors.softGreen}
                        selectedItemIconColor="#CCC"
                        itemTextColor={colors.softGrey}
                        displayKey="name"
                        searchInputStyle={{color: '#CCC'}}
                        submitButtonColor={colors.blue}
                        submitButtonText="Zastosuj wybór"
                    />
                </View>
                <CustomButton onPress={() => handleNextStep()}
                              text={'Zarejestruj się'}
                              revert
                              style={{marginTop: 60}}
                />
            </ButtonsWrapper>
        </OnboardLayout>
    );
};
export default SetGamesScreen;
