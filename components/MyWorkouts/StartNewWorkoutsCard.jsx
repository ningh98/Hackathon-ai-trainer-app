import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5'
import { Colors } from '@/constants/Colors'
import { useRouter } from 'expo-router'


export default function StartNewWorkoutsCard() {

  const router = useRouter()

  return (
    <View
    style={{
      padding:20,
      marginTop:50,
      display:'flex',
      alignItems:'center',
      gap:25
    }}
    >
      <FontAwesome5 name="dumbbell" size={24} color="black" />
      <Text
      style={{
        fontSize:25,
        fontFamily:'outfit-medium',
      }}
      >No workout planned yet</Text>

      <Text
      style={{
        fontSize:20,
        fontFamily:'outfit',
        textAlign:'center',
        color: Colors.GRAY
      }}
      >Looks like its time to make a new workout plan! Get Started below</Text>

      <TouchableOpacity
      onPress={()=>router.push('/create-workout/start-create-workout')}
      style={{
        padding:15,
        backgroundColor:Colors.PRIMARY,
        borderRadius:15,
        paddingHorizontal:30
      }}
      >
        <Text
        style={{
          color:Colors.WHITE,
          fontFamily:'outfit-medium',
          fontSize:17
        }}>
          Create a new workout plan
        </Text>
        
      </TouchableOpacity>

    </View>
  )
}