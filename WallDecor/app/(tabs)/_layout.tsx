import { FontAwesome } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function Layout(){
    return(
        <Tabs screenOptions={{tabBarActiveTintColor: 'blue', headerShown: false}}>
        <Tabs.Screen
        name = "foryou"
        options={{
            title: 'For You',
            tabBarIcon: ({color}) =><FontAwesome size={28} name="home" color={color}/>
        }}/>  
      
        <Tabs.Screen
        name = "index"
        options={{
            title: 'Explore',
            tabBarIcon: ({color}) =><FontAwesome size={28} name="search" color={color}/>
        }}/>  

        <Tabs.Screen
        name = "account"
        options={{
            title: 'Account',
            tabBarIcon: ({color}) =><FontAwesome size={28} name="user" color={color}/>
        }}/>  
        </Tabs>
    );
}