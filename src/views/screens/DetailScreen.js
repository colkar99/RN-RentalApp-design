import React from 'react';
import { View, StyleSheet, SafeAreaView, Text, ImageBackground, ScrollView, Dimensions, Image } from 'react-native';
import { MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons'

import COLORS from '../../const/Colors';
import { FlatList } from 'react-native-gesture-handler';

const DetailScreen = ({ navigation, route }) => {
    const house = route.params;
    console.log(house)
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.backgroundImageContainer}>
                    <ImageBackground style={styles.imageBackground} source={house.image} >
                        <View style={styles.header}>
                            <View style={styles.headerBtn}>
                                <MaterialCommunityIcons name='keyboard-backspace' size={20} onPress={() => navigation.goBack()} />
                            </View>
                            <View style={styles.headerBtn}>
                                <MaterialCommunityIcons name='heart' size={20} color={COLORS.red} />
                            </View>
                        </View>
                    </ImageBackground>
                    <View style={styles.virtualTab}>
                        <Text style={{ color: COLORS.white }}>Virtual Tour</Text>
                    </View>
                </View>
                <View style={styles.detailContainer}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{house.title}</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View style={styles.ratingContainer}>
                                <Text style={{ color: COLORS.white }}>4.5</Text>
                            </View>
                            <Text style={{ marginLeft: 5 }}>155 ratings</Text>
                        </View>
                    </View>
                    <Text style={{ fontSize: 14, color: COLORS.grey }}>{house.location}</Text>
                    <View style={styles.faciltiyContainer}>
                        <View style={styles.facility}>
                            <FontAwesome name='bathtub' size={20} />
                            <Text style={{ fontSize: 15, marginLeft: 5, marginTop: 3, color: COLORS.grey }}>2</Text>
                        </View>
                        <View style={styles.facility}>
                            <FontAwesome name='hotel' size={20} />
                            <Text style={{ fontSize: 15, marginLeft: 5, marginTop: 3, color: COLORS.grey }}>2 beds</Text>
                        </View>
                        <View style={styles.facility}>
                            <FontAwesome name='th-large' size={20} />
                            <Text style={{ fontSize: 15, marginLeft: 5, marginTop: 3, color: COLORS.grey }}>100m area</Text>
                        </View>
                    </View>
                    <Text style={{ marginTop: 40, fontSize: 16, color: COLORS.grey }}>{house.details}</Text>
                    <FlatList
                        keyExtractor={(_, key) => key.toString()}
                        contentContainerStyle={{ marginTop: 40 }}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={house.interiors}
                        renderItem={({ item }) => {
                            return <Image source={item} style={{ height: 80, width: Dimensions.get('screen').width / 3 - 20, borderRadius: 10, marginRight: 10 }} />
                        }}
                    />
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10, backgroundColor: COLORS.light, marginTop: 40, alignItems: 'center', height: 80, borderRadius: 15 }}>
                        <View>
                            <Text style={{ fontSize: 18, fontWeight: 'bold', color: COLORS.blue }}>$15,00,000</Text>
                            <Text style={{ fontSize: 16, fontWeight: 'bold', color: COLORS.grey }}>Total Price</Text>
                        </View>
                        <View style={{ backgroundColor: COLORS.dark, borderRadius: 15, padding: 20, height: 50 }}>
                            <Text style={{ fontSize: 18, color: COLORS.white }}>Book Now</Text>

                        </View>
                    </View>
                </View>
            </ScrollView>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white
    },
    backgroundImageContainer: {
        alignItems: 'center',
        marginTop: 10,
        marginHorizontal: 10,
        elevation: 20,
        height: 300,
    },
    imageBackground: {
        height: '100%',
        width: '100%',
        borderRadius: 20,
        overflow: 'hidden'

    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        paddingHorizontal: 10
    },
    headerBtn: {
        height: 50,
        width: 50,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.white
    },
    virtualTab: {
        top: -20,
        width: 120,
        height: 40,
        backgroundColor: COLORS.dark,
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15
    },
    detailContainer: {
        flex: 1,
        marginTop: 40,
        paddingHorizontal: 20,
    },
    ratingContainer: {
        height: 30,
        width: 35,
        backgroundColor: COLORS.blue,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    faciltiyContainer: {
        flexDirection: 'row',
        marginTop: 20,

    },
    facility: {
        flexDirection: 'row', marginRight: 15
    }
})

export default DetailScreen;