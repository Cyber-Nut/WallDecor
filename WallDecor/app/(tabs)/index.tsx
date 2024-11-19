import { View, Text} from "react-native"
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Library from "../library";
import Liked from "../liked";
import Suggested from "../suggested";
// This dependency need to be installed from react navigation. This is a seperate feature from expo router(acc to my konwledge we can't do nested navigation from expo router)
const Tab = createMaterialTopTabNavigator();



export default function ForYou(){
    
    return(
        <Tab.Navigator>
            <Tab.Screen name="Library" component={Library}/>
            <Tab.Screen name="Liked" component={Liked}/>
            <Tab.Screen name="Suggested" component={Suggested}/>
        </Tab.Navigator>
    );
}