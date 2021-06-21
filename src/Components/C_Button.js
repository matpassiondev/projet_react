import React from 'react';
import {Text, View, StyleSheet, TextInput,} from 'react-native';
import {Button} from 'react-native-elements';
import * as Services from '../services/Services';

// Custom element pour faire un bouton
export default class C_Button extends React.Component {

    constructor() {
        //Instancie la super-class
        super();
    }

    // Rendre les éléments graphiques associés au composants
    render() {

        return(
            <View style={styles.container}>
            <Button
                title={"Top Rated"}
                buttonStyle={styles.bouton}
                titleStyle={styles.titleButton}
                onPress={()=> {
                    console.log("Press Top Rated")
                    Services.getTopRated(1).then(json => {
                        console.log(json)
                        this.props.onFilter(json)
                    })
                }}
            />
            <Button
                title={"Popular"}
                buttonStyle={styles.bouton}
                titleStyle={styles.titleButton}
                onPress={()=> {
                    console.log("Press Popular")
                    Services.getPopular(1).then(json => {
                        console.log(json)
                        this.props.onFilter(json)
                    })
                }}
            />
            <Button
                title={"Latest"}
                buttonStyle={styles.bouton}
                titleStyle={styles.titleButton}
                onPress={()=> {
                    console.log("Press Latest")
                    Services.getLatest(1).then(json => {
                        console.log(json)
                        this.props.onFilter(json)
                    })
                }}
            />
            <Button
                title={"Upcoming"}
                buttonStyle={styles.bouton}
                titleStyle={styles.titleButton}
                onPress={()=> {
                    console.log("Press Upcoming")
                    Services.getUpcoming(1).then(json => {
                        console.log(json)
                        this.props.onFilter(json)
                    })
                }}
            />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        width: 300,
        display:'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 25,
    },
    bouton:{
        backgroundColor:'#554a9f'
    
    },
    titleButton:{
        fontSize:10,

    },
});