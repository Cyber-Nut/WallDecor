import ParallaxScrollView from "@/components/ParallaxScrollView";
import { View, Text, Button, Dimensions} from "react-native"
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
import Carousel from "react-native-reanimated-carousel";
import { SplitView } from "@/components/SplitView";
import { useCarousel } from "@/hooks/useCarousel";
import Animated from 'react-native-reanimated';
import { LinearGradient } from 'expo-linear-gradient';
import { ThemedText } from "@/components/ThemedText";


const TOPBAR_HEIGHT = 250;

export default function Explore(){
    const wallpapers = useWallpapers(); //Calls the useWallpapers hook to retrieve an array of wallpaper objects
    const[selectedWallpaper, setSelectedWallpaper] = useState<Wallpaper|null>(null) //this will keep check if a wallpaper is selected or not
    const width = Dimensions.get('window').width;
    const[yOffset, setScrollY] = useState(0);
    const carouselItems = useCarousel();
    return(
    
      <SafeAreaView style = {{flex: 1}} >
          <LinearGradient
        // Background Linear Gradient
        colors={['rgba(0,0,0,0.8)', 'transparent']}
        style={styles.background}
      >
         <Animated.View style={{ height: TOPBAR_HEIGHT-yOffset }}>
            <Carousel
                loop
                width={width}
                height={TOPBAR_HEIGHT - yOffset}
                autoPlay={false}
                data={carouselItems}
                scrollAnimationDuration={1000}
                onSnapToItem={(index) => console.log('current index:', index)}
                renderItem={({ index }) => (
                    <>
                    <View
                        style={{
                            flex: 1,
                            borderWidth: 1,
                            justifyContent: 'center',
                        }}
                    >
                        <Image style={{height: TOPBAR_HEIGHT}} source={{uri: carouselItems[index].image}}/>
                    </View>
                    <LinearGradient colors={['transparent', 'black']} style={{flex: 1, position: 'absolute', zIndex: 10, height: TOPBAR_HEIGHT/2, width:'100%', bottom: 0}}>
                        <Text style={{ color: 'white' , paddingTop: TOPBAR_HEIGHT/3,  textAlign: 'center', fontSize: 30, fontWeight: 600}}>{carouselItems[index].title}</Text>
                    </LinearGradient>
                    </>
                )}
            />
        </Animated.View>
       
        <SplitView wallpapers={wallpapers} onScroll={(yOffset)=>{
            setScrollY(yOffset);
        }} />

        </LinearGradient>
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
    },
    background: {
        flex: 1,
        
      },
});