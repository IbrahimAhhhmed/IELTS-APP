import React from 'react';
import {
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from '@react-navigation/drawer';
import Header from "./Header";

const CustomDrawerComponent = (props) => {
    return (
        <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
            {/*<DrawerItem*/}
            {/*    label="Close drawer"*/}
            {/*    onPress={() => props.navigation.closeDrawer()}*/}
            {/*/>*/}
            {/*<DrawerItem*/}
            {/*    label="Toggle drawer"*/}
            {/*    onPress={() => props.navigation.toggleDrawer()}*/}
            {/*/>*/}
        </DrawerContentScrollView>
    );
};

export default CustomDrawerComponent;