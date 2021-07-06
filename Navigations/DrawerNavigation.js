import React from 'react';
import { createDrawerNavigator } from "@react-navigation/drawer";
import ExamplesScreen from "../Screens/ExamplesScreen";
import ContentScreen from "../Screens/ContentScreen";
import StackNavigation from "./StackNavigation";
import CustomDrawerComponent from "../Components/CustomDrawerComponent";
import HomeScreen from "../Screens/HomeScreen";

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
    return (
        <Drawer.Navigator
            drawerContent={props => <CustomDrawerComponent {...props} />}
        >
            <Drawer.Screen name={'Home'} component={HomeScreen} />
            <Drawer.Screen name={'Examples'} component={ExamplesScreen} />
            <Drawer.Screen name={'Content'} component={ContentScreen} />
        </Drawer.Navigator>
    );
};

export default DrawerNavigation;