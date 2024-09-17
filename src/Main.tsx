import React from 'react';
import { Dimensions, View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; 

const Main = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Settings button */}
      <TouchableOpacity style={styles.settingsButton} onPress={() => navigation.navigate('Setting')}>
        <Image 
          source={require('./assets/settings_white_asset.png')}
          style={{ width: 50, height: 50 }}/>
      </TouchableOpacity>

      <View style={{ justifyContent: 'center', alignItems: 'center', gap: 20 }}>
        <Text style={{ alignSelf: 'center', color: 'white', fontSize: 18, fontWeight: '300', alignItems: 'center' }}>My Scans</Text>
        <TouchableOpacity style={styles.photo} onPress={() => navigation.navigate('Camera')}>
          <View style={{ backgroundColor: 'white', width: 100, height: 100, borderRadius: 100, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Add Photo</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Make Diagnosis</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Am I Healthy?</Text>
        </TouchableOpacity>
      </View>

      <View style={{ justifyContent: 'center', alignItems: 'center', gap: 20 }}>
        <Text style={{ alignSelf: 'center', color: 'white', fontSize: 18, fontWeight: '300' }}>Daily Advices</Text>
        <TouchableOpacity style={styles.adviceButton} onPress={() => navigation.navigate('Advices')}>
          <View>
          <Image 
          source={require('./assets/advices_asset.png')}
          style={{ width: 50, height: 50 }}/>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.adviceButton} onPress={() => navigation.navigate('Advices')}>
          <View>
          <Image 
          source={require('./assets/advices_asset.png')}
          style={{ width: 50, height: 50 }}/>
          </View>
        </TouchableOpacity>
      </View>

      <View style={{ position: 'absolute', bottom: 0, borderTopLeftRadius: 30, borderTopRightRadius: 30, width: Dimensions.get('window').width, height: 100, flexDirection: 'row', backgroundColor: '#007bff', justifyContent: 'space-evenly', alignItems: 'center' }}>
        <TouchableOpacity style={{ width: 60, height: 60, backgroundColor: 'lightgray', borderRadius: 50, justifyContent: 'center', alignItems: 'center' }} onPress={() => navigation.navigate('Profile')}>
          <Image 
          source={require('./assets/profile_asset.png')}
          style={{ width: 50, height: 50 }}/> 
        </TouchableOpacity>

        <TouchableOpacity style={{ width: 60, height: 60, backgroundColor: 'lightgray', borderRadius: 50, justifyContent: 'center', alignItems: 'center' }} onPress={() => navigation.navigate('Main')}>
          <Image 
          source={require('./assets/main_asset.png')}
          style={{ width: 50, height: 50 }}/>
        </TouchableOpacity>

        <TouchableOpacity style={{ width: 60, height: 60, backgroundColor: 'lightgray', borderRadius: 50, justifyContent: 'center', alignItems: 'center' }} onPress={() => navigation.navigate('Chatbot')}>
          <Image 
          source={require('./assets/chatbot_asset.png')}
          style={{ width: 50, height: 50, borderTopLeftRadius: 10}}/>
        </TouchableOpacity>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 80,
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#24314f'
  },
  button: {
    backgroundColor: '#007bff',
    width: Dimensions.get('window').width / 3,
    paddingVertical: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '300',
    color: 'white',
  },
  adviceButton: {
    // Apply your desired button styles here
  },
  settingsButton: {
    position: 'absolute',
    top: 20,
    right: 10,
    zIndex: 1,
  },
  photo: {
    
  },
});

export default Main;
