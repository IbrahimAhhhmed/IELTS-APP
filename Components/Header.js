import React from 'react';
import {View, StyleSheet, Text,TouchableHighlight,Button} from "react-native";
import {Entypo, Ionicons} from '@expo/vector-icons';
import Constant from 'expo-constants';
import {
    MenuContext,
    Menu,
    MenuOptions,
    MenuOption,
    MenuTrigger,
} from 'react-native-popup-menu';

const Header = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={{flexDirection: 'row'}}>
                <Entypo name={'menu'} size={28} onPress={() => navigation.openDrawer()}/>
                <Text style={styles.text}> IELTS APP </Text>
            </View>
            <View>
                <MenuContext>
                    <Menu>
                        <MenuTrigger>
                            <Ionicons style={styles.ellipsis} name={'ellipsis-vertical'} size={28} />
                        </MenuTrigger>

                        <MenuOptions style={styles.menu}>
                            <MenuOption onSelect={() => alert(`Save`)} text="Save" />
                            <MenuOption onSelect={() => alert(`Delete`)}>
                                <Text style={{ color: 'red' }}>Delete</Text>
                            </MenuOption>
                            <MenuOption
                                onSelect={() => alert(`Not called`)}
                                disabled={true}
                                text="Disabled" s
                            />
                        </MenuOptions>
                    </Menu>
                </MenuContext>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        marginTop: Constant.statusBarHeight,
        width: '100%',
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'red',
    },
    text: {
        fontWeight: 'bold',
        fontSize: 20,
    },
    ellipsis: {
        marginBottom: 2,
    },
    menu: {
        // position:'absolute',
        // top:0,
        // right:0,
        // zIndex: 5,
        // alignItems: 'center',
        // justifyContent: 'center',
        flexDirection: 'row',
    },
});
export default Header;