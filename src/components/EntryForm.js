import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
 

const EntryForm = ({onSubmit}) => {
  const [painIntensity, setPainIntensity] = useState([1]);
  const [painTolerance, setPainTolerance] = useState([1]);
  const [mood, setMood] = useState([1]);
  const [activityLevel, setActivityLevel] = useState([1]);
  const [notes, setNotes] = useState('');


  return (
    <View style={styles.viewStyle} >
      
      <Text style={styles.header}>New Entry: {getCurrentDate()}</Text>

      <Text style={styles.text}>How bad is the pain?: {painIntensity}</Text>
      <MultiSlider
        min={1}
        max={10}
        snapped={true}
        values={painIntensity}
        onValuesChange={(newValue) => setPainIntensity(newValue)}
       />
      <Text style={styles.text}>How managable is the pain?: {painTolerance}</Text>
      <MultiSlider
        min={1}
        max={10}
        snapped={true}
        values={painTolerance}
        onValuesChange={(newValue) => setPainTolerance(newValue)}
       />
      <Text style={styles.text}>How is your mood?: {mood}</Text>
      <MultiSlider
        min={1}
        max={10}
        snapped={true}
        values={mood}
        onValuesChange={(newValue) => setMood(newValue)}
       />
      <Text style={styles.text}>How active have you been?: {activityLevel}</Text>
      <MultiSlider
        min={1}
        max={10}
        snapped={true}
        values={activityLevel}
        onValuesChange={(newValue) => setActivityLevel(newValue)}
       />
      <Text style={styles.text}>Anything else to add?</Text>
      <TextInput
        style={styles.input} 
        value={notes} 
        onChangeText = {(newValue) => setNotes(newValue)}
      />
      <View style={styles.buttonView}>
        <Button 
          style={styles.button} 
          title='Save Entry' 
          onPress={() => onSubmit(painIntensity, painTolerance, mood, activityLevel, notes, `${getCurrentDate()}`) }  
        />
      </View> 
    </View>

  );
}

const getCurrentDate= () => {
  var date = new Date().getDate();
  var month = new Date().getMonth() + 1;
  var year = new Date().getFullYear();

  return date + '-' + month + '-' + year; 
}


const styles = StyleSheet.create({
  viewStyle:{
    padding: 20,
    paddingTop: 10
  },

  header:{
    paddingBottom:20,
    fontSize: 18
  },

  text:{
    fontSize: 16,
    marginBottom:5
  },

  input:{
    backgroundColor:'white',
    borderColor:'grey',
    borderWidth:1,
    height: 100,
    
  },

  buttonView:{
    marginTop:20
  },

  button:{
    margin:5
  }

});


export default EntryForm;