import React, { useState } from 'react';
import { Dimensions, View, Text, TouchableOpacity, StyleSheet, Alert, Image } from 'react-native';


const Opening = ({navigation}) => {

 
  return (
    <View style={styles.container}>
        <View style={{justifyContent:'center',alignItems:'center'}}>
            <Image 
            source={require('./assets/logo.png')}
            style={{ width: 110, height: 100}}/>
             <Text style={styles.title}>Derm AI</Text>
            <Text style={styles.sectionBody}>Personal AI Assistant</Text>
        </View>

      <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('Login')}>
        <Text style={styles.buttonText}>Let's Start</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('Main')}>
        <Text style={styles.buttonText}>Admin Access</Text>
      </TouchableOpacity>
   
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'space-around',
    flexDirection: 'column',
    alignItems:'center',
    backgroundColor:'#24314f'
  },
  title: {
    fontSize: 64,
    color: 'white',
    
  },
  sectionBody: {
    color:'white'
  },
  button: {
    backgroundColor: '#007bff',
    width: Dimensions.get('window').width/1.5,
    padding:10,
    borderRadius:10,
    justifyContent:'center',
    alignItems:'center'
  },
  buttonText: {
    fontSize: 32,
    fontWeight:'300',
    color: 'white',
  },
});

export default Opening;