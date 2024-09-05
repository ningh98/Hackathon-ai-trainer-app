import { View, Text,TouchableOpacity } from 'react-native'
import React, { useEffect,useState,useContext } from 'react'
import { useNavigation } from 'expo-router'
import Colors from '@/constants/Colors'
import { useRouter } from 'expo-router'
import WheelPickerExpo from 'react-native-wheel-picker-expo'
import CreateWorkoutContext from '../../context/CreateWorkoutContext'

const MemoizedWheelPickerExpo = React.memo(WheelPickerExpo)

export default function InfoAge() {

  const [day,setDay] = useState('3')
  const router = useRouter()
  const days = Array.from({ length: 7 }, (_, i) => (i+1).toString());
  const {infoData, setInfoData}=useContext(CreateWorkoutContext)


  const navigation=useNavigation()
    useEffect(()=>{
        console.log(infoData)
        navigation.setOptions({
            headerShown:true,
            headerTransparent:true,
            headerTitle: 'Frequency',
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
    
        <Text>workout {day} day(s) a week</Text>
        <View
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop:10
      }}>
        <WheelPickerExpo
                height={300}
                width={150}
                initialSelectedIndex={days.indexOf(day)}
                items={days.map(aday => ({ label: aday, value: aday }))}
                onChange={({ item }) => setDay(item.label)}
                 />
                 
    </View>
    <TouchableOpacity
      onPress={()=>
      {
        frequency =`workout ${day} day(s) a week`
        setInfoData({...infoData, frequency})
        router.push('/create-workout/info-finish')
      }
       }
      style={{
        bottom:-100,
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