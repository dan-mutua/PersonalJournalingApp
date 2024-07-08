import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import axios from 'axios';
import { apiBaseUrl } from '@env';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

type RootStackParamList = {
  AddEntry: undefined;
};

type AddEntryScreenNavigationProp = StackNavigationProp<RootStackParamList, 'AddEntry'>;
type AddEntryScreenRouteProp = RouteProp<RootStackParamList, 'AddEntry'>;

type Props = {
  navigation: AddEntryScreenNavigationProp;
  route: AddEntryScreenRouteProp;
};

const AddEntryScreen = ({ navigation }: Props) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');

  const handleAddEntry = async () => {
    try {
      await axios.post(`${apiBaseUrl}/journal`, {
        title,
        content,
        category,
        date: new Date().toISOString(),
      });
      Alert.alert('Success', 'Journal entry added successfully.');
      setTitle('');
      setContent('');
      setCategory('');
      navigation.goBack();
    } catch (error) {
      console.error('Adding entry failed:', error);
      Alert.alert('Error', 'Failed to add journal entry.');
    }
  };

  return (
    <View style={styles.container}>
      <Text>Add Entry</Text>
      <TextInput
        style={styles.input}
        placeholder="Title"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={styles.input}
        placeholder="Content"
        multiline
        numberOfLines={4}
        value={content}
        onChangeText={setContent}
      />
      <TextInput
        style={styles.input}
        placeholder="Category"
        value={category}
        onChangeText={setCategory}
      />
      <Button title="Add Entry" onPress={handleAddEntry} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  input: {
    width: '100%',
    marginVertical: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
});

export default AddEntryScreen;
