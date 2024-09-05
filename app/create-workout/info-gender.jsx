import { View, Text,TouchableOpacity } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { useNavigation } from 'expo-router'
import Colors from '@/constants/Colors'
import { useRouter } from 'expo-router'
import CreateWorkoutContext from '../../context/CreateWorkoutContext'

export default function InfoGender() {
    const router = useRouter()
    const {infoData, setInfoData}=useContext(CreateWorkoutContext)

    const navigation=useNavigation()
    useEffect(()=>{
        console.log(infoData)
        navigation.setOptions({
            headerShown:true,
            headerTransparent:true,
            headerTitle: 'Gender',
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
      <TouchableOpacity
      onPress={()=>{
        setInfoData({ ...infoData, gender: 'Male' });
        console.log(infoData)
        router.push('/create-workout/info-height')
      }}
      style={{
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
          Male
        </Text>
        
      </TouchableOpacity>
      <TouchableOpacity
      onPress={()=>{
        setInfoData({ ...infoData, gender: 'Female' });
        router.push('/create-workout/info-height')
      }
      }
      style={{
        padding:15,
        marginTop:30,
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
          Female
        </Text>
        
      </TouchableOpacity>
    </View>
  )
}