import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import BookWIthPointsCardFullBookScreen from './cardParts/BookWIthPointsCardFullBookScreen';
import BookWithPointsInFeed from './cardParts/BookWithPointsInFeed';

const BookCardFeed = ({title, author, imgUrl}: any) => {

    return (
        <View style={styles.card}>
            <BookWithPointsInFeed imgUrl={imgUrl}/>
            <View style={styles.rightSection}>

                <Text style={styles.title}>{title}</Text>
                <Text style={styles.author}>{author}</Text>
                <View style={styles.category}>
                    <Text style={{margin: 20}}>Politics</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        flexDirection: "row",
        width: '100%',
        marginBottom: 16
    },
    category: {
        height: 35,
        borderRadius: 10,
        backgroundColor: "#dcdcdc",
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        alignSelf: 'flex-start'
    },
    rightSection: {
        justifyContent: 'flex-end',
        marginBottom: 29,
        flexShrink: 1

    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    author: {
        fontSize: 15,
    }
})

export default BookCardFeed;
