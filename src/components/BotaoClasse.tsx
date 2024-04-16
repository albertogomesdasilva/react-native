import React from "react"
import { TouchableOpacity, Text, StyleSheet } from "react-native"

interface BotaoProps {
    titulo2: string
  }
  

export class BotaoClasse extends React.Component<BotaoProps> {
    render(){
       
        return ( 
        <TouchableOpacity style={styles.botao}
        >
            <Text style={styles.legenda} >
                {this.props.titulo2}
            </Text>
    
        </TouchableOpacity>
        );
    } 
 }

 const styles = StyleSheet.create({
    botao: {
        backgroundColor: 'green',
        width: 150,
        marginTop: 10,
        padding: 10,
        borderRadius: 15,
        alignItems: 'center',
    },
    legenda: {
        fontSize: 20,
        color: 'yellow',
        
    }
})
    