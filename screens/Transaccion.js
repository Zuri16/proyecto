import React, { Component } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

export default class Transaccion extends Component {
   render(){
       return(
           <View style={styles.conteiner}>
             <Text
             style={styles.text}
             >Historial de viajes</Text>  
           </View>
       )
   }
}
const styles = StyleSheet.create({
    conteiner: {
      justifyContent: 'center',
      backgroundColor: 'blue',
      flex: 1,
      alignItems: 'center'
    },
    text: {
      color: 'black',
      fontSize: 30,
    },
  });