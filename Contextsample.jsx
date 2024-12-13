import { StyleSheet, Text, View } from 'react-native';
import React, { useState, useEffect, createContext } from 'react';



export const Contexter = createContext()
const Contextsample = ({ children }) => {
  const [name, setName] = useState(" prince kalu")
  const [telephone, setTelephone] = useState(377488377483);
  return (
    <Contexter.Provider value={{name,setName,telephone,setTelephone}}>
      {children}

    </Contexter.Provider>
    
  )
}

export default Contextsample;

const styles = StyleSheet.create({})