import React from 'react';
import {Text, View, StyleSheet, TextInput, TouchableOpacity, Image} from 'react-native';
import * as G from '../global';
import * as Services from '../services/Services'; 


// Largeur des items
const size = G.wSC / G.numColumns - 10;


// Custom element pour faire un bouton
export default class C_MovieItem extends React.Component {
    constructor(props) {
        super(props)
    }

     render(){
         const movie = this.props.movie;
         const index= this.props.index;
         return(
             <TouchableOpacity
                style={styles.itemContainer}
                onPress={() => this.props.onSelectMovie(movie)}
             >
                 <View >
                 <Text >Film n° : {this.props.index + 1}</Text>
                 </View>

                 <Text style={{fontSize:18, fontWeight:'bold'}}>{movie.title}</Text>

                 <Image style={{width:size - 20, height:154*1.6}} source={{ uri:Services.getImage(300, movie.poster_path)}}/>

                 <Text >
                    Date de sortie : {movie.release_date}
                 </Text>

                 <Text >
                    Popularité : {movie.popularity} / Note moyenne : {movie.vote_average}
                 </Text>
             </TouchableOpacity>
         )
     }

}


// styles 

const styles = StyleSheet.create ({
    itemContainer: {
        marginLeft: 25,
        marginRight: 25,
        marginTop: 25,
        marginBottom: 25,
    },
});