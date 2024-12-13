import { StyleSheet, Text, View, TextInput,TouchableHighlight, Button, Alert } from 'react-native';
import React, {useEffect,createContext,useState } from 'react';
import { SafeAreaView } from 'react-native';
import Contextsample from './Contextsample';
import Button1 from './Button1';



export default function Formers({navigation}) {

  const [name, setName] = useState("")
  const [phone, setPhone] = React.useState()
  const [stylers, setStylers] = useState({
    padding: 10,
    marginTop: 10,
    borderColor: "red",
    borderWidth: 1,
    borderWidthColor: "red",
    width: "80%",
    marginLeft: 10,
  });
  const [styler2, setStyler2] = useState({
    padding: 10,
    marginTop: 10,
    borderColor: "red",
    borderWidth: 1,
    borderWidthColor: "red",
    width: "80%",
    marginLeft: 10,
    
  });
  const handleSub = () => {
    if (!name) {
      
      Alert.alert("Fill in your any username!")
      
    } else if (!phone) {
      
      
      Alert.alert("please put in your phone number!")
    } else {
      setName(" ")
      setPhone(" ")
     
    }
  }
  return (
  
  <SafeAreaView edges={["top"]}>
        <View style={styles.styleme}>
          <Text style={styles.headerText}>Please fill in the form!</Text>
        </View>
        <View>
          <Text style={{ marginTop: 10, fontSize: 20, fontWeight: "bold" }}>
            Username:
          </Text>
          <TextInput
            style={stylers}
            autoComplete='cc-given-name'
            autoCapitalize='words'
            placeholder="enter name here"
            onChangeText={(name) => setName(name)}
            value={name}
          />
        </View>
        <View>
          <Text style={{ marginTop: 10, fontSize: 20, fontWeight: "bold" }}>
            Phone:
          </Text>
          <TextInput
            style={styler2}
            keyboardType='numeric'
            placeholder="enter phone number..."
            onChangeText={(phone) => setPhone(phone)}
            value={phone}
          />
        </View>
      <View style={styles.buttonViewStyle}>
        <Button title="Submit"
          onPress={handleSub}
        />
        </View>
      
      </SafeAreaView>
    
   
      
      
    
    
   
  );
}

const styles = StyleSheet.create({
    styleme: {
        
        alignContent: "center",
        alignItems: "center",
        borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
        
        
        padding: 30,
    },
    headerText: {
        fontSize: 20,
        fontWeight: "bold",
        color: "black",
        alignItems: "center",

        
  }, 
  inputs: {
      padding: 10,
      marginTop: 10,
    borderColor: "red",
    borderWidth: 1,
    borderWidthColor: "red",
    width: "80%",
    marginLeft: 10,
    
      
  }, 
  buttonViewStyle: {
    width: 100,
    height: 50,
    backgroundColor: "grey",
    borderRadius: 10,
    padding: 7,
    marginTop: 20,
    marginLeft: 150,
  }
})