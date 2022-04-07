import React, { useState } from 'react';
import { View, StyleSheet, SafeAreaView, Text, Pressable, StatusBar, Image, ScrollView, TextInput, Dimensions, FlatList } from 'react-native';
import { MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons'
import COLORS from '../../const/Colors';
import houses from '../../const/Houses'
const { width } = Dimensions.get('screen');

const optionsList = [
    { title: 'Buy a Home', img: require('../../assets/house1.jpg') },
    { title: 'Rent a Home', img: require('../../assets/house2.jpeg') },
];
const categoryList = ['Popular', "Recommended", "Nearest"]
const HomeScreen = ({ navigation }) => {
    const [selectedCategory, setSelectedCategory] = useState(0)
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar translucent={false} backgroundColor={COLORS.white} barStyle='dark-content' />
            <View style={styles.header}>
                <View>
                    <Text style={{ color: COLORS.grey }}>Location</Text>
                    <Text style={{ color: COLORS.dark, fontSize: 16 }}>Canada</Text>
                </View>
                <Image source={require('../../assets/person.jpeg')} style={styles.profileImg} />
            </View>
            <ScrollView>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20 }}>
                    <View style={styles.searchContainer}>
                        <MaterialCommunityIcons name='search-web' color={COLORS.dark} size={25} />
                        <TextInput placeholder='Search by name ,city ,country' />
                    </View>
                    <View style={styles.sortContainer}>
                        <MaterialCommunityIcons name='sort' color={COLORS.white} size={30} />

                    </View>
                </View>

                <View style={styles.listCardOptions}>
                    {optionsList.map((option, index) => {
                        return <View style={styles.cardItem} key={index}>
                            <Image source={option.img} style={styles.cardImage} />
                            <Text style={{ marginTop: 10, fontSize: 18, fontWeight: 'bold' }}>{option.title}</Text>
                        </View>
                    })}

                </View>

                <View style={styles.categoryListContainer}>
                    {categoryList.map((cat, index) => {
                        return <Pressable key={index} onPress={() => setSelectedCategory(index)}>
                            <View style={index == selectedCategory && styles.ActiveCateryListView}>
                                <Text style={[styles.cateryListText, index == selectedCategory && styles.ActiveCateryListText]}>{cat}</Text>
                            </View>
                        </Pressable>
                    })}
                </View>
                <FlatList
                    snapToInterval={width - 20}
                    contentContainerStyle={{ paddingLeft: 20, paddingVertical: 20 }}
                    showsHorizontalScrollIndicator={false}
                    horizontal
                    data={houses}
                    renderItem={({ item }) => {
                        return (
                            <Pressable onPress={() => navigation.navigate('Detail', item)}>
                                <View style={styles.cardContainer}>
                                    <Image source={item.image} style={styles.imageCard} />
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
                                        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{item.title}</Text>
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: COLORS.blue }}>$15,00,000</Text>
                                    </View>
                                    <Text style={{ fontSize: 14, marginTop: 5, color: COLORS.grey }}>{item.location}</Text>
                                    <View style={{ flexDirection: 'row', marginTop: 10 }}>
                                        <View style={styles.facility}>
                                            <FontAwesome name='bathtub' size={18} />
                                            <Text style={{ marginLeft: 5, marginTop: 3, color: COLORS.grey }}>2</Text>
                                        </View>
                                        <View style={styles.facility}>
                                            <FontAwesome name='hotel' size={18} />
                                            <Text style={{ marginLeft: 5, marginTop: 3, color: COLORS.grey }}>2</Text>
                                        </View>
                                        <View style={styles.facility}>
                                            <FontAwesome name='th-large' size={18} />
                                            <Text style={{ marginLeft: 5, marginTop: 3, color: COLORS.grey }}>100m</Text>
                                        </View>
                                    </View>
                                </View>
                            </Pressable>

                        )
                    }} />

            </ScrollView>

        </SafeAreaView>)
}

const styles = StyleSheet.create({
    container: { flex: 1 },
    header: {
        height: 80,
        padding: 20,
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    profileImg: {
        height: 50,
        width: 50,
        borderRadius: 25
    },
    searchContainer: {
        backgroundColor: COLORS.light,
        height: 50,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 12,
        paddingHorizontal: 20,
    },
    sortContainer: {
        backgroundColor: COLORS.dark,
        height: 50,
        width: 50,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
    },
    listCardOptions: {
        flexDirection: 'row',
        marginHorizontal: 20,
        justifyContent: 'center'
    },
    cardItem: {
        height: 210,
        width: Dimensions.get('window').width / 2 - 30,
        elevation: 15,
        alignItems: 'center',
        backgroundColor: COLORS.white,
        borderRadius: 20,
        paddingTop: 10,
        paddingHorizontal: 10,
        margin: 5
    },
    cardImage: {
        height: 100,
        width: '100%',
        borderRadius: 10

    },
    categoryListContainer: {
        marginTop: 40,
        paddingHorizontal: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    cateryListText: {
        fontSize: 16,
        fontWeight: 'bold',
        paddingBottom: 5,
        color: COLORS.grey,
    },
    ActiveCateryListText: {
        color: COLORS.dark,
        borderColor: COLORS.dark,
        borderBottomWidth: 2,
        paddingBottom: 5,
    },
    ActiveCateryListView: {
        borderColor: COLORS.dark,
        borderBottomWidth: 2,
    },
    cardContainer: {
        height: 250,
        backgroundColor: COLORS.white,
        elevation: 10,
        width: width - 40,
        marginRight: 20,
        padding: 15,
        borderRadius: 20,

    },
    imageCard: {
        width: '100%',
        height: 120,
        borderRadius: 15
    },
    facility: {
        flexDirection: 'row', marginRight: 15
    }
})

export default HomeScreen;