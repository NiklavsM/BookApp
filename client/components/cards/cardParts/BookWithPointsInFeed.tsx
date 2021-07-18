import * as React from 'react';
import { Image, StyleSheet, TouchableWithoutFeedback, View } from "react-native"
import PointsCircle from '../../PointsCircle';

const BookWithPointsInFeed = ({imgUrl, points}: any) => {


    return (
        <TouchableWithoutFeedback>
            <View style={styles.card}>
                <View style={styles.upperPart}>
                    <View style={styles.pointsCircle}>
                        <PointsCircle points={points}/>
                    </View>
                </View>
                <View style={styles.lowerPart}>
                    <Image style={styles.image}
                           source={{uri:imgUrl}}/>
                </View>
            </View>

        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    card: {
        overflow: 'hidden',
        width: 154,
        height: 244,
    },
    upperPart: {
        height: "6%",
        zIndex: 999

    },
    lowerPart: {
        height: "94%",
    },
    image: {
        width: 138,
        height: 200,
    },
    boldText: {
        fontWeight: 'bold',
        fontSize: 16
    },
    pointsCircle: {
        alignSelf: 'flex-end',
        // position: 'absolute',
    }
})

export default BookWithPointsInFeed;
