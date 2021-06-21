import React, { Component } from 'react';
import {FlatList, Text, View} from 'react-native';
import {Button} from 'react-native-elements';

import C_SearchBar from './../Components/C_SearchBar';
import C_Button from './../Components/C_Button';
import C_MovieItem from './../Components/C_MovieItem';
import * as G from '../global'


export default class S_Movies extends Component {
    constructor(props){
        super(props);
        this.state ={
            movies:[],
            totalResult:0
        }
    }

    updateMovies=(json)=> {
        console.log("updateMovies depuis S_movies > Données recues:", json);
        this.setState({
            movies:json.results,
            totalResult:json.total_results
        })
    }

    onSelectMovie = (movie) => {
        this.props.navigation.navigate('DetailMovie', {movie:movie});
    }

    render() {
        return(
            <View>
                <Text>Ecran Movies</Text>

                <Button 
                    title={"Accès Détail Movie"}
                    onPress={() => {this.props.navigation.navigate('DetailMovie'); }}
                    />

                <Button 
                    title={"Accès Détail Actor"}
                    onPress={() => {this.props.navigation.navigate('DetailActor'); }}
                    />

                <C_SearchBar onSubmit={this.updateMovies}></C_SearchBar>
                <C_Button onFilter={this.updateMovies}></C_Button>
                <FlatList
                data={this.state.movies}
                renderItem = {({item,index})=> <C_MovieItem movie={item } index={index} onSelectMovie={this.onSelectMovie}></C_MovieItem>}
                keyExtractor= {item => {item.id}}
                numColumns={G.numColumns}
                
                ></FlatList>
            </View>
        )
    }
}