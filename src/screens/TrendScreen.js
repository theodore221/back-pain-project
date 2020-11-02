import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
//import {VictoryBar, VictoryChart, VictoryLine, VictoryTheme} from "victory-native";
//import {LineChart, Grid} from 'react-native-svg-charts';


const data = [1,3,4,5,7,9,10,3,8,6,10,3,5,7,5,8];

const TrendScreen = () => {
  return (
    <View style={styles.container}>

      <Text>Trends</Text>
      <Image style={styles.image} source={require('../../assets/produce_monthly.png')}/>
      

    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: "center",
    backgroundColor: '#f5fcff'
  },

  image: {
    height: 200,
    width:200
    //justifyContent:'center'
  }

});


export default TrendScreen;