import React, {useReducer} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';


const PdfScreen = () => {
  return(
    <View style={styles.container}>
      <Text> PDF Ready to Send </Text>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: "center",
    backgroundColor: '#f5fcff'
  }
});

export default PdfScreen;


