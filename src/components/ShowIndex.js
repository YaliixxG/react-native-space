import React, { Component } from 'react'
import { FlatList, StyleSheet, View, Text, Image } from 'react-native'
import axios from 'axios'

const host = 'https://api.douban.com/v2/'
class ShowIndex extends Component {
    constructor(props) {
        super(props)
        this.movieItem = []
    }

    componentDidMount() {
        this.showItem()
    }

    showItem(params) {
        axios.get(host + 'movie/top250').then(res => {
            console.warn(res.data.subjects, 'sssss')
            this.setState({
                movieItem: (this.movieItem = res.data.subjects)
            })
        })
    }

    render() {
        return (
            <View>
                <FlatList
                    data={this.movieItem}
                    renderItem={({ item }) => (
                        <View style={styles.itemlist}>
                            <Image
                                source={{
                                    uri: item.images.small,
                                    width: 60,
                                    height: 100
                                }}
                            />
                            <Text style={styles.item}> {item.title} </Text>
                        </View>
                    )}
                />
            </View>
        )
    }
}
export default {
    ShowIndex
    // showItem
}
const styles = StyleSheet.create({
    showIndexWrap: {
        height: 500,
        borderWidth: 1,
        borderColor: '#ccc',
        marginTop: 30
    },
    itemlist: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
})
