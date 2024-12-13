import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from "react-native";

import Formers from './Formers';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Button1 from './Button1';
import Pagerform from './Pagerform';


export default function App() {
  const Stack = createNativeStackNavigator();

  
  return (
    <SafeAreaView>
      {/* <Formers/> */}
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Pagerform">
          
          <Stack.Screen name="Button1" component={Button1} />
          <Stack.Screen name="Pagerform" component={Pagerform} />
          
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
