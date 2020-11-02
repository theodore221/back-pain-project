import React, {useContext, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Context} from '../context/JournalContext';

const EditEntryScreen = ({navigation}) => {
  const {state} = useContext(Context);
  const journalEntry = state.find((journalEntry) => journalEntry.id === navigation.getParam('id'))
  return (
  <Text>Edit</Text>
  );
};

const styles = StyleSheet.create({});

export default EditEntryScreen;