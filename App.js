import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
//import C_SearchBar from './src/Components/C_SearchBar';
//import C_Button from './src/Components/C_Button';

// Package pour la navigation
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

//import des écrans
import S_Movies from './src/Screens/S_Movies';
import S_DetailMovie from './src/Screens/S_DetailMovie';
import S_DetailActor from './src/Screens/S_DetailActor';


// import des services
import {findMovieById, searchMovies, getPopular, getTopRated, getLatest, getUpcoming, getMovieDetails, getMovieCredits} from './src/services/Services';

// Création de l'objet qui va gérer la navigation
let RootStack = createStackNavigator();


export default function App() {
  return (
  <NavigationContainer>
    <RootStack.Navigator>
      <RootStack.Screen name="Movies" component={S_Movies} />
      <RootStack.Screen name="DetailMovie" component={S_DetailMovie} />
      <RootStack.Screen name="DetailActor" component={S_DetailActor} />
    </RootStack.Navigator>
  </NavigationContainer>
  
  
  
  
  
  
  
    //  <View style={styles.container}>
   //  <Text>Open up App.js to start working on your app!</Text>
   //   <C_Button></C_Button>
   //   <StatusBar style="auto" />
   //   <C_SearchBar message={"Recherche..."}></C_SearchBar>
   // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
