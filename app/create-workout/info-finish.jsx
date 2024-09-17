import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect,useContext } from 'react'
import { useNavigation } from 'expo-router'
import Colors from '@/constants/Colors'
import Ionicons from '@expo/vector-icons/Ionicons'
import { useRouter } from 'expo-router'
import CreateWorkoutContext from '../../context/CreateWorkoutContext'
import { useMutation } from 'convex/react';
import {userWorkoutinfo} from '../../convex/userWorkoutInfo'
import { api } from '../../convex/_generated/api'



export default function StartCreateWorkout() {
    const {infoData, setInfoData}=useContext(CreateWorkoutContext)
    const router = useRouter()
    const submitUserWorkoutInfo = useMutation(api.userWorkoutInfo.UserWorkoutInfo);
    const handleSave = async () => {
        try {
          // await submitUserWorkoutInfo(infoData);
          // console.log('User info saved successfully');
          // Here you could trigger the AI process to create the workout plan
          router.replace('/create-workout/generate-workout')
        } catch (error) {
          console.error('Failed to save user info', error);
        }
      };

    const navigation=useNavigation()
    useEffect(()=>{
        console.log(infoData)
        navigation.setOptions({
            headerShown:true,
            headerTransparent:true,
            headerTitle:'Plan Workout',
            headerBackTitle: '',
            headerBackTitleVisible: false,
            headerTintColor: Colors.PRIMARY,
            
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
      >That's all we need, get ready to a customized plan</Text>
    <TouchableOpacity
    onPress={handleSave}
    style={{
        bottom:-190,
        padding:15,
        backgroundColor:Colors.PRIMARY,
        borderRadius:15,
        paddingHorizontal:30,
        width: 150,
        alignItems: 'center',
      }}
    >
        <Text
        style={{
          color:Colors.WHITE,
          fontFamily:'outfit-medium',
          fontSize:17
        }}>
          Next
        </Text>
    </TouchableOpacity>
    </View>
  )
}