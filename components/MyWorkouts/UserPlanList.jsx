import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'
import { Colors } from '@/constants/Colors'
import UserPlanCard from './UserPlanCard'

export default function UserPlanList(userWorkouts) {
    
    const workoutsArray = userWorkouts?.userWorkouts || []
    if (workoutsArray.length === 0) {
        return (
            <View>
                <Text>No workouts available yet.</Text>
            </View>
        );
    }
    // console.log(workoutsArray.length)
    // console.log(workoutsArray[1])
    const latestPlan = workoutsArray[workoutsArray.length-1]
    const otherPlans = workoutsArray.slice(0, workoutsArray.length - 1)
    const router = useRouter()

  return (
    <View>
      <Image 
      source={require('../../assets/images/gym.png')}
      style={{
        width:'100%',
        height:240,
        objectFit:'cover',
        borderRadius:15,
    }}
      />
      <View style={{marginTop:10}}>
        <Text style={{
            fontFamily:'outfit-medium',
            fontSize:24
        }}
        >Goal: {latestPlan.goal}</Text>
        <View style={{
                display:'flex',
                flexDirection:'row',
                justifyContent:'space-between',marginTop:5
            }}>
        <Text style={{
                fontFamily:'outfit',
                fontSize:17,
                color:Colors.GRAY
            }}>For: {latestPlan.forUser}</Text>

        <Text style={{
            fontFamily:'outfit',
            fontSize:17,
            color:Colors.GRAY
        }}> Gym: {latestPlan.gym}</Text>
               

        </View>
        <TouchableOpacity 
            onPress={()=>router.push({pathname:'/plan-details'
                ,params:{
                planWithInfo:JSON.stringify(latestPlan)
            }
        })}
            style={{
                backgroundColor:Colors.PRIMARY,
                padding:15,
                borderRadius:15,
                marginTop:10
            }}>
                <Text style={{
                    color:Colors.WHITE,
                    textAlign:'center',
                    fontFamily:'outfit-medium',
                    fontSize:15
                }}>See your plan</Text>
            </TouchableOpacity>

             {/* {userTrips.map((trip,index)=>(
            <UserTripCard trip={trip} key={index} />
        ))}   */}
            {otherPlans.map((plan,index)=>(
                <UserPlanCard key={index} workout={plan} />
            ))}
      </View>
      
    </View>
  )
}