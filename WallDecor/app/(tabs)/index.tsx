import ParallaxScrollView from "@/components/ParallaxScrollView";
import { View, Text, Button} from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "react-native"
import { useWallpapers, Wallpaper } from "@/hooks/useWallpapers";
import { ImageCard } from "@/components/ImageCard";
import { StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { ThemedView } from "@/components/ThemedView";
import { useState } from "react";
import BottomSheet from "@gorhom/bottom-sheet";
import { DownloadPicture } from "@/components/BottomSheet";


export default function Explore(){
    const wallpapers = useWallpapers(); //Calls the useWallpapers hook to retrieve an array of wallpaper objects
    const[selectedWallpaper, setSelectedWallpaper] = useState<Wallpaper|null>(null) //this will keep check if a wallpaper is selected or not

    return(
    
      <SafeAreaView style = {{flex: 1}} >
        <ParallaxScrollView headerBackgroundColor={{dark: "black", light: "white"}} headerImage={<Image style={{flex: 1}} source={{uri: wallpapers[0]?.url ?? ""}}/>} >

         <ThemedView style={styles.container}>
            <ThemedView style={styles.innerContainer}>
                <FlatList
                data={wallpapers.filter((_, index) => index%2 ===0)}  // this will ensure that half of the image list is listed here and half in  the other flat list
                renderItem={({item})=>
                <View style={styles.imageContainer}>
                    <ImageCard wallpaper={item} onPress={()=>{
                        setSelectedWallpaper(item)
                    }}/>
                </View>}
                keyExtractor={item=>item.name}/>
            </ThemedView>

            <ThemedView style={styles.innerContainer}>
                <FlatList
                 data={wallpapers.filter((_, index) => index%2 ===1)}
                renderItem={({item})=>
                <View style={styles.imageContainer}>
                    <ImageCard wallpaper={item} onPress={()=>{
                        setSelectedWallpaper(item)
                    }}/>
                </View>}
                keyExtractor={item=>item.name}/>
            </ThemedView>
         </ThemedView>
        </ParallaxScrollView>
        {selectedWallpaper && <DownloadPicture wallpaper={selectedWallpaper} onClose={()=>setSelectedWallpaper(null)}/> }  
        {/* if the wallpaper is selected the bottomsheet will open up */}
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        marginLeft: 15
    },
    innerContainer: {
        flex: 1,
    },

    imageContainer:{
        paddingVertical: 10
    }
});