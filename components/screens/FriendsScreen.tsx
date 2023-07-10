import React, {useEffect} from 'react';
import {FlatList, RefreshControl, View} from 'react-native';
import Layout from "../common/Layout";
import ProposedPersonBar from "../common/ProposedPersonBar";
import styled from "@emotion/native";
import colors from "../../constants/colors";
import fonts from "../../constants/fonts";
import {useAppDispatch, useAppSelector} from "../../state/hooks";
import {getFriendsListAsync} from '../../service/friendsService';

const ScreenHeader = styled.Text`
  font-size: 20px;
  color: ${colors.black};
  font-family: ${fonts.bold};
  margin-top: 20px;
`

const FriendsScreen = () => {
    const {friendsList, isFriendListLoading} = useAppSelector(state => state.ReduxFriendsList);
    const dispatch = useAppDispatch();


    useEffect(() => {
        dispatch(getFriendsListAsync())
    }, [])

    return (
        <Layout>
            <ScreenHeader>Lista twoich znajomych</ScreenHeader>
            <FlatList
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                data={friendsList}
                ListHeaderComponent={() => <View style={{height: 30}}/>}
                renderItem={({item}: any) => <ProposedPersonBar {...item}/>}
                keyExtractor={(item: any) => item.id}
                refreshControl={
                    <RefreshControl
                        enabled={true}
                        onRefresh={() => dispatch(getFriendsListAsync())}
                        refreshing={isFriendListLoading}
                        tintColor={`${colors.blue}`}
                        colors={[`${colors.white}`]}
                        progressBackgroundColor={`${colors.blue}`}
                    />
                }
            />
        </Layout>
    );
};
export default FriendsScreen;
