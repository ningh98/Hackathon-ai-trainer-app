import { api } from "@/convex/_generated/api";
import { useQuery,Authenticated, Unauthenticated, AuthLoading } from "convex/react";
import {  Text, View } from "react-native";
import Login from "./../components/Login";
import { Href, Redirect } from "expo-router";
import * as Linking from 'expo-linking';


export default function Index() {
  
  const tasks = useQuery(api.tasks.get);
  return (
    <View
      style={{
        flex: 1,
        
      }}
    >
      <>
      <AuthLoading><Text>Loading...</Text></AuthLoading>
      <Unauthenticated>
        <Login />
      </Unauthenticated>
      <Authenticated>
        <Redirect href={Linking.createURL("/(tabs)/myworkout") as Href} />
      </Authenticated>
    </> 
      
      {/* example of showing info from Convex backend database: */}
      {/* {tasks?.map(({ _id, text }) => <Text key={_id}>{text}</Text>)} */}
    </View>
  );
}
