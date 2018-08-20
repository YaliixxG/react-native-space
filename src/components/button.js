import React, {Component} from 'react';
import {StyleSheet,View,Text} from 'react-native'

export default class Button extends Component{
    constructor(props){
    super(props)
    }
    render(){
        return(
            <View style={styles.button}>
            <Text>{this.props.name}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    button:{
		alignItems: 'center',
        height:30,
   }
})
