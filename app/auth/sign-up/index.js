import { View, Text, TextInput, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'expo-router'
import { useNavigation } from '@react-navigation/native'
import { Colors } from '@/constants/Colors'
import { useAuthActions } from "@convex-dev/auth/react";
import Ionicons from '@expo/vector-icons/Ionicons';


export default function SignUp() {
  const navigation = useNavigation()
  const router = useRouter()
  const { signIn } = useAuthActions();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // State to hold error message

  useEffect(() => {
    navigation.setOptions({
      headerShown: false
    })
  },[])

  const handleSignUp = async () => {
    try {
      await signIn("password", { email, password, flow: "signUp" });
      // Optionally store the fullName in your user profile
      // Navigate to the main app or dashboard after successful sign-up
      router.replace('/myworkout');
    } catch (error) {
      // Handle error (e.g., show a message to the user)
      setError("Failed to create an account. Please try again."); // Set error message
      console.error("SignUp Error:", error);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View
    style={{
      padding:25,
      paddingTop:50,
      backgroundColor: Colors.WHITE,
      height: '100%',
    }}
    >
      <TouchableOpacity onPress={()=>router.back()}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
      <Text style={{
        fontFamily: 'outfit-bold',
        fontSize: 30,
        marginTop: 30
      }}>Create New Account</Text>
      {/* User Username */}
      <View style={{marginTop: 50}}>
        <Text style={{fontFamily:'outfit'}}>Username</Text>
        <TextInput 
        style={styles.input}
        placeholder='Enter Username'
        onChangeText={setUsername}
        value={username}
        autoCapitalize='none'
        />
      </View>
      {/* Email */}
      <View style={{marginTop: 20}}>
        <Text style={{fontFamily:'outfit'}}>Email</Text>
        <TextInput 
        style={styles.input}
        placeholder='Enter Email'
        onChangeText={setEmail}
        value={email}
        inputMode='email'
        autoCapitalize='none'
        />
      </View>
      {/* Password */}
      <View style={{marginTop: 20}}>
        <Text style={{fontFamily:'outfit'}}>Password</Text>
        <TextInput 
        secureTextEntry={true}
        style={styles.input}
        placeholder='Enter password'
        onChangeText={setPassword}
        value={password}
        />
      </View>
      

      
      {/* Create account Button */}
      <TouchableOpacity
        onPress={handleSignUp}
      style={{
        padding:20,
        backgroundColor: Colors.PRIMARY,
        borderRadius: 15,
        marginTop:50
      }}>
        <Text style={{
          color: Colors.WHITE,
          textAlign: 'center',
        }}>Create Account</Text>
      </TouchableOpacity>
      {/* Sign in Button */}
      <TouchableOpacity
        onPress={() => router.replace('auth/sign-in')}
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
        }}>Sign In</Text>
      </TouchableOpacity>
    </View>
    </TouchableWithoutFeedback>
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