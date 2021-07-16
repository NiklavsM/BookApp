import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import BottomNavigation from './navigation/BottomNavigation';

export default function App() {

    return (
        <View style={styles.container}>
            <StatusBar style="auto"/>
            <BottomNavigation/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
