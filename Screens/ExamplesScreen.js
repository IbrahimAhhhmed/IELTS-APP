import React from 'react';
import {View, StyleSheet} from "react-native";
import ArButtons from "../Components/Ar_Buttons";
import Header from "../Components/Header";

const ExamplesScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Header navigation={navigation} />
            <ArButtons onPress={() => navigation.navigate('Content')} text={'Band 8 writing sample 1'}/>
            <ArButtons onPress={() => navigation.navigate('Content')} text={'Band 8 writing sample 2'}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
    },
});

export default ExamplesScreen;