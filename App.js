import React, { Component } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import {
    Text,
    View,
    StyleSheet,
    Dimensions,
    ImageBackground
} from 'react-native'
import Foot from './src/common/footer'
import Search from './src/components/search'
import $ from './src/components/ShowIndex'

export default class Space extends Component {
    render() {
        const maskColor = `#9f678c`
        const bottomColor = `#718697`
        return (
            <View
                style={{
                    flex: 1
                }}
            >
                <LinearGradient
                    colors={[maskColor, bottomColor]}
                    start={{
                        x: 0,
                        y: 0
                    }}
                    end={{
                        x: 0,
                        y: 1
                    }}
                    locations={[0, 0.75]}
                    style={styles.linearGradient}
                >
                    <View
                        style={{
                            alignItems: 'center'
                        }}
                    >
                        <ImageBackground
                            style={styles.backImg}
                            source={require('./static/img/me.jpg')}
                        />
                    </View>
                    <Text style={styles.appTitle}> 挖坑埋神经病 </Text>
                    <View
                        style={{
                            alignItems: 'center'
                        }}
                    />
                    <Search />
                    <$.ShowIndex />
                    <Foot />
                </LinearGradient>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    linearGradient: {
        height: Dimensions.get('window').height,
        left: 0,
        top: 0,
        width: Dimensions.get('window').width
    },
    buttonText: {
        fontSize: 18,
        fontFamily: 'Gill Sans',
        textAlign: 'center',
        margin: 10,
        color: '#ffffff',
        backgroundColor: 'transparent'
    },
    appTitle: {
        fontWeight: 'bold',
        fontSize: 30,
        textAlign: 'center'
    },
    backImg: {
        alignItems: 'center',
        width: 100,
        height: 100,
        marginTop: 10
    }
})
