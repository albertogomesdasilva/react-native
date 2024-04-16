import React from "react"
import { TouchableOpacity, Text } from "react-native"

export class BotaoClasse extends React.Component {
    render(){
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
            Botão Classe
            </Text>
    
        </TouchableOpacity>
        );
    }
    }