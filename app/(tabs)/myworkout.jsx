import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React, {useState, useEffect} from 'react'
import { Colors } from '@/constants/Colors'
import Ionicons from '@expo/vector-icons/Ionicons'
import StartNewWorkoutsCard from '../../components/MyWorkouts/StartNewWorkoutsCard'
import { useRouter } from 'expo-router'
import UserPlanList from '../../components/MyWorkouts/UserPlanList'
import { useQuery } from 'convex/react' 
import { api } from '../../convex/_generated/api' 

export default function MyWorkout() {

  // const [userWorkouts,setUserWorkouts] = useState([])
  const [loading,setLoading] = useState(false)
  const router = useRouter()

  // setUserWorkouts(useQuery(api.userWorkoutInfo.getAllUserWorkouts))
  const userWorkouts = useQuery(api.userWorkoutInfo.getAllUserWorkouts)
  
  
  return (
    <ScrollView style={{
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
        <TouchableOpacity
        onPress={()=>router.push('/create-workout/start-create-workout')}>
          <Ionicons name="add-circle" size={50} color="black" />
        </TouchableOpacity>
      </View>
      
      {userWorkouts?.length==0
        ?<StartNewWorkoutsCard/>
        :<UserPlanList userWorkouts={userWorkouts}/>
        // : <StartNewWorkoutsCard/>
      }

    </ScrollView>
  )
}