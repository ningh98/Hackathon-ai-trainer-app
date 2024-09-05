import { View, Text,TouchableOpacity } from 'react-native'
import React, { useEffect,useState,useContext } from 'react'
import { useNavigation } from 'expo-router'
import Colors from '@/constants/Colors'
import { useRouter } from 'expo-router'
import WheelPickerExpo from 'react-native-wheel-picker-expo'
import CreateWorkoutContext from '../../context/CreateWorkoutContext'


const MemoizedWheelPickerExpo = React.memo(WheelPickerExpo)
export default function InfoWeight() {
    const [ibWeight,setIbWeight] = useState('150')
    const router = useRouter()
    const weights = Array.from({ length: 400 }, (_, i) => i.toString());
    const {infoData, setInfoData}=useContext(CreateWorkoutContext)

    const navigation=useNavigation()
    useEffect(()=>{
        console.log(infoData)
        navigation.setOptions({
            headerShown:true,
            headerTransparent:true,
            headerTitle: 'Weight',
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
    
        <Text>{ibWeight} Ibs</Text>
        <View
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop:10
      }}>
        <WheelPickerExpo
                height={300}
                width={150}
                initialSelectedIndex={weights.indexOf(ibWeight)}
                items={weights.map(weight => ({ label: weight, value: weight }))}
                onChange={({ item }) => setIbWeight(item.label)}
                 />
                 
    </View>
    <TouchableOpacity
      onPress={()=>{
        const weight = `${ibWeight} Ibs`
        setInfoData({...infoData,weight})
        router.push('/create-workout/info-age')
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