import { View, Text,TouchableOpacity } from 'react-native'
import React, { useEffect,useState, useContext } from 'react'
import { useNavigation } from 'expo-router'
import Colors from '@/constants/Colors'
import { useRouter } from 'expo-router'
import WheelPickerExpo from 'react-native-wheel-picker-expo'
import CreateWorkoutContext from '../../context/CreateWorkoutContext'

const MemoizedWheelPickerExpo = React.memo(WheelPickerExpo)

export default function InfoHeight() {
    const [ftHeight,setFtHeight] = useState('5')
    const [inchHeight, setInchHeight] = useState('0')
    const router = useRouter()
    const fts = '3,4,5,6,7,8'.split(',');
    const inches = '0,1,2,3,4,5,6,7,8,9,10,11'.split(',')
    const {infoData, setInfoData}=useContext(CreateWorkoutContext)

    const navigation=useNavigation()
    useEffect(()=>{
        console.log(infoData)
        navigation.setOptions({
            headerShown:true,
            headerTransparent:true,
            headerTitle: 'Height',
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
      <Text>{ftHeight} ft {inchHeight} in </Text>
      <View
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
      }}>
        <WheelPickerExpo
                height={300}
                width={150}
                initialSelectedIndex={fts.indexOf(ftHeight)}
                items={fts.map(ft => ({ label: ft, value: ft }))}
                onChange={({ item }) => setFtHeight(item.label)}
                 />
                
        <WheelPickerExpo
                height={300}
                width={150}
                initialSelectedIndex={inches.indexOf(inchHeight)}
                items={inches.map(inch => ({ label: inch, value: inch }))}
                onChange={({ item }) => setInchHeight(item.label)} />
      </View>
      <TouchableOpacity
      onPress={()=>{
        const height = `${ftHeight} ft ${inchHeight} in`;
        setInfoData({ ...infoData, height });
        router.push('/create-workout/info-weight')}
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