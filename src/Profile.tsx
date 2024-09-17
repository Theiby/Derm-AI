import React, { useState } from 'react';
import { Dimensions, View, Text, TouchableOpacity, StyleSheet, Alert, Image } from 'react-native';


const Profile = ({navigation}) => {


 


 
  return (
    <View style={styles.container}>
        <View style={{justifyContent:'center',alignItems:'center',gap:20}}>

        <View style={{flexDirection:'row' ,backgroundColor:'darkred', width: Dimensions.get('window').width/2, height: Dimensions.get('window').height/8,borderRadius:20, alignItems:'center',justifyContent:'space-between',paddingHorizontal:10,}}>
            <View style={{gap:20,}}>
                <Text style={{color:'lightgray'}}>Risk %99</Text>
                <Text style={{color:'lightgray'}}>Dermatit</Text>
            </View>

            <View style={{backgroundColor:'white',width:80,height:80,borderRadius:100, alignItems:'center',justifyContent:'center'}}>
                <Text>FOTO</Text>
            </View>

            </View>
        </View>

        <View style={{justifyContent:'center',alignItems:'center',gap:20}}> 
            <Text style={{alignSelf:'flex-start', color:'white',fontSize:18, fontWeight:'300'}}>Dermatit Disease</Text>
            <View style={{backgroundColor:'lightgray', width: Dimensions.get('window').width/2, height: Dimensions.get('window').height/4,borderRadius:20, alignItems:'center',justifyContent:'center'}}>
                <Text>Disease1</Text>
                <Text>Lorem ipsum dolor</Text>
            </View>

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

        <TouchableOpacity style={{ width: 60, height: 60, backgroundColor: 'lightgray', borderRadius: 50, justifyContent: 'center', alignItems: 'center' }} onPress={() => null}>
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
    gap:40,
    justifyContent:'center',
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
    backgroundColor: '#85c673',
    width: Dimensions.get('window').width/3,
    padding:10,
    borderRadius:20,
    justifyContent:'center',
    alignItems:'center'
  },
  buttonText: {
    fontSize: 18,
    fontWeight:'300',
    color: 'white',
  },
});

export default Profile;