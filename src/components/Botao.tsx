import React from "react"
import { TouchableOpacity, Text } from "react-native"

interface BotaoProps {
  titulo: string
}


export function Botao({titulo}: BotaoProps){

  return (

    <TouchableOpacity style={{
      backgroundColor: 'blue',
        padding: 8,
        width: 150,
        borderRadius: 12
      }}
    >
        <Text style={{
          color: 'white',
          fontSize: 20
        }}> 
        
        {titulo}
          
        </Text>

    </TouchableOpacity>
  );
}