import { View,Text } from 'react-native';
import React from 'react';
import { createBottomTabNavigation } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Search from '../screens/Search';
import Profile from '../screens/Profile';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../constants/index';

const Tab = createBottomTabNavigation();

const screenOptions = {
    tabBarShowLabel:false,
    tabBarHideOnKeyboard:true,
    headerShown:false,
    tabBarStyle:{
        position:'absolute',
        bottom:0,
        right:0,
        left:0,
        elevation:0,
        height:70
    }
};

const BottomTabNavigation = () =>{
    return (
        <Tab.Navigation screenOptions={screenOptions}>
            <Tab.Screen 
                name="Home" 
                component={ Home }
                options={{
                    tabBarIcon: ({focused})=>{
                        return (
                            <Ionicons name={focused? 'home':'home-outline'} 
                                size={23}
                                color={focused? Colors.primary : Colors.gray2} />
                            );
                    }
                }} />

            <Tab.Screen 
                name="Search" 
                component={ Search }
                options={{
                    tabBarIcon: ({focused})=>{
                        return (
                            <Ionicons name={'search-sharp'} 
                                size={23}
                                color={focused? Colors.primary : Colors.gray2} 
                                />
                            );
                    },
                }} />
                
            <Tab.Screen 
                name="Profile" 
                component={ Profile }
                options={{
                    tabBarIcon: ({focused})=>{
                        return (
                            <Ionicons 
                                name={focused? 'person':'person-outline'} 
                                size={23}
                                color={focused? Colors.primary : Colors.gray2} 
                            />
                        );
                    },
                }} />
        </Tab.Navigation>
    );
};

export default BottomTabNavigation;