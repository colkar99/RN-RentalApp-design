import React from 'react';
import { View, StyleSheet, SafeAreaView, Text, Image, StatusBar, TouchableOpacity } from 'react-native';

import COLORS from '../../const/Colors';

const OnBoardScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <StatusBar translucent backgroundColor={COLORS.transparent} />
            <Image source={require('../../assets/onboardImage.jpeg')} style={styles.image} />
            <View style={styles.indicatorContainer}>
                <View style={styles.indicator}></View>
                <View style={styles.indicator}></View>
                <View style={[styles.indicator, styles.activeIndicator]}></View>
            </View>
            <View style={{ paddingHorizontal: 20, marginTop: 20 }}>
                <View>
                    <Text style={styles.title}>Find Your</Text>
                    <Text style={styles.title}>Sweet Home</Text>
                </View>
                <View style={{ marginTop: 20 }}>
                    <Text style={styles.lightText}>Schedule visit in just two clicks</Text>
                    <Text style={styles.lightText}>Visit in just few clicks!!</Text>

                </View>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
                    <Text style={{ alignSelf: 'center', color: COLORS.white }}>Get Started</Text>
                </TouchableOpacity>
            </View>

        </View>)
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white
    },
    image: {
        height: 450,
        width: '100%',
        borderBottomLeftRadius: 100
    },
    indicatorContainer: {
        height: 8,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        padding: 5
    },
    indicator: {
        height: 3,
        width: 30,
        marginHorizontal: 5,
        backgroundColor: COLORS.grey
    },
    activeIndicator: {
        backgroundColor: COLORS.dark
    },
    title: {
        fontSize: 36,
        fontWeight: 'bold'
    },
    lightText: {
        fontSize: 16,
        color: COLORS.grey
    },
    buttonContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingBottom: 40
    },
    button: {
        backgroundColor: COLORS.dark,
        height: 60,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 20
    }
})

export default OnBoardScreen;