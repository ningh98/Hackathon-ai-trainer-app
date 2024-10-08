import { View, Text, TextInput,TouchableWithoutFeedback,Keyboard,TouchableOpacity } from 'react-native'
import React, { useEffect,useState,useContext } from 'react'
import { useNavigation } from 'expo-router'
import Colors from '@/constants/Colors'
import { useRouter } from 'expo-router'
import CreateWorkoutContext from '../../context/CreateWorkoutContext'

export default function InfoGoal() {
    const [goal, setGoal] = useState('')
    const router = useRouter()
    const navigation=useNavigation()
    const {infoData, setInfoData}=useContext(CreateWorkoutContext)

    useEffect(()=>{
        console.log(infoData)
        navigation.setOptions({
            headerShown:true,
            headerTransparent:true,
            headerTitle: 'Goal',
            headerBackTitle: '',
            headerBackTitleVisible: false,
            headerTintColor: Colors.PRIMARY
        })
    },[])

    const isButtonDisabled = goal.trim() === ''; // Disable button if goal is empty or only whitespace
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View
    style={{
        padding:25,
        backgroundColor:Colors.WHITE,
        height:'100%',
        paddingTop: 100,
        alignItems: 'center',
        
    }}
    >
      <TextInput
                style={{
                    height: 200,
                    width: '100%',
                    borderColor: Colors.GRAY,
                    borderWidth: 1,
                    borderRadius: 10,
                    padding: 15,
                    fontSize: 16,
                    fontFamily: 'outfit',
                    color: Colors.PRIMARY,
                    backgroundColor: Colors.LIGHT_GRAY,
                    textAlignVertical: 'top', // Ensures text starts from the top
                }}
                multiline={true} // Allows multiple lines of text
                numberOfLines={6} // Defines how many lines are visible before scrolling
                placeholder="What's your goal looks like..."
                placeholderTextColor={Colors.GRAY}
                value={goal}
                onChangeText={text => setGoal(text)}
            />
            <TouchableOpacity
      onPress={()=>{
        setInfoData({...infoData, goal})
        router.push('/create-workout/info-gym')
      }
      }
      style={{
        bottom:-100,
        padding:15,
        borderRadius:15,
        paddingHorizontal:30,
        width: 150,
        alignItems: 'center',
        backgroundColor: isButtonDisabled ? Colors.GRAY : Colors.PRIMARY, // Change color based on disabled state
        opacity: isButtonDisabled ? 0.6 : 1, // Adjust opacity when disabled
      }}
      disabled={isButtonDisabled} // Disable the button if goal is empty
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
    </TouchableWithoutFeedback>
  )
}