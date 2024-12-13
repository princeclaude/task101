import { StyleSheet, Text, View, Button, Alert } from 'react-native'
import { TouchableHighlight } from 'react-native'
import React from 'react'

export default function Button1() {
    const handleSubmit = () => {
        Alert.alert("Done!")
    }
  return (
    <View>
      <TouchableHighlight style={styles.highstyle}>
              <Button title="Submit" onPress={() => Alert.alert("Done!")}
              />
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
    highstyle: {
        width: 90,
        height: 40,
        borderRadius: 5,
        backgroundColor: "black",
        marginTop: 20,
        marginLeft: 150,
        color: "white",
    },
    buttonStyle: {
        color: "white",
        fontSize: 13,
        fontWeight: "bold",
    }
})