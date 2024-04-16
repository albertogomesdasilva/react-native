import React from "react"
import { TouchableOpacity, Text } from "react-native"


export function Botao(){
  return (

    <TouchableOpacity style={{
      backgroundColor: 'blue',
        padding: 20,
        borderRadius: 5
      }}
    >
        <Text style={{
          color: 'white',
          fontSize: 20
        }}>
          Click Me
        </Text>

    </TouchableOpacity>
  );
}