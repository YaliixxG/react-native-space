import React, { Component } from 'react'
import { StyleSheet, View, Text, TextInput } from 'react-native'
import $ from './ShowIndex'

export default class Search extends Component {
    constructor(props) {
        super(props)
        this.state = { text: '' }
    }
    endEditing(p) {
        $.search(p)
    }
    render() {
        return (
            <View style={styles.searchWrap}>
                <TextInput
                    style={{ height: 30, width: 300 }}
                    placeholder="输入图书名"
                    underlineColorAndroid="transparent"
                    onChangeText={text => this.setState({ text })}
                    onEndEditing={event =>
                        this.endEditing(event.nativeEvent.text)
                    } //提交输入值的方法
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    searchWrap: {
        width: 300,
        height: 30,
        borderWidth: 1,
        borderColor: '#ccc',
        marginTop: 10,
        alignItems: 'center'
    }
})
