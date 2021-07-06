import React from 'react';
import {View, StyleSheet, Text, Image,Button} from "react-native";
import ArButtons from "../Components/Ar_Buttons";
import Header from "../Components/Header";

const HomeScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Header navigation={navigation}/>

            <View style={styles.slideShow}>
                <Image source={{uri: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aWVsdHMlMjB3cml0aW5nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
                    width: '100%', height: 300}}/>
            </View>
            <View style={styles.content}>
                <View style={styles.box}>
                    <ArButtons text={'Academic Writing'} name={'notebook'} onPress={()=> navigation.navigate('Examples')}/>
                </View>
                <View style={styles.box}>
                    <ArButtons style={styles.box} text={'General Writing'} name={'notebook'} onPress={()=> navigation.navigate('Examples')}/>
                </View>
                <View style={styles.box}>
                    <ArButtons style={styles.box} text={'Writing Analysis'} name={'notebook'} onPress={()=> navigation.navigate('Examples')}/>
                </View>
                <View style={styles.box}>
                    <ArButtons style={styles.box} text={'Band Calculator'} name={'calculator'} onPress={()=> navigation.navigate('Calculator')}/>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    slideShow: {
        flex: 1,
        backgroundColor: "#16F158",
    },
    content: {
        flex: 2,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems:'center',
        justifyContent: 'space-around',
        backgroundColor: '#E5E5E5',
    },
    box: {
        width: 180,
    },
    // menu: {
    //     position:'absolute',
    //     right:0,
    //     top:0,
    //     marginTop:-40,
    // },
})

export default HomeScreen;