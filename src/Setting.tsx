import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Switch } from 'react-native';

const Settings = ({ navigation }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [language, setLanguage] = useState('English');

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Settings</Text>
      </View>

      <TouchableOpacity style={styles.closeButton} onPress={() => navigation.goBack()}>
        <Image 
          source={require('./assets/close_white_asset.png')}
          style={{ width: 30, height: 30 }}/>
      </TouchableOpacity>

      <View style={styles.profileSection}>
        <Image source={require('./assets/berkemm.png')} style={styles.profileImage} />
        <Text style={styles.profileName}>Berke</Text>
        <Text style={styles.profileEmail}>berke1@gmail.com</Text>
        <TouchableOpacity style={styles.changeAvatarButton}>
          <Text style={styles.editProfileText}>Change Avatar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionHeader}>CONTENT</Text>
        <TouchableOpacity style={styles.optionRow} onPress={() => navigation.navigate('ChangeType')}>
          <Image source={require('./assets/changeinfo.png')} style={styles.optionIcon} />
          <Text style={styles.optionText}>Change Information</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionRow}>
          <Image source={require('./assets/FAQ.png')} style={styles.optionIcon} />
          <Text style={styles.optionText}>FAQ</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionHeader}>PREFERENCES</Text>
        <TouchableOpacity style={styles.optionRow} onPress={() => setLanguage(language === 'English' ? 'Türkçe' : 'English')}>
          <Image source={require('./assets/language.png')} style={styles.optionIcon} />
          <Text style={styles.optionText}>Language</Text>
          <Text style={styles.optionValue}>{language}</Text>
        </TouchableOpacity>
        <View style={styles.optionRow}>
          <Image source={isDarkMode ? require('./assets/dark_theme.png') : require('./assets/light_theme.png')} style={styles.optionIcon} />
          <Text style={styles.optionText}>Theme</Text>
          <Switch
            value={isDarkMode}
            onValueChange={(value) => setIsDarkMode(value)}
            thumbColor={isDarkMode ? '#007bff' : '#f4f3f4'}
            trackColor={{ false: '#767577', true: '#81b0ff' }}
          />
        </View>
        <TouchableOpacity style={styles.optionRow}>
          <Image source={require('./assets/deleteac.png')} style={styles.optionIcon} />
          <Text style={[styles.optionText, { color: 'red' }]}>Delete Account</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionRow}>
          <Image source={require('./assets/logout.png')} style={styles.optionIcon} />
          <Text style={[styles.optionText, { color: 'red', textDecorationLine: 'underline' }]}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#24314f', // Renk güncellendi
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
  header: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#2c3e50', // Renk güncellendi
    backgroundColor: '#24314f', // Renk güncellendi
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white', // Renk güncellendi
  },
  profileSection: {
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#2c3e50', // Renk güncellendi
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    color: 'white', // Renk güncellendi
  },
  profileEmail: {
    fontSize: 14,
    color: '#bbb', // Renk güncellendi
    marginBottom: 10,
  },
  changeAvatarButton: {
    backgroundColor: '#007bff',
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  editProfileText: {
    color: '#fff',
  },
  section: {
    marginTop: 20,
  },
  sectionHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#bbb', // Renk güncellendi
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  optionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#34495e', // Renk güncellendi
    borderBottomWidth: 1,
    borderBottomColor: '#2c3e50', // Renk güncellendi
  },
  optionIcon: {
    width: 24,
    height: 24,
    marginRight: 20,
  },
  optionText: {
    fontSize: 16,
    flex: 1,
    color: 'white', // Renk güncellendi
  },
  optionValue: {
    fontSize: 16,
    color: '#bbb', // Renk güncellendi
  },
});

export default Settings;