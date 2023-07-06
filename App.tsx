import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import DrawerTabNavigation from './navigation/DrawerTabNavigation';
import { store } from './state/store';
import { Provider } from 'react-redux';
import { useFonts } from 'expo-font';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';

export default function App() {
    const [fontsLoaded] = useFonts({
        Bold: require('./assets/fonts/Quicksand-Bold.ttf'),
        Light: require('./assets/fonts/Quicksand-Light.ttf'),
        Medium: require('./assets/fonts/Quicksand-Medium.ttf'),
        Regular: require('./assets/fonts/Quicksand-Regular.ttf'),
        Semi: require('./assets/fonts/Quicksand-SemiBold.ttf'),
    });

    if (!fontsLoaded) {
        return null;
    }

    return (
        <>
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <Provider store={store}>
                    <NavigationContainer>
                        <DrawerTabNavigation />
                    </NavigationContainer>
                </Provider>
            </TouchableWithoutFeedback>
        </>
    );
}
