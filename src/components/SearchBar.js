import React from 'react';
import {View, TextInput, StyleSheet } from 'react-native';
import {Feather} from '@expo/vector-icons';

const SearchBar = ({term, onTermChange, onTermSubmit}) => {
  return (
    <View style={styles.backgroundStyle}>
      <Feather name='search' size={30} />
      <TextInput
        placeholder='Search' 
        autoCapitalize='none'
        autoCorrect={false}
        value={term}
        onChangeText={newTerm => onTermChange(newTerm)}
        onEndEditing={() => console.log(term)}
      />

    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor:'#FEFAF8',
    height: 35,
    borderRadius: 2,
    marginHorizontal: 5,
    marginVertical: 10,
    flexDirection: 'row'
  }
});

export default SearchBar;