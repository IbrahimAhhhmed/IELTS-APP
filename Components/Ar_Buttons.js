import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from "react-native";
import {MaterialCommunityIcons} from '@expo/vector-icons';

const ArButtons = ({text, onPress, name}) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.container}>
                <MaterialCommunityIcons name={name} size={30} color={'black'}/>
                <Text style={styles.text}> {text} </Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        paddingVertical: 20,
        borderRadius: 20,
        marginVertical: 10,
        marginHorizontal: 10,
    },
    text: {
        fontSize: 14,
        fontWeight: '500',
        padding: 5,
    },
})

export default ArButtons;