import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';


const EntryView = ({result, onEntryPress}) => {
  return (
    <TouchableOpacity onPress={() => onEntryPress()}>
      <View style={styles.caseBox}>
        <Text>{result.date}</Text>
        <Text>Pain Rating: {result.pain_intensity}</Text>
        <Text>Mood: {result.mood}</Text>
      </View>
    </TouchableOpacity>
  );
};


const styles = StyleSheet.create({
  caseBox: {
    backgroundColor:'white',
    borderWidth:1,
    borderColor:'black',
    width:180,
    height:100
  }
});


export default EntryView;


{/* <TouchableOpacity onPress={() => navigation.navigate('Entry',{ id: item.id}) }>
<View style={styles.entryStyle}>
  <Text>{item.title}</Text>
  <Text>Pain Intesity:{item.pain}</Text>
  <TouchableOpacity onPress={() => deleteEntry(item.id)  }>
    <Feather style={{alignSelf:'center'}} name='trash'/>
  </TouchableOpacity>   
</View>
</TouchableOpacity> */}