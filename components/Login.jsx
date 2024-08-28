import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from './../constants/Colors'
import { useRouter } from 'expo-router'


export default function Login() {
    const router = useRouter();
  return (
    <View>
      <Image source={require('./../assets/images/fitness-wallpaper-scaled.jpg')}
        style={{
            width: '100%',
            height: 480
        }}
        />
      <View style={styles.container}>
        <Text style={{
            fontSize:30,
            fontFamily:'outfit-bold',
            textAlign: 'center',
            marginTop: 10
        }}>AI Planner </Text>
        <Text style={{
            fontFamily:'outfit',
            fontSize: 17,
            textAlign: 'center',
            color: Colors.GRAY,
            marginTop: 20
        }}>Planning out the workout plan that reach you goal. Training smarter with Ai-driven insight</Text>
        <TouchableOpacity style={styles.button}
            onPress={()=>router.push('auth/sign-in')}
        >
            <Text style={{
                color:Colors.WHITE,
                fontFamily:'outfit',
                fontSize: 17,
                textAlign: 'center'
                }}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}



const styles = StyleSheet.create({
    container:{
        backgroundColor:Colors.WHITE,
        marginTop:-20,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        height:'100%',
        padding: 25
    },
    button:{
        padding:15,
        backgroundColor:Colors.PRIMARY,
        borderRadius:99,
        marginTop: '20%'
    }
})