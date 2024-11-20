import { Wallpaper } from "@/hooks/useWallpapers";
import { View, Image, Pressable } from "react-native";
import { StyleSheet } from "react-native";
import { ThemedText } from "./ThemedText";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "react-native/Libraries/NewAppScreen";

export function ImageCard({wallpaper, onPress}:{
    wallpaper: Wallpaper,
    onPress: ()=>void
}) {
    return(
        <Pressable onPress={onPress}>
        <View >
            <Image style = {styles.image} source={{uri: wallpaper.url}}/>
            <View style={styles.labelContainer}>
                <ThemedText style={styles.label}>{wallpaper.name}</ThemedText>
                <View style={styles.iconContainer}>
                    <Ionicons
                    name="heart"
                    size={18}
                    color={'white'}
                     />
                </View>
            </View>
            
        </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        height: 250,
        borderRadius: 20,
        width: "90%"
    },
    label:{
        color: "white"
    },
    labelContainer:{
        position: "absolute",
        bottom: 0,
        width: "90%",
        backgroundColor: "rgba(0,0,0,0.5)",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 5,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
    },
    iconContainer : {
        display: "flex",
        justifyContent:"center"
    }
});