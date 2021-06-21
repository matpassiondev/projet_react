import React from 'react';
import {Text, View, StyleSheet, TextInput} from 'react-native';
import { SearchBar } from 'react-native-elements';
import * as Services from '../services/Services';


// Custom component pour faire une barre de recherche
export default class C_SearchBar extends React.Component {
    // CONSTRUCTEUR
    constructor(props){
        // Instancie la super-classe
        super(props);

        //State du composant
        this.state = {
            inputValue: this.props.message,
        }
    }

    // EVENTS
    onChangeText = (text) => {
        // Modifie le state pour conserver le texte saisie par l'utilisateur
        this.setState({inputValue:text})
    }
    onFocus = () => {
        this.setState({inputValue:""})
    }
    onSubmit = () => {
        console.log("Texte à rechercher :", this.state.inputValue);
        Services
            .searchMovies(this.state.inputValue, 1)
            .then(json => {
                this.props.onSubmit(json);
            })
    }


    // Méthode pour rendre les éléments graphiques associés au composant
    render() {
        console.log(this.props);

        return (
            <SearchBar 
                // Valeur a afficher par défaut dans le champ de recherche
                value={this.state.inputValue}

                // Events
                onChangeText = { this.onChangeText }
                onFocus = { this.onFocus }
                onSubmitEditing = { this.onSubmit }

                // Style de la barre de recherche
                containerStyle = {styles.container}
                inputContainerStyle = {styles.inputContainer}
                inputStyle = {styles.input}
                />
        )
    }
}

const styles = StyleSheet.create({
    container:{
        width:300,
        backgroundColor:'transparent',
        borderColor:'transparent',
        borderBottomColor:'transparent',
        borderTopColor:'transparent',
    },
    inputContainer:{
        height:34,
        backgroundColor: '#fff',
        padding:2,
    },

input:{
    fontSize:13,
},
    
    barre: {
        backgroundColor: '#fff',
        fontWeight:'bold',
        color:'#000',
        fontSize:18,
        padding:5
    },
});