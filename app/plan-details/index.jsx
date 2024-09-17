import { View, Text, ScrollView } from 'react-native'
import React, { useEffect,useState } from 'react'
import { useLocalSearchParams, useNavigation } from 'expo-router'
import { Colors } from '@/constants/Colors'

export default function PlanDetails() {
    const navigation=useNavigation()
    const {planWithInfo}=useLocalSearchParams()
    const [planDetails, setPlanDetails]=useState([])
    const parsedPlan = JSON.parse(planWithInfo)
    const plan = parsedPlan.plan
    const [formattedPlan, setFormattedPlan] = useState('')

    
    
    useEffect(()=>{
        navigation.setOptions({
            headerShown: true,
            headerTransparent: true,
            headerTitle:''
        })
        // console.log(typeof plan)
        // console.log(plan)
        // setPlanDetails(plan)
        console.log(formatPlanDetails(plan))
        setFormattedPlan(formatPlanDetails(plan))
        
    },[])
    const formatPlanDetails = (planString) => {
      // This example assumes the string contains JSON-like content with day, workout, exercises.
      // Replace escaped characters (\n, \", etc.) and format it nicely for display.
      let formatted = planString.replace(/\\n/g, '\n') // Replace \n with actual new lines
                              .replace(/\\\"/g, '')  // Replace escaped quotes \" with actual quotes
                              .replace(/\{|\}/g, '')  // Remove curly braces
                              .replace(/\[/g, '')     // Remove array square brackets [
                              .replace(/\]/g, '')     // Remove array square brackets ]
                              .replace(/,/g, '\n')    // Replace commas with new lines for better readability
                              .replace(/:/g, ': ')    // Add space after colons for better formatting
      return formatted
  }


  return (
    <ScrollView style={{
      padding: 25,
      paddingTop: 85,
      backgroundColor:Colors.WHITE,
      height:'100%'
    }}>
      <Text style={{
                fontSize:25,
                fontFamily:'outfit-bold'
            }}>
               {formattedPlan}</Text>
      

    </ScrollView>
  )
}