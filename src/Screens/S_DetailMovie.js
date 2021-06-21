import React, { Component } from 'react';
import {Text, View, Image} from 'react-native';
import * as Services from '../services/Services'

export default class S_DetailActor extends Component {
    constructor(props){
        super(props);

        // Récupère le film passé en paramètre de la navigation
        this.movie = this.props.route.params.movie;

        // Etats
        this.state = {
            details:{},
            casting:[]
        }

      

        // Récupère les données relatices au film sélectionné
        Services.getMovieDetails(this.movie.id)
            .then(json => {
                console.log(json);
                this.setState({details:json});
                console.log(this.state.details);

                Services.getMovieCredits(this.movie.id)
                    .then(json => {
                        console.log(json)
                        this.setState({casting:json.cast})
                        console.log(this.state.casting);
                        console.log(this.state.casting[0]);
                    })
            })
    }
    
    
    render() {
        console.log(this.movie);
        console.log(this.state);
        return(
            <View>
                <Text>Détails du film, écran détail movie</Text>
                <Text>Titre : {this.movie.title}</Text>
                <Text>Résumé : {this.movie.overview}</Text>

                
                <Text> {this.state.details.status}</Text>

                <Image style={{width:400, height:200}} source={{ uri:Services.getImage(780, this.state.details.backdrop_path)}}/>

                <Text>{this.state.casting[0].character}</Text>
                
            </View>
        )
    }
}