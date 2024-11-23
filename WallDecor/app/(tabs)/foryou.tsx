import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ThemedView } from '@/components/ThemedView';
import React from 'react';
import { SplitView } from '@/components/SplitView';
import { StyleSheet, useColorScheme } from 'react-native';
import { useLibraryWallpapers, useLikedWallpapers, useSuggestedWallpapers } from '@/hooks/useWallpapers';
import { Colors } from '@/constants/Colors';
// This dependency need to be installed from react navigation. This is a seperate feature from expo router(acc to my konwledge we can't do nested navigation from expo router)
const Tab = createMaterialTopTabNavigator();



export default function ForYou(){
    const theme = useColorScheme()?? 'light';
    return(
        <Tab.Navigator style={{flex: 1}}
        screenOptions={{
            tabBarActiveTintColor: Colors[theme].tint,
            tabBarStyle:{
                backgroundColor: Colors[theme].background,
            },
            tabBarIndicatorStyle:{
                backgroundColor: Colors[theme].indicator,
                height: 5
            }
        }}>
             <Tab.Screen name="Library" component={LibraryScreen} />
            <Tab.Screen name="Liked" component={LikedScreen} />
            <Tab.Screen name="Suggested" component={SuggestedScreen} />
        </Tab.Navigator>
    );
}
function LibraryScreen() {
    const wallpapers = useLibraryWallpapers();

    return <ThemedView style={styles.container}>
        <SplitView wallpapers={wallpapers} />
    </ThemedView>
}

function LikedScreen() {
    const wallpapers = useLikedWallpapers();

    return <ThemedView style={styles.container}>
        <SplitView wallpapers={wallpapers} />
    </ThemedView>
}

function SuggestedScreen() {
    const wallpapers = useSuggestedWallpapers();

    return <ThemedView style={styles.container}>
        <SplitView wallpapers={wallpapers} />
    </ThemedView>
}
 
const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})