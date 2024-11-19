import { DownloadPicture } from "@/components/BottomSheet";
import BottomSheet from "@gorhom/bottom-sheet";
import { useState } from "react";
import { View, Text, Button} from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";


export default function ForYou(){

    const[pictureOpen, setPictureOpen] = useState<boolean>(false);
    return(
       <SafeAreaView style = {{flex: 1}}>
        <View style = {{flex: 1}}>
            <Text>Accounts Page</Text>
            <Button title="Open Bottom Sheet" onPress={()=>{
                setPictureOpen(true);
            }}></Button>
             {pictureOpen && <DownloadPicture onClose={()=>{ setPictureOpen(false)}}/>}
        </View>
       </SafeAreaView>
    );
}