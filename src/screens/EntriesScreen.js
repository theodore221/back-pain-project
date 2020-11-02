import React, {useContext, useState} from 'react';
import {View, Text, StyleSheet, Button, FlatList, TouchableOpacity} from 'react-native';
import SearchBar from '../components/SearchBar';
import {Context} from '../context/JournalContext';
import {Feather} from '@expo/vector-icons';

import EntryView from '../components/EntryView';

const EntriesScreen = ({navigation}) => {
  //for searching
  const[term, setTerm] = useState('');

  const {state, deleteEntry} = useContext(Context);

  return(
    <View>
      <SearchBar 
        term ={term} 
        onTermChange={newTerm => setTerm(newTerm)}
        onTermSubmit={() => console.log('term was submitted')}
      />
      <Text>Search Result is {term}</Text>
      
      <FlatList
        data ={state}
        keyExtractor={journalEntry => journalEntry.title}
        scrollEnabled={true}
        numColumns={2}
        renderItem={({item}) => {

          return (
            <TouchableOpacity onPress={() => navigation.navigate('Entry',{ id: item.id}) }>
              <View style={styles.entryStyle}>
                <Text style={{fontWeight:'bold', marginLeft:5, marginBottom:2, color:'#209040'}}>{item.date}</Text>
                <View style={styles.data_view}>
                  <Text style={styles.data_text}>Pain: {item.pain_intensity}</Text>
                  <Text style={styles.data_text}>Mood: {item.mood}</Text> 
                </View> 
              </View>
            </TouchableOpacity>
          )
        }}
      />
      <Button
        title = "Add New Entry"
        onPress = {() => navigation.navigate('NewEntry')} 
      />
    </View>
  ); 
};

EntriesScreen.navigationOptions = ({navigation}) => {
  return {
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate('NewEntry')}>
        <Feather name='plus' size={30}/>
      </TouchableOpacity>
      
    )
  }
}

const styles = StyleSheet.create({
  headerStyle: {
    alignSelf:'center',
    fontSize: 20,
    marginBottom: 15
  },

  entryStyle: {
   height:60,
   width:165,
   flexDirection:'column',
   borderWidth: 1,
   borderRadius: 5,
   borderColor:'gray',
   backgroundColor: 'white',
   margin: 5,

  },
  data_view:{
    flexDirection:'row',
  },

  data_text:{
    marginHorizontal:5
  }


});

export default EntriesScreen;


