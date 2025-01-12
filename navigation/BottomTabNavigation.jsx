import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../constants/index';
import { Home, Profile, Search } from '../screens/index';

import { View, Text } from 'react-native';

const Tab = createBottomTabNavigator();

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
    },
};

const BottomTabNavigation = () =>{
    return (
        <Tab.Navigator screenOptions={ screenOptions }>

            <Tab.Screen 
                name="Home"
                component={ Home }
                options={{
                    tabBarIcon: ({focused})=>{
                        return(
                            <Ionicons name={focused? 'home':'home-outline'}
                                size={23}
                                color={focused? Colors.primary : Colors.gray2} />
                            )
                    },
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
                            )
                    },
                }} />
                
            <Tab.Screen 
                name="Profile" 
                component={ Profile }
                options={{
                    tabBarIcon: ({ focused })=>{
                        return (
                            <Ionicons 
                                name={focused? 'person':'person-outline'} 
                                size={23}
                                color={focused? Colors.primary : Colors.gray2} 
                            />
                        )
                    },
                }} />
            
        </Tab.Navigator>
    );
};

export default BottomTabNavigation;

/*
<View>
<Text>Danna Tamara Reyes Cardenas</Text>
</View>
*/



/**
 * 
 * 
 * const BottomTabNavigation = () => {
    try {
        return (
            <Tab.Navigator screenOptions={screenOptions}>
                <Tab.Screen 
                    name="Home" 
                    component={Home}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <Ionicons 
                                name={focused ? 'home' : 'home-outline'} 
                                size={23} 
                                color={focused ? Colors.primary : Colors.gray2} 
                            />
                        ),
                    }}
                />
                <Tab.Screen 
                    name="Search" 
                    component={Search}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <Ionicons 
                                name={'search-sharp'} 
                                size={23} 
                                color={focused ? Colors.primary : Colors.gray2} 
                            />
                        ),
                    }}
                />
                <Tab.Screen 
                    name="Profile" 
                    component={Profile}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <Ionicons 
                                name={focused ? 'person' : 'person-outline'} 
                                size={23} 
                                color={focused ? Colors.primary : Colors.gray2} 
                            />
                        ),
                    }}
                />
            </Tab.Navigator>
        );
    } catch (error) {
        console.error('Error in BottomTabNavigation:', error);
        return (
            <View>
                <Text>Error loading navigation: {error.message}</Text>
            </View>
        );
    }
};
 */