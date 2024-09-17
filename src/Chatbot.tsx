import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const Chatbot = () => {
  // Mesajların gösterildiği yerde statik mesajlar kullanıyoruz
  const messages = [
    { id: 1, text: 'Merhaba, size nasıl yardımcı olabilirim?', sender: 'bot' },
    { id: 2, text: 'Saat kaç?', sender: 'user' },
    { id: 3, text: 'Saat şu anda 3:45 PM.', sender: 'bot' },
  ];

  return (
    <View style={styles.container}>
      <ScrollView style={styles.messagesContainer}>
        {messages.map(message => (
          <View 
            key={message.id} 
            style={[
              styles.messageBubble, 
              message.sender === 'user' ? styles.userMessage : styles.botMessage
            ]}
          >
            <Text style={styles.messageText}>{message.text}</Text>
          </View>
        ))}
      </ScrollView>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Bir mesaj yazın..."
          placeholderTextColor="#666"
        />
        <TouchableOpacity style={styles.sendButton}>
          <Text style={styles.sendText}>Gönder</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  messagesContainer: {
    flex: 1,
    padding: 10,
    backgroundColor: 'lightgray',
  },
  messageBubble: {
    padding: 10,
    borderRadius: 20,
    marginBottom: 10,
    maxWidth: '70%',
  },
  userMessage: {
    backgroundColor: '#0078fe',
    marginLeft: '30%',
    alignSelf: 'flex-end',
  },
  botMessage: {
    backgroundColor: 'gray',
    marginRight: '30%',
    alignSelf: 'flex-start',
  },
  messageText: {
    color: 'white',
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 10,
  },
  input: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 20,
    color: '#333',
  },
  sendButton: {
    backgroundColor: '#0078fe',
    borderRadius: 20,
    padding: 10,
    marginLeft: 10,
  },
  sendText: {
    color: 'white',
  },
});

export default Chatbot;
