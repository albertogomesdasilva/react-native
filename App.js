import React from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';

import {Botao} from './src/components/Botao';
import { BotaoClasse } from './src/components/BotaoClasse';

export default function App() {
  let valor = 0;

  function aumentar(){
    valor++;
   console.log(valor++);
  }
  


  return (
    <View style={styles.container}>
     <Text style={{fontSize:30, color:"red"}}> Valor: {valor}</Text>

     <Botao  titulo="Aumentar +"  
      onPress={aumentar}
     />

     <BotaoClasse  titulo2="Diminuir -"
      onPress={console.log(valor)}
     />
    </View>
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
