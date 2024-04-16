import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import {Botao} from './src/components/Botao';
import { BotaoClasse } from './src/components/BotaoClasse';

export default function App() {
  return (
    <View style={styles.container}>
     <Botao />
     <BotaoClasse />
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
