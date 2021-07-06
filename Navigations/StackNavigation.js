import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import HomeScreen from "../Screens/HomeScreen";
import ExamplesScreen from "../Screens/ExamplesScreen";
import ContentScreen from "../Screens/ContentScreen";
import BandCalculator from "../Screens/BandCalculator";
import DrawerNavigation from "./DrawerNavigation";
import FormScreen from "../Screens/FormScreen";

const Stack = createStackNavigator();

const StackNavigation = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name={'Home'} component={DrawerNavigation} />
            <Stack.Screen name={'Form'} component={FormScreen} />
            <Stack.Screen name={'Examples'} component={ExamplesScreen} />
            <Stack.Screen name={'Content'} component={ContentScreen} />
            <Stack.Screen name={'Calculator'} component={BandCalculator} />
        </Stack.Navigator>
    );
};

export default StackNavigation;