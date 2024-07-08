import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import axios from 'axios';
import { apiBaseUrl } from '@env';
import { NavigationProp, ParamListBase } from '@react-navigation/native';

type Entry = {
  id: number;
  title: string;
  content: string;
  category: string;
  date: string;
};

type EntryListScreenProps = {
  navigation: NavigationProp<ParamListBase>;
};

const EntryListScreen: React.FC<EntryListScreenProps> = ({ navigation }) => {
  const [entries, setEntries] = useState<Entry[]>([]);

  useEffect(() => {
    // Fetch all entries
    const fetchEntries = async () => {
      try {
        const response = await axios.get(`${apiBaseUrl}/journal`);
        setEntries(response.data);
      } catch (error) {
        console.error('Fetching entries failed:', error);
        Alert.alert('Error', 'Failed to fetch journal entries.');
      }
    };

    fetchEntries();
  }, []);

  const handleDeleteEntry = async (entryId: number) => {
    try {
      await axios.delete(`${apiBaseUrl}/journal/${entryId}`);
      const updatedEntries = entries.filter((entry) => entry.id !== entryId);
      setEntries(updatedEntries);
    } catch (error) {
      console.error('Deleting entry failed:', error);
      Alert.alert('Error', 'Failed to delete the journal entry.');
    }
  };

  const renderItem = ({ item }: { item: Entry }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => navigation.navigate('EditEntry', { entryId: item.id })}
    >
      <Text>{item.title}</Text>
      <Text>{item.category}</Text>
      <TouchableOpacity onPress={() => handleDeleteEntry(item.id)}>
        <Text style={styles.deleteButton}>Delete</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text>Entry List</Text>
      <FlatList
        data={entries}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    borderRadius: 5,
    width: '100%',
  },
  deleteButton: {
    color: 'red',
    marginTop: 10,
  },
});

export default EntryListScreen;
