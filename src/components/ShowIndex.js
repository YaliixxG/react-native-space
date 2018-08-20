import React, {Component} from 'react';
import {FlatList,StyleSheet,View,Text,TextInput} from 'react-native'
import axios from 'axios'


const host = 'https://api.douban.com/v2/book/search?q='
const search = (params)=> {
    axios.get(host+params).then(res=>{
        console.warn(res.data)
        this.setState({
            searchData: this.searchData = res.data
        })
    })
}
 class ShowIndex extends Component{
    constructor(props){
    super(props)
    this.searchData=[]
    }

    render(){
        return(            
            <View style={styles.showIndexWrap}>
            <FlatList
          data={this.searchData}
          renderItem={({item}) => <Text style={styles.item}>{item.title}</Text>}
        />
            </View>

        )
    }
}
export default {
    ShowIndex,
    search
}
const styles = StyleSheet.create({
    showIndexWrap:{
        height:500,
        borderWidth:1,
        borderColor:'#ccc',
        marginTop:30
   },
   showitemWrap:{
       width:150,
       height:100,
       backgroundColor:'#f00',

   }
})
