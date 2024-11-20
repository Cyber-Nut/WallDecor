import React, { useCallback, useMemo, useRef } from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';
import { GestureHandlerRootView, Pressable } from 'react-native-gesture-handler';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { Wallpaper } from '@/hooks/useWallpapers';
import { Ionicons } from '@expo/vector-icons';
import { ThemedText } from './ThemedText';


export const DownloadPicture = ({onClose, wallpaper}:{
  onClose: ()=>void;
  wallpaper: Wallpaper;
}) => {
  // ref
  const bottomSheetRef = useRef<BottomSheet>(null);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  const snapPoints = useMemo(() => ["99%"], []);
  // renders
  return (
  
      <BottomSheet
      onClose={onClose}
      snapPoints={snapPoints}
        ref={bottomSheetRef}
        onChange={handleSheetChanges}
        enablePanDownToClose = {true} //This wil enable us to close the bottom sheet by dragging down
        handleIndicatorStyle={{display: 'none'}} // This will hide the top notch of the bottomsheet which is used to pull down
        handleStyle={{display: 'none'}}
      >
        <BottomSheetView style={styles.contentContainer}>
          <Image style={styles.image} source={{uri: wallpaper.url}}/>
            <View style={styles.topBar}>
              <Ionicons
                    name="close"
                    size={30}
                    color={'white'}
                     />
                <View style={styles.topBarInner}>
                <Ionicons
                    name="heart"
                    size={30}
                    color={'white'}
                    style={{paddingRight: 10}}
                     />
               <Ionicons
                    name="share"
                    size={30}
                    color={'white'}
                     />
                </View>
            </View>

            <View style={styles.textContainer}>
              <ThemedText style={styles.text}>{wallpaper.name}</ThemedText>
            </View>

            <DownloadButton/>
        </BottomSheetView>
      </BottomSheet>
  );
};


function DownloadButton(){
  return(
    <Pressable style={{
      backgroundColor: 'black',
      marginHorizontal: 40,
      marginVertical: 20,
      flexDirection: 'row',
      justifyContent:'center',
      padding: 10,
      borderRadius: 10
    }}>

      <Ionicons
          name="download"
           size={24}
           color={'white'}
           style={{paddingRight: 10}}
      />

      <Text style={{
        fontSize: 20,
        color: 'white',
        fontWeight: 600,
      }}>
          Download
      </Text>
  </Pressable>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  contentContainer: {
    flex: 1,
  },
  image:{
    height: "70%",
    borderRadius: 15,
  },
  topBar:{
    position: 'absolute',
    padding: 10,
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '100%'
  },
  topBarInner: {
    flexDirection: 'row'
  },
  textContainer:{
    width: '100%',
    justifyContent: 'center',
  },
  text:{
    paddingTop: 20,
    textAlign: 'center',
    fontSize: 25,
    fontWeight: '600'
  }
});
