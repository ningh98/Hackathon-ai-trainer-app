import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from 'expo-router'
import Colors from '@/constants/Colors'
import Ionicons from '@expo/vector-icons/Ionicons'
import { useRouter } from 'expo-router'

export default function StartCreateWorkout() {

    const router = useRouter()

    const navigation=useNavigation()
    useEffect(()=>{
        navigation.setOptions({
            headerShown:true,
            headerTransparent:true,
            headerTitle:'Create Workout',
            headerBackTitle: '',
            headerBackTitleVisible: false,
            headerTintColor: Colors.PRIMARY
        })
    },[])

  return (
    <View
    style={{
        padding:25,
        backgroundColor:Colors.WHITE,
        height:'100%',
        justifyContent:'center',
        alignItems: 'center',
        
    }}
    >
      <Text
      style={{
        fontSize:20,
        fontFamily:'outfit',
        textAlign:'center',
        paddingBottom:90,
        color: Colors.GRAY
      }}
      >Share something about you,and i will tailor a plan for you</Text>
    <TouchableOpacity
    onPress={()=>router.push('/create-workout/info-gender')}
    style={{
        bottom: -150,
    }}
    >
        <Ionicons name="chevron-forward-circle" size={60} color="black" />
    </TouchableOpacity>
    </View>
  )
}