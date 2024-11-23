import { ThemedText } from "@/components/ThemedText";
import { Ionicons } from "@expo/vector-icons";
import { View, Text,Pressable, useColorScheme, StyleSheet, Appearance} from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "@/constants/Colors";
import { ThemedView } from "@/components/ThemedView";


export default function Account(){
    return(
        <SafeAreaView style={{flex: 1}}>
         
          <Header/>
            <ThemedView style={{flex: 1}}>
              <LoginButtons/>
              <ThemeSelector/>
              <About/>
            </ThemedView>
          
        </SafeAreaView>
         
    );
}


function About(){
  return(
    <ThemedView style={styles.themeChangeSection}>
         <ThemedText style={styles.HeadingText}>About</ThemedText>
       
         <ThemedView style={{marginTop: 10}}>
            <Pressable>
                <ThemedText style={{margin: 10, fontSize: 18}}>
                  About
                </ThemedText>
            </Pressable>
            <Pressable>
                <ThemedText style={{margin: 10, fontSize: 18}}>
                  Privacy Policy
                </ThemedText>
            </Pressable>
            <Pressable>
                <ThemedText style={{margin: 10, fontSize: 18}}>
                  Terms of Service
                </ThemedText>
            </Pressable>
            <Pressable>
                <ThemedText style={{margin: 10, fontSize: 18}}>
                  Licences
                </ThemedText>
            </Pressable>
         </ThemedView>
    </ThemedView>
  );
}

function ThemeSelector(){
  return(
    <ThemedView style={styles.themeChangeSection}>
         <ThemedText style={styles.HeadingText}>Settings</ThemedText>
         <ThemedText style={styles.SubHeadingText}>Theme</ThemedText>
         <ThemedView style={styles.themeSelectorContainer}>
            <ThemeButton title="Dark" selected={false} colorScheme="dark"/>
            <ThemeButton title="Light" selected={false} colorScheme="light"/>
            <ThemeButton title="System" selected={false} colorScheme={null}/>
         </ThemedView>
    </ThemedView>
  );
}


function ThemeButton({title, selected, colorScheme}:{title: string, selected: boolean, colorScheme: 'dark' | 'light' | null}){
  const theme = useColorScheme();
  return(
    <Pressable style={{borderWidth: 1, padding: 10, borderRadius: 5, flex: 0.3, borderColor: theme === 'light' ? Colors.light.text : Colors.dark.text }} onPress={()=>{
        Appearance.setColorScheme(colorScheme);
    }}>
      <ThemedText style={{textAlign: "center", width: '100%'}}>{title}</ThemedText>
    </Pressable>
  );
}

function LoginButtons(){
  const theme = useColorScheme()?? 'light';
  return(
    <>
      <AuthButton
            label={'Sign in'}
            icon={
              <Ionicons
                name="logo-google"
                size={24}
                color={theme==='light'? Colors.light.text: Colors.dark.text}
                style={{ marginRight: 5 }}
              />
            }
          />

        <AuthButton
            label={'Sign in'}
            icon={
              <Ionicons
                name="logo-apple"
                size={24}
                color={theme==='light'? Colors.light.text: Colors.dark.text}
                style={{ marginRight: 5 }}
              />
            }
        />
    </>
  );
}

function AuthButton({label, icon}:{ //This is a sign in button
    label: string;
    icon: any;
    }){
        const theme = useColorScheme() ?? 'light';
        return(
        <Pressable style={{
            backgroundColor: theme,
            marginHorizontal: 40,
            marginVertical: 5,
            justifyContent:'center',
            flexDirection: 'row',
            padding: 10,
            borderRadius: 10,
            borderWidth: 1,
            borderColor: theme === 'light' ? Colors.light.text : Colors.dark.text
        }}>
    
            {icon}
    
            <ThemedText style={{
                fontSize: 20,
                fontWeight: 600,
              }}>
            {label}
            </ThemedText>
        </Pressable>
    );
  }


  function Header(){
    return(
      <ThemedView style={styles.TopBar}>
        <ThemedText style={styles.HeadingText}>Panels</ThemedText>
        <ThemedText style={styles.SubHeadingText}>Sign in to save your data</ThemedText>
      </ThemedView>
    );
  }




  const styles = StyleSheet.create({
    HeadingText:{

      fontWeight: 800,
      fontSize: 25, 
    },
    SubHeadingText:{
      
    },
    TopBar:{
      padding: 20,
    },
    themeSelectorContainer:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 10
    },
    themeSelectorChild:{
      
    },
    themeChangeSection:{
     padding: 20
    }
  });