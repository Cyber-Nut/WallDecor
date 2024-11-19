import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Slot, Stack } from "expo-router";

export default function Layout(){
    return(
        <GestureHandlerRootView>
            <Stack screenOptions={{
                headerShown: false,
                statusBarBackgroundColor: 'blue'
            }}>
                <Stack.Screen name="(nobottombar)/accountInfo" options={{headerShown: true, title: "Account Information", headerBackTitle: "Go Back"}}/>

            </Stack>

          
                
            
        </GestureHandlerRootView>
    );
}