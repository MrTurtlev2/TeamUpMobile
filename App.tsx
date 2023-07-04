import 'react-native-gesture-handler';
import {NavigationContainer} from "@react-navigation/native";
import DrawerTabNavigation from "./navigation/DrawerTabNavigation";
import {store} from "./state/store";
import {Provider} from "react-redux";

export default function App() {
    return (
        <>
            {/*<Text>Open up App.tsx to start working on your app! 123</Text>*/}
            {/*<StatusBar style="auto" />*/}
            {/*<SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>*/}
            <Provider store={store}>
                <NavigationContainer>
                    <DrawerTabNavigation/>
                </NavigationContainer>
            </Provider>
            {/*</SafeAreaView>*/}
        </>
    );
}

