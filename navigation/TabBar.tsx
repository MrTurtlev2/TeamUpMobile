import React from 'react';
import colors from '../constants/colors';
import styled from '@emotion/native';
import ProfileSvg from "../assets/svg/navigation/ProfileSvg";
import FindPeopleSVG from "../assets/svg/navigation/FindPeopleSvg";
import {Dimensions} from "react-native";

const TabGhostWrapper = styled.View<{ hideNavBar?: boolean }>`
  position: absolute;
  bottom: 7px;
  left: 0;
  width: ${Dimensions.get('screen').width + 'px'};
  align-items: center;
  display: ${p => p.hideNavBar ? 'none' : 'flex'};
`;

const TabBarWrapper = styled.View`
  height: 73px;
  width: ${Dimensions.get('screen').width * 0.87 + 'px'};
  background-color: ${colors.blue};
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;

  border-radius: 12px;
`;
const TabBarItem = styled.TouchableOpacity`
  padding: 0 18px;
  justify-content: center;
`;

const TabBar = ({state, descriptors, navigation}: any) => {
    const focusedColor = `${colors.white}`;
    const unfocusedColor = `${colors.darkBlue}`;


    return (
        <TabGhostWrapper>
            <TabBarWrapper>
                {state.routes.map((route: any, index: any) => {
                    const {options} = descriptors[route.key];
                    const label = options.tabBarLabel !== undefined ? options.tabBarLabel : options.title !== undefined ? options.title : route.name;
                    const isFocused = state.index === index;

                    const shouldDisplay = index < 2;

                    const onPress = () => {
                        const event = navigation.emit({
                            type: 'tabPress',
                            target: route.key,
                            canPreventDefault: true,
                        });

                        if (!isFocused && !event.defaultPrevented) {
                            navigation.navigate({name: route.name, merge: true});
                        }
                    };

                    const onLongPress = () => {
                        navigation.emit({
                            type: 'tabLongPress',
                            target: route.key,
                        });
                    };

                    const iconsArray = [
                        <FindPeopleSVG key={0} color={isFocused ? focusedColor : unfocusedColor}/>,
                        <FindPeopleSVG key={1} color={isFocused ? focusedColor : unfocusedColor}/>,
                    ];
                    return (
                        <React.Fragment key={index}>
                            {shouldDisplay ? (
                                <TabBarItem
                                    accessibilityRole="button"
                                    accessibilityState={isFocused ? {selected: true} : {}}
                                    accessibilityLabel={options.tabBarAccessibilityLabel}
                                    testID={options.tabBarTestID}
                                    onPress={onPress}
                                    onLongPress={onLongPress}>
                                    {iconsArray[index]}
                                </TabBarItem>
                            ) : null}
                        </React.Fragment>
                    );
                })}
                <TabBarItem onPress={() => navigation.openDrawer()}>
                    <ProfileSvg/>
                </TabBarItem>
            </TabBarWrapper>
        </TabGhostWrapper>
    );
};
export default TabBar;
