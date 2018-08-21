import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import Buttons from '../components/button'

export default class Foot extends Component {
    render() {
        return (
            <View style={styles.footerWrap}>
                <Buttons name="电影" />
                <Buttons name="读书" />
                <Buttons name="同城" />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    footerWrap: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 100,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    }
})
