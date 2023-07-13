import React, {useEffect} from 'react';
import {FlatList, RefreshControl, View} from 'react-native';
import Layout from "../common/Layout";
import ProposedPersonBar from "../common/ProposedPersonBar";
import styled from "@emotion/native";
import colors from "../../constants/colors";
import fonts from "../../constants/fonts";
import {useAppDispatch, useAppSelector} from "../../state/hooks";
import {getCurrentUserDataAsync, getRecommendedPeopleAsync} from '../../service/friendsService';

const ScreenHeader = styled.Text`
  font-size: 20px;
  color: ${colors.black};
  font-family: ${fonts.bold};
  margin-top: 20px;
`

const HomeScreen = ({navigation}: any) => {
    const {recommendedPeopleList, isRecommendedPeopleLoading} = useAppSelector(state => state.ReduxRecommendedPeople);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getRecommendedPeopleAsync())
        dispatch(getCurrentUserDataAsync())
    }, [])

    return (
        <Layout>
            <ScreenHeader> Z kim chcesz dziś zagrać?</ScreenHeader>
            <FlatList
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                data={recommendedPeopleList}
                ListHeaderComponent={() => <View style={{height: 30}}/>}
                ListFooterComponent={() => <View style={{height: 110}}/>}
                renderItem={({item}: any) => <ProposedPersonBar {...item}/>}
                keyExtractor={(item: any) => item.id}
                refreshControl={
                    <RefreshControl
                        enabled={true}
                        onRefresh={() => dispatch(getRecommendedPeopleAsync())}
                        refreshing={isRecommendedPeopleLoading}
                        tintColor={`${colors.blue}`}
                        colors={[`${colors.white}`]}
                        progressBackgroundColor={`${colors.blue}`}
                    />
                }
            />
        </Layout>
    );
};
export default HomeScreen;
