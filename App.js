import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./src/screens/HomeScreen";
import LoginScreen from "./src/screens/LoginScreen";
import EntriesScreen from "./src/screens/EntriesScreen";
import NewEntryScreen from "./src/screens/NewEntryScreen";
import PdfScreen from "./src/screens/PdfScreen";
import EntryScreen from './src/screens/EntryScreen';
import EditEntryScreen from './src/screens/EditEntryScreen';
import TrendScreen from './src/screens/TrendScreen';

import {Provider} from './src/context/JournalContext';




const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Login: LoginScreen,
    Entries: EntriesScreen,
    NewEntry: NewEntryScreen,
    Pdf: PdfScreen,
    Entry: EntryScreen,
    Edit: EditEntryScreen,
    Trend: TrendScreen
  },
  {
    initialRouteName: "Login",
    defaultNavigationOptions: {
      title: "BackPain-App",
      headerStyle:{
        backgroundColor: '#FEFAF8'
      }
    }
  }
);

const App = createAppContainer(navigator);

export default () => {
  return ( 
    <Provider>
      <App />
    </Provider> 
  ); 
};
