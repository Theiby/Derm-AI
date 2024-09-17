import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; 

const Advices = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Sol üstteki çarpı butonu */}
      <TouchableOpacity style={styles.closeButton} onPress={() => navigation.goBack()}>
        <Image 
          source={require('./assets/close_white_asset.png')}
          style={{ width: 30, height: 30 }}/>
      </TouchableOpacity>

      <Text style={styles.title}>Advices</Text>

      {/* Lorem ipsum yazıları */}
      <View style={styles.bottomText}>
        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
        <Text>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
        <Text>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
        <Text>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#34495e', // Gri arka plan rengi
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: 40,
    marginLeft: 20,
    color : 'white',
  },
  closeButton: {
        width: 60, // Sabit genişlik
        height: 60, // Sabit yükseklik
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 10,
        right: 5,
        zIndex: 1,
    },
  bottomText: {
    marginTop: 20,
    paddingHorizontal: 20,
    fontWeight: 'bold',
    color : 'white',
  },
});

export default Advices;
