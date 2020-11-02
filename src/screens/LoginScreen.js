import React, {useState} from 'react';
import {View, Text, StyleSheet, Button, TouchableOpacity, TextInput} from 'react-native';

const LoginScreen = (props) => {
  const [userName, setName] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.viewStyle}>
      <Text>Enter Username:</Text>
      <TextInput  
        style={styles.input}
        autoCapitalize="none"   
        autoCorrect={false}
        value = {userName}
        onChangeText = {(newValue) => setName(newValue)}
      />

      <Text>Enter Password</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value = {password}
        onChangeText = {(newValue) => setPassword(newValue)}
      />

      {password.length < 6 ? <Text style={styles.error}>Password must be longer than 5 characters</Text>: null}
      <View style={styles.button_view}>
        <Button 
          style={styles.buttonStyle}
          title="Login"
          onPress = {() => props.navigation.navigate('Home')}
        />
      </View>

    </View>
  ); 
};

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: 'black',
    borderWidth: 1
  },

  error: {
    color:'#eb0e0e'
  },

  textStyle: {
    alignSelf:'center',
    fontSize: 20,
    marginBottom: 15
  },

  viewStyle: {
    marginHorizontal: 15,
    marginVertical: 10,
    
    
  },

  button_view:{
    marginTop:10

  },

  buttonStyle:{
    alignSelf:'center',
    margin:20,
    width:45
  }
});


export default LoginScreen;