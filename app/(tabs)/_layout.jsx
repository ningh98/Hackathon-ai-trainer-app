import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import Ionicons from '@expo/vector-icons/Ionicons'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import { Colors } from '@/constants/Colors'

export default function TabLayout() {
  return (
    <Tabs screenOptions={{
      headerShown:false,
      tabBarActiveTintColor:Colors.PRIMARY
    }}>
        <Tabs.Screen name='myworkout'
          options={{
            tabBarLabel:'My Workout',
            tabBarIcon:({color})=><MaterialCommunityIcons name="dumbbell" size={24} color={color} />
          }}
        />
        <Tabs.Screen name='discover'
          options={{
            tabBarLabel:'Discover',
            tabBarIcon:({color})=><Ionicons name="telescope" size={24} color={color} />
          }}
        />
          
        <Tabs.Screen name='profile'
          options={{
            tabBarLabel:'Profile',
            tabBarIcon:({color})=><MaterialIcons name="emoji-people" size={24} color={color} />
          }}
        />
    </Tabs>
  )
}