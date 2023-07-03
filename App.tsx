import 'react-native-gesture-handler';
import {SafeAreaView} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import DrawerTabNavigation from "./navigation/DrawerTabNavigation";

export default function App() {
    return (
        <>
            {/*<Text>Open up App.tsx to start working on your app! 123</Text>*/}
            {/*<StatusBar style="auto" />*/}
            <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
                <NavigationContainer>
                    <DrawerTabNavigation/>
                </NavigationContainer>
            </SafeAreaView>
        </>
    );
}

