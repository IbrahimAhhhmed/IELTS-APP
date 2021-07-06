import React, {useState} from 'react';
import {View, TextInput, StyleSheet, Text} from "react-native";
import ArButtons from "../Components/Ar_Buttons";

const BandCalculator = () => {

    const [input, setInput] = useState(0);
    const [visible, setVisible] = useState(false);
    const [band, setBand] = useState(0);

    const Calculate = () => {
        if(input == 39 || input == 40){
            setBand(9);
            setVisible(true);
        }
        else if(input == 37 || input == 38){
            setBand(8.5);
            setVisible(true);
        }
        else if(input == 35 || input == 36){
            setBand(8);
            setVisible(true);
        }
        else if(input >= 32 && input <=34){
            setBand(7.5);
            setVisible(true);
        }
        else if(input == 30 || input == 31){
            setBand(7);
            setVisible(true);
        }
        else if(input >= 26 && input <=29){
            setBand(6.5);
            setVisible(true);
        }
        else if(input >= 23 && input <=25){
            setBand(6);
            setVisible(true);
        }
        else if(input >= 18 && input <=22){
            setBand(5.5);
            setVisible(true);
        }
        else if(input == 16 || input == 17){
            setBand(5);
            setVisible(true);
        }
        else if(input >= 13 && input <=15){
            setBand(4.5);
            setVisible(true);
        }
        else if(input == 11 || input == 12){
            setBand(4);
            setVisible(true);
        }
    }

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Type a number"
                onChangeText={(value) => setInput(value)}
                keyboardType="numeric"/>

            <ArButtons text={'Calculate'} onPress={() => Calculate()} />

            {visible ? <Text> Band Score: {band} </Text> : <Text/>}
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
    },
});
export default BandCalculator;