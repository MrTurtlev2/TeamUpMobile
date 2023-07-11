import React from 'react';
import styled from '@emotion/native/dist/emotion-native.cjs';
import {useAppDispatch} from "../../state/hooks";
import OnboardLayout from "../common/OnboardLayout";
import CustomButton from "../common/CustomButton";
import {useNavigation} from "@react-navigation/native";
import {Routes} from "../../constants/routeName";
import {NavigationInterface} from "../../constants/interfaces";
import {addToFriendsListAsync} from "../../service/friendsService";
import {Dimensions} from "react-native";

const Content = styled.View`
  height: 100%;
  //background-color: red;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  width: ${Dimensions.get('screen').width + 'px'};
`;

const SelectedPersonScreen = ({route, navigation}: any) => {
    const {email, username, id} = route.params;
    const {navigate} = useNavigation<NavigationInterface>()
    const dispatch = useAppDispatch();


    const handleAddingFriend = () => {
        addToFriendsListAsync([id]).then((res: any) => {
            if (res.status === 200) navigate(Routes.HOME)
        })
    };

    return (
        <OnboardLayout hideLogo goBack={() => navigate(Routes.HOME)}>
            <Content>
                <CustomButton onPress={() => handleAddingFriend()} text={'dodaj znajomego'} style={{marginTop: 30}}/>
            </Content>
        </OnboardLayout>
    );
};
export default SelectedPersonScreen;
