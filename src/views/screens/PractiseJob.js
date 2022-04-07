import React from 'react';
import { View, StyleSheet, Text, SafeAreaView } from 'react-native';

const PractiseJob = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.box1}></View>
            <View style={styles.box2}></View>
            <View style={styles.box3}></View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        flexDirection: 'row'
    },
    box1: {
        height: 50,
        width: 50,
        backgroundColor: 'red'
    },
    box2: {
        height: 50,
        width: 50,
        backgroundColor: 'green'
    },
    box3: {
        height: 50,
        width: 50,
        backgroundColor: 'blue'
    }
})

export default PractiseJob;