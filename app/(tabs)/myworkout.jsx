import { View, Text } from 'react-native'
import React, {useState} from 'react'
import { Colors } from '@/constants/Colors'
import Ionicons from '@expo/vector-icons/Ionicons'
import StartNewWorkoutsCard from '../../components/MyWorkouts/StartNewWorkoutsCard'

export default function MyWorkout() {

  const [userWorkouts,setUserWorkous] = useState([])

  return (
    <View style={{
      padding: 25,
      paddingTop: 55,
      backgroundColor:Colors.WHITE,
      height:'100%'
    }}>
      <View style={{
        display:'flex',
        flexDirection:'row',
        alignContent:'center',
        justifyContent:'space-between'
      }}>
        <Text style={{
          fontFamily: 'outfit-bold',
          fontSize:35
        }}
        >My Workout</Text>
        <Ionicons name="add-circle" size={50} color="black" />
      </View>
      
      {userWorkouts?.length==0
        ?<StartNewWorkoutsCard/>
        :null
      }

    </View>
  )
}