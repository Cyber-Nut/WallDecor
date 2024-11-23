import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ThemedView } from '@/components/ThemedView';
import React from 'react';
import { SplitView } from '@/components/SplitView';
import { StyleSheet } from 'react-native';
import { useLibraryWallpapers, useLikedWallpapers, useSuggestedWallpapers } from '@/hooks/useWallpapers';
// This dependency need to be installed from react navigation. This is a seperate feature from expo router(acc to my konwledge we can't do nested navigation from expo router)
const Tab = createMaterialTopTabNavigator();



export default function ForYou(){
    
    return(
        <Tab.Navigator>
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