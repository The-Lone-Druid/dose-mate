import React from 'react';
import { useColorScheme } from '@/hooks/useColorScheme';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabTwoScreen from './explore';
import Entypo from '@expo/vector-icons/build/Entypo';
import Ionicons from '@expo/vector-icons/build/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/build/MaterialCommunityIcons';


const Tabs = createBottomTabNavigator();
export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
   
        <Tabs.Navigator 

          screenOptions={{
            tabBarStyle: {
              borderTopWidth: 0,
              elevation: 0,
              backgroundColor:'black'
            },
          }}>
          <Tabs.Screen
            options={{
              unmountOnBlur: true,
              headerShown: false,
              tabBarLabel: 'Home',
              tabBarActiveTintColor:'#8100FF',
              tabBarIcon: ({ color, focused }) =>
                focused ? (
                  <Entypo name='home' size={23} color={'#8100FF'} />
                ) : (
                  <Entypo name='home' size={23} color={'white'} />
                ),
  
            }}
            name="HomeTab"
            component={TabTwoScreen}
          />
          <Tabs.Screen
            options={{
              unmountOnBlur: true,
              headerShown: false,
              tabBarLabel: 'Reminders',
              tabBarActiveTintColor:'#8100FF',
              tabBarIcon: ({ color, focused }) =>
                focused ? (
  
                  <Ionicons name='alarm' size={23} color={'#8100FF'} />
                ) : (
                  <Ionicons name='alarm' size={23} color={'white'} />
                ),
            }}
            name="RemindersTab"
            component={TabTwoScreen}
          />
          <Tabs.Screen
            options={{
              tabBarActiveTintColor:'#8100FF',
              unmountOnBlur: true,
              headerShown: false,
              tabBarLabel: 'Activity',
              tabBarIcon: ({ color, focused }) =>
                focused ? (
                  <MaterialCommunityIcons name='chart-box' size={23} color={'#8100FF'} />
  
                ) : (
                  <MaterialCommunityIcons name='chart-box' size={23} color={'white'}  />
                ),
            }}
            name="ActivityTab"
            component={TabTwoScreen}
          />
  
          <Tabs.Screen
            options={{
              tabBarActiveTintColor:'#8100FF',
              unmountOnBlur: true,
              headerShown: false,
              tabBarLabel: 'Settings',
              tabBarIcon: ({ color, focused }) =>
                focused ? (
                  <Ionicons name='settings-sharp' size={23} color={'#8100FF'} />
  
                ) : (
                  <Ionicons name='settings-sharp' size={23} color={'white'} />
                ),
            }}
            name="SettingsTab"
            component={TabTwoScreen}
          />
         
        </Tabs.Navigator>
    
  );
}
