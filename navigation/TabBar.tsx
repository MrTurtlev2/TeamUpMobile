import React from 'react';
import colors from '../constants/colors';
import styled from '@emotion/native';
import ProfileIcon from '../assets/icons/ProfileIcon';
import HomeIcon from '../assets/icons/HomeIcon';

const TabBarWrapper = styled.View`
    height: 73px;
    background-color: ${colors.mainBrown};
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
`;
const TabBarItem = styled.TouchableOpacity`
    padding: 0 20px;
    justify-content: center;
`;

const TabBar = ({ state, descriptors, navigation }: any) => {
    const focusedColor = `${colors.orange}`;
    const unfocusedColor = `${colors.lightGrey}`;
    return (
        <TabBarWrapper>
            {state.routes.map((route: any, index: any) => {
                const { options } = descriptors[route.key];
                const label = options.tabBarLabel !== undefined ? options.tabBarLabel : options.title !== undefined ? options.title : route.name;
                const isFocused = state.index === index;

                const shouldDisplay = index < 3;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate({ name: route.name, merge: true });
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };

                const iconsArray = [
                    <HomeIcon key={0} color={isFocused ? focusedColor : unfocusedColor} />,
                    <HomeIcon key={1} color={isFocused ? focusedColor : unfocusedColor} />,
                ];
                return (
                    <React.Fragment key={index}>
                        {shouldDisplay ? (
                            <TabBarItem
                                accessibilityRole="button"
                                accessibilityState={isFocused ? { selected: true } : {}}
                                accessibilityLabel={options.tabBarAccessibilityLabel}
                                testID={options.tabBarTestID}
                                onPress={onPress}
                                onLongPress={onLongPress}>
                                {iconsArray[index]}
                                {/*<Text>Tu kliknij</Text>*/}
                            </TabBarItem>
                        ) : null}
                    </React.Fragment>
                );
            })}
            <TabBarItem onPress={() => navigation.openDrawer()}>
                <ProfileIcon />
            </TabBarItem>
        </TabBarWrapper>
    );
};
export default TabBar;
