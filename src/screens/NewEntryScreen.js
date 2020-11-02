import React, {useContext, useState } from 'react';
import {View, Text, TextInput, StyleSheet, Button} from 'react-native';
import {Context} from '../context/JournalContext';
//import Slider from '@react-native-community/slider';
import EntryForm from '../components/EntryForm';

const NewEntryScreen = ({navigation}) => {
  const {addJournalEntry} = useContext(Context);

  return <EntryForm onSubmit={(painIntensity, painTolerance, mood, activityLevel, notes, date) => {
    addJournalEntry(painIntensity, painTolerance, mood, activityLevel, notes, date, () => navigation.navigate('Entries') )
  }}/>;
};

const styles = StyleSheet.create({
  input: {
    height:50, 
  },
  viewStyle:{
    padding:5
  }
});

export default NewEntryScreen;