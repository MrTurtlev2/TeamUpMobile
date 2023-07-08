import React from 'react';
import {FlatList, View} from 'react-native';
import Layout from "../common/Layout";
import ProposedPersonBar from "../common/ProposedPersonBar";
import styled from "@emotion/native";
import colors from "../../constants/colors";
import fonts from "../../constants/fonts";

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
    },
    {
        id: '2',
        nick: '@schabowy23',
        timeFrom: '19',
        timeTo: '23',
        games: [
            'poker',
            'CS',
            'Liga'
        ]
    },
    {
        id: '3',
        nick: '@schabowy24',
        timeFrom: '19',
        timeTo: '23',
        games: [
            'poker',
            'CS',
            'Liga'
        ]
    },
    {
        id: '4',
        nick: '@schabowy25',
        timeFrom: '19',
        timeTo: '23',
        games: [
            'poker',
            'CS',
            'Liga'
        ]
    },
    {
        id: '5',
        nick: '@schabowy26',
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
    return (
        <Layout>
            <ScreenHeader> Z kim chcesz dziś zagrać?</ScreenHeader>
            <FlatList
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                data={mock}
                ListHeaderComponent={() => <View style={{height: 30}}/>}
                renderItem={({item}) => <ProposedPersonBar {...item}/>}
                keyExtractor={item => item.id}
            />
        </Layout>
    );
};
export default HomeScreen;
