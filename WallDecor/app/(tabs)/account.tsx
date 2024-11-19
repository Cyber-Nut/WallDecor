import { DownloadPicture } from "@/components/BottomSheet";
import { Link } from "expo-router";
import { useState } from "react";
import { View, Text, Button} from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";


export default function Account(){
    const[pictureOpen, setPictureOpen] = useState<boolean>(false);
    return(
        <SafeAreaView>
            <Link href={"/accountInfo"}>
                <Text>
                    Account information
                </Text>
            </Link>
            
             <Text>Accounts Page</Text>
             <Button title="Open Bottom Sheet" onPress={()=>{
                 setPictureOpen(true);
             }}></Button>
              {pictureOpen && <DownloadPicture onClose={()=>{ setPictureOpen(false)}}/>}
    
        </SafeAreaView>
         
    );
}