import React, { useState } from 'react';
import { Dimensions, View, Text, TouchableOpacity, StyleSheet, Alert, SafeAreaView, TextInput } from 'react-native';

const ChangeType = ({ navigation }) => {
  const [text, onChangeText] = React.useState('');
  const [selectedGender, setSelectedGender] = useState(null);
  const [selectedSkinType, setSelectedSkinType] = useState(null);
  const [selectedSkinColor, setSelectedSkinColor] = useState(null);

  const handleGenderSelect = (gender) => {
    if (selectedGender === gender) {
      setSelectedGender(null);
    } else {
      setSelectedGender(gender);
    }
  };

  const handleSkinTypeSelect = (type) => {
    if (selectedSkinType === type) {
      setSelectedSkinType(null);
    } else {
      setSelectedSkinType(type);
    }
  };

  const handleSkinColorSelect = (color) => {
    if (selectedSkinColor === color) {
      setSelectedSkinColor(null);
    } else {
      setSelectedSkinColor(color);
    }
  };

  const formatBirthday = (text) => {
    let formattedText = text
      .replace(/\D/g, '')
      .slice(0, 8)
      .replace(/(\d{2})(\d)/, '$1.$2')
      .replace(/(\d{2})(\d)/, '$1.$2');

    onChangeText(formattedText);
  };

  const handleSave = () => {
    if (selectedGender && text && selectedSkinType && selectedSkinColor) {
      navigation.navigate('Setting');
    } else {
      Alert.alert('Please select all');
    }
  };

  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Change Skin Type</Text>
      <View style={styles.row}>
        <TouchableOpacity
          style={[styles.button, selectedGender === 'female' ? styles.selectedButton : null]}
          onPress={() => handleGenderSelect('female')}>
          <Text style={styles.buttonText}>Female</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, selectedGender === 'male' ? styles.selectedButton : null]}
          onPress={() => handleGenderSelect('male')}>
          <Text style={styles.buttonText}>Male</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.label}>Date of Birth</Text>
      <TouchableOpacity style={styles.inputContainer}>
        <SafeAreaView>
          <TextInput
            style={styles.input}
            onChangeText={formatBirthday}
            value={text}
            placeholder="dd.mm.yyyy"
            keyboardType="numeric"
            maxLength={10}
          />
        </SafeAreaView>
      </TouchableOpacity>
      <Text style={styles.label}>Skin Type</Text>
      <View style={styles.row}>
        <TouchableOpacity
          style={[styles.button, selectedSkinType === 'combined' ? styles.selectedButton : null]}
          onPress={() => handleSkinTypeSelect('combined')}>
          <Text style={styles.buttonText}>Combined</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, selectedSkinType === 'normal' ? styles.selectedButton : null]}
          onPress={() => handleSkinTypeSelect('normal')}>
          <Text style={styles.buttonText}>Normal</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity
          style={[styles.button, selectedSkinType === 'oily' ? styles.selectedButton : null]}
          onPress={() => handleSkinTypeSelect('oily')}>
          <Text style={styles.buttonText}>Oily</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, selectedSkinType === 'dry' ? styles.selectedButton : null]}
          onPress={() => handleSkinTypeSelect('dry')}>
          <Text style={styles.buttonText}>Dry</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.label}>Skin Color</Text>
      <View style={styles.row}>
        <TouchableOpacity
          style={[styles.colorButton, selectedSkinColor === '#f0d9b5' ? styles.selectedButton : null]}
          onPress={() => handleSkinColorSelect('#f0d9b5')}>
          <View style={[styles.color, { backgroundColor: '#f0d9b5' }]}></View>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.colorButton, selectedSkinColor === '#e0bb95' ? styles.selectedButton : null]}
          onPress={() => handleSkinColorSelect('#e0bb95')}>
          <View style={[styles.color, { backgroundColor: '#e0bb95' }]}></View>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.colorButton, selectedSkinColor === '#c89f73' ? styles.selectedButton : null]}
          onPress={() => handleSkinColorSelect('#c89f73')}>
          <View style={[styles.color, { backgroundColor: '#c89f73' }]}></View>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.colorButton, selectedSkinColor === '#9b7b56' ? styles.selectedButton : null]}
          onPress={() => handleSkinColorSelect('#9b7b56')}>
          <View style={[styles.color, { backgroundColor: '#9b7b56' }]}></View>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.colorButton, selectedSkinColor === '#704f30' ? styles.selectedButton : null]}
          onPress={() => handleSkinColorSelect('#704f30')}>
          <View style={[styles.color, { backgroundColor: '#704f30' }]}></View>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.colorButton, selectedSkinColor === '#3b2517' ? styles.selectedButton : null]}
          onPress={() => handleSkinColorSelect('#3b2517')}>
          <View style={[styles.color, { backgroundColor: '#3b2517' }]}></View>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('Setting')}>
        <Text style={styles.buttonText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#24314f',
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
    color: 'white',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    width: '100%',
  },
  button: {
    backgroundColor: '#007bff',
    width: '48%',
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
  },
  label: {
    color: 'white',
    fontSize: 16,
    alignSelf: 'flex-start',
    marginBottom: 5,
  },
  inputContainer: {
    width: '100%',
  },
  input: {
    backgroundColor: '#fff',
    width: '100%',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  colorButton: {
    width: '16%',
    aspectRatio: 1,
    alignItems: 'center',
    justifyContent: 'center',

  },
  color: {
    width: '80%',
    aspectRatio: 1,
    borderRadius: 100,
  },
  selectedButton: {
    backgroundColor: 'darkblue',
    borderRadius: 100,
  },
});

export default ChangeType;
