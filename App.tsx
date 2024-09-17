import React, { useState } from 'react';
import { Dimensions, View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import auth from '@react-native-firebase/auth';


const LanguageScreen = ({navigation}) => {


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select a Language</Text>

      <TouchableOpacity onPress={()=>navigation.navigate("Opening")}>
        <Text>test</Text>
      </TouchableOpacity>

   
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 5,
    flexDirection: 'column'
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#1d1d1d',
    marginBottom: 24,
  },
  sectionBody: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#e3e3e3',
  },
  button: {
    backgroundColor: 'white',
    width: Dimensions.get('window').width,
    padding: 10,
    borderColor: '#ddd',
  },
  buttonText: {
    fontSize: 18,
    color: 'black',
  },
});

export default LanguageScreen;