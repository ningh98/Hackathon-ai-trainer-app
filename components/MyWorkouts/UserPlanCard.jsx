import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'
import { Colors } from '@/constants/Colors'

export default function UserPlanCard({workout}) {

    const router = useRouter()
  return (
    <TouchableOpacity onPress={()=>router.push({pathname:'/plan-details'
        ,params:{
        planWithInfo:JSON.stringify(workout)
    }
})}
     style={{
        marginTop:20,
        display:'flex',
        flexDirection: 'row',
        gap:10,
        alignItems:'center'
    }}>
        <Image source={require('../../assets/images/gym.png')}
            style={{
                width:100,
                height:100,
                borderRadius:15
            }}
        />
        <View>
            <Text style={{
            fontFamily: 'outfit-medium',
            fontSize: 18
            }}>
            Goal: {workout.goal}
            </Text>
            <Text style={{
            fontFamily: 'outfit',
            fontSize: 14,
            color: Colors.GRAY
            }}>
            For: {workout.forUser}
            </Text>
            <Text style={{
            fontFamily: 'outfit',
            fontSize: 14,
            color: Colors.GRAY
            }}>
            Gym: {workout.gym}
            </Text>
        </View>

    </TouchableOpacity>
  )
}