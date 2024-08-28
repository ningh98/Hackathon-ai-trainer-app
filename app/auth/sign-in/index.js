import { View, Text, TextInput, StyleSheet,TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Colors } from '@/constants/Colors'
import { useRouter } from 'expo-router'
import Ionicons from '@expo/vector-icons/Ionicons';

export default function SignIn() {
  const navigation = useNavigation()
  const router = useRouter()

  useEffect(() => {
    navigation.setOptions({
      headerShown: false
    })
  },[])

  return (
    <View style={{
      padding:25,
      backgroundColor: Colors.WHITE,
      height: '100%',
      paddingTop:40
    }}>
      <TouchableOpacity onPress={()=>router.back()}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
      
      <Text style={{
        fontSize: 30,
        fontFamily: 'outfit-bold',
        marginTop : 30
      }}
      >Let's Sign You In</Text>
      <Text style={{
        fontSize: 30,
        fontFamily: 'outfit-bold',
        color: Colors.GRAY,
        marginTop : 20
      }}
      >Welocome Back</Text>
      <Text style={{
        fontSize: 30,
        fontFamily: 'outfit-bold',
        color: Colors.GRAY,
        marginTop : 10
      }}
      >You've been missed</Text>
      {/* Email */}
      <View style={{marginTop: 50}}>
        <Text style={{fontFamily:'outfit'}}>Email</Text>
        <TextInput 
        style={styles.input}
        placeholder='Enter Email'></TextInput>
      </View>
      {/* Password */}
      <View style={{marginTop: 20}}>
        <Text style={{fontFamily:'outfit'}}>Password</Text>
        <TextInput 
        secureTextEntry={true}
        style={styles.input}
        placeholder='Enter password'></TextInput>
      </View>
      {/* Sign in Button */}
      <TouchableOpacity
        
      style={{
        padding:20,
        backgroundColor: Colors.PRIMARY,
        borderRadius: 15,
        marginTop:50
      }}>
        <Text style={{
          color: Colors.WHITE,
          textAlign: 'center',
        }}>Sign in</Text>
      </TouchableOpacity>
      {/* Create account Button */}
      <TouchableOpacity
        onPress={() => router.replace('auth/sign-up')}
      style={{
        padding:20,
        backgroundColor: Colors.WHITE,
        borderRadius: 15,
        marginTop:20,
        borderWidth: 1,
      }}>
        <Text style={{
          color: Colors.PRIMARY,
          textAlign: 'center',
        }}>Create Account</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  input:{
    padding: 15,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: Colors.GRAY,
    fontFamily:'outfit'
  }
})