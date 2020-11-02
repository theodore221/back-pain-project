import React, { useContext } from "react";
import { Button } from "react-native";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import {Context} from '../context/JournalContext';

const HomeScreen = (props) => {
  
  const {state} = useContext(Context);
  const entry = state.find((entry) => entry.id === 1);
  return (
    <View>
      <TouchableOpacity onPress={() => props.navigation.navigate('NewEntry')}>
        <View style={styles.check_in_view}>
          <Text style={styles.check_in}>How are you feeling today?</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.navigation.navigate('Entry', {id: entry.id})}>
      <View style={styles.last_entry}>
        <Text>Your last recorded entry:</Text>
        <View style={styles.last_entry_textview}>
          <Text style={styles.last_entry_text}>Pain Intensity:{entry.pain_intensity}</Text>
          <Text style={styles.last_entry_text}>Mood:{entry.mood}</Text>
          <Text style={styles.last_entry_text}>Activity Level:{entry.activity_level}</Text>
        </View>
      </View>
      </TouchableOpacity>
      <View style={styles.button_style}>
        <Button 
          title="Pain Journal"
          onPress = {() => props.navigation.navigate('Entries')}
        />
        <Button
          title="Export PDF"
          onPress = {() => props.navigation.navigate('Pdf')} 
        />
        <Button
          title="Trends"
          onPress = {() => props.navigation.navigate('Trend')} 
        />
      </View>
    </View>
    

  );
};

const styles = StyleSheet.create({

  check_in: {
    fontSize: 22,
    color:"#3ACC64",
    //3ACC64
    //329ADF
    margin: 5,
    alignSelf: "center"
  },
  check_in_view: {
    margin: 5,
    marginBottom:25

  },
  button_style:{
    flexDirection:"row",
    justifyContent:'space-around'
  },
  
  last_entry:{
    height:75,
    marginLeft:3,
    marginRight:3,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#696362',
    backgroundColor:"#FFFFFF",
    borderRadius: 5
  },

  last_entry_textview:{
    marginTop:5,
    flexDirection:'row',
    justifyContent:'space-around'
  },

  last_entry_text:{
    fontSize: 18
  }
});

export default HomeScreen;
