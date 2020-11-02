import React, {useContext} from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import {Context} from '../context/JournalContext';

import {Feather} from '@expo/vector-icons';

const EntryScreen = ({navigation}) => {
  const {state, deleteEntry} = useContext(Context);

  const journalEntry = state.find((journalEntry) => journalEntry.id === navigation.getParam('id'))
  return (
    <View>
      <Text style={{fontSize:25, alignSelf:'center', color:'#209040'}}>{journalEntry.title}</Text>
      <View style={{marginTop:15, marginLeft:10}}>
      <Text style={styles.dataView}>Date: {journalEntry.date}</Text>
      <Text style={styles.dataView}>Pain Level: {journalEntry.pain_intensity}</Text>
      <Text style={styles.dataView}>Pain Tolerance: {journalEntry.pain_tolerance}</Text>
      <Text style={styles.dataView}>Mood: {journalEntry.mood}</Text>
      <Text style={styles.dataView}>Activity Level: {journalEntry.activity_level}</Text>
      <Text style={styles.dataView}>Notes: {journalEntry.notes}</Text>
      <TouchableOpacity >
        <Feather style={styles.button} name='trash' />
      </TouchableOpacity>
      </View>
      
    </View>
  );
};


const styles = StyleSheet.create({
  dataView:{
    fontSize: 18
  },

  button:{
    fontSize:30,
    alignSelf: 'center',
    marginTop:70
  }
});

export default EntryScreen;