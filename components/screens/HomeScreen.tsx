import React, {useEffect} from 'react';
import {FlatList, View} from 'react-native';
import Layout from "../common/Layout";
import ProposedPersonBar from "../common/ProposedPersonBar";
import styled from "@emotion/native";
import colors from "../../constants/colors";
import fonts from "../../constants/fonts";
import {useAppDispatch, useAppSelector} from "../../state/hooks";
import {getRecommendedPeopleAsync} from '../../service/friendsService';

const mock = [
    {
        id: '1',
        nick: '@schabowy22',
        timeFrom: '19',
        timeTo: '23',
        games: [
            'poker',
            'CS',
            'Liga'
        ]
    }
]

const ScreenHeader = styled.Text`
  font-size: 20px;
  color: ${colors.black};
  font-family: ${fonts.bold};
  margin-top: 20px;
`

const HomeScreen = () => {
    const {recommendedPeopleList} = useAppSelector(state => state.ReduxRecommendedPeople);
    const dispatch = useAppDispatch();


    useEffect(() => {
        dispatch(getRecommendedPeopleAsync())
    }, [])

    return (
        <Layout>
            <ScreenHeader> Z kim chcesz dziś zagrać?</ScreenHeader>
            <FlatList
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                data={recommendedPeopleList}
                ListHeaderComponent={() => <View style={{height: 30}}/>}
                renderItem={({item}: any) => <ProposedPersonBar {...item}/>}
                keyExtractor={(item: any) => item.id}
            />
        </Layout>
    );
};
export default HomeScreen;
