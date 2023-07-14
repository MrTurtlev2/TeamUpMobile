import React, {useEffect, useState} from 'react';
import {FlatList, RefreshControl, Text, TouchableOpacity, View} from 'react-native';
import Layout from "../common/Layout";
import ProposedPersonBar from "../common/ProposedPersonBar";
import styled from "@emotion/native";
import colors from "../../constants/colors";
import fonts from "../../constants/fonts";
import {useAppDispatch, useAppSelector} from "../../state/hooks";
import {getCurrentUserDataAsync, getRecommendedPeopleAsync} from '../../service/friendsService';
import {getAllGamesAsync} from "../../service/gamesService";
import CustomModal from "../common/CustomModal";
import CustomButton from "../common/CustomButton";
import SelectDropdown from 'react-native-select-dropdown'

const ScreenHeader = styled.Text`
  font-size: 20px;
  color: ${colors.black};
  font-family: ${fonts.bold};
  margin-top: 20px;
`

const HomeScreen = ({navigation}: any) => {
    const {recommendedPeopleList, isRecommendedPeopleLoading} = useAppSelector(state => state.ReduxRecommendedPeople);
    const [gameId, setGameId] = useState('')
    const [selectedItem, setSelectedItem] = useState('')

    const [isFilterModalOpen, setFilterModalOpen] = useState(false)
    const {gamesList} = useAppSelector(state => state.ReduxGames);
    const dispatch = useAppDispatch();

    const gameListForSelect = gamesList.map((games: any) => games.name)
    const selectedGame: any = gamesList.find((game: any) => game.name === selectedItem)

    const handleFiltration = () => {
        dispatch(getRecommendedPeopleAsync({gameId: selectedGame.id}))
        setFilterModalOpen(false)
    }

    useEffect(() => {
        dispatch(getRecommendedPeopleAsync({gameId}))
        dispatch(getCurrentUserDataAsync())
        dispatch(getAllGamesAsync())
    }, [])

    return (
        <Layout>
            <ScreenHeader> Z kim chcesz dziś zagrać?</ScreenHeader>
            <TouchableOpacity onPress={() => setFilterModalOpen(true)}><Text>Filtruj</Text></TouchableOpacity>
            <FlatList
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                data={recommendedPeopleList}
                ListHeaderComponent={() => <View style={{height: 30}}/>}
                ListFooterComponent={() => <View style={{height: 110}}/>}
                renderItem={({item}: any) => <ProposedPersonBar {...item} isFriend={false}/>}
                keyExtractor={(item: any) => item.id}
                refreshControl={
                    <RefreshControl
                        enabled={true}
                        onRefresh={() => dispatch(getRecommendedPeopleAsync({gameId}))}
                        refreshing={isRecommendedPeopleLoading}
                        tintColor={`${colors.blue}`}
                        colors={[`${colors.white}`]}
                        progressBackgroundColor={`${colors.blue}`}
                    />
                }
            />

            <CustomModal visible={isFilterModalOpen} closeModal={() => setFilterModalOpen(false)}>
                <SelectDropdown
                    data={gameListForSelect}
                    onSelect={(selectedItem, index) => {
                        console.log(selectedItem, index)
                    }}
                    buttonTextAfterSelection={(selectedItem, index) => {
                        setSelectedItem(selectedItem)
                        return selectedItem
                    }}
                    rowTextForSelection={(item, index) => {
                        return item
                    }}
                />
                <CustomButton onPress={() => handleFiltration()} text={'Szukaj'} style={{marginTop: 50}}/>
                <CustomButton onPress={() => setSelectedItem('')} text={'wyczyść'} style={{marginTop: 20}}/>
            </CustomModal>
        </Layout>
    );
};
export default HomeScreen;
