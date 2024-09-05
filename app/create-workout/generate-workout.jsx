import { View, Text, Image } from 'react-native'
import React ,{ useContext, useEffect,useState } from 'react'
import Colors from '@/constants/Colors'
import CreateWorkoutContext from '../../context/CreateWorkoutContext'
import { chatSession } from '../../configs/Aimodel'
import { useRouter } from 'expo-router'


export default function GenerateWorkout() {

    const {infoData, setInfoData}=useContext(CreateWorkoutContext)
    const [loading,setLoading]=useState(false)
    const router = useRouter()
    
    const GenerateAiWorkoutPlan=async()=>{
        setLoading(true)
        const AI_PROMPT =  `Generate a workout plan based on the user information here: ${JSON.stringify(
            infoData
          )}. Provide the name of each workout, set, rep, tips of movement, brief description of movement in JSON format.`
        console.log(AI_PROMPT)

        // const result = await chatSession.sendMessage(AI_PROMPT);
        // console.log(result.response.text());
        setLoading(false)
        router.push('(tabs)/myworkout')
    }
    
    useEffect(()=>{
        infoData&&GenerateAiWorkoutPlan()
    },[infoData])
  return (
    <View style={{
        padding:25,
        paddingTop:75,
        backgroundColor:Colors.WHITE,
        height:'100%'
    }}>
      <Text style={{
        fontFamily:'outfit-bold',
        fontSize:35,
        textAlign:'center'
      }}>Please Wait...</Text>
      <Text style={{
        fontFamily:'outfit-medium',
        fontSize:20,
        textAlign:'center',
        marginTop:40
      }}>Building your workout plan...</Text>

      <Image source={require('./../../assets/images/Gear.gif')}
      style={{
        width:'100%',
        height:200,
        objectFit:'contain'
      }}
      />

    </View>
  )
}