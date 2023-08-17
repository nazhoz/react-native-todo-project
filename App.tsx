import { StyleSheet, Text, View , Image} from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Sign from './components/Sign';
import Home from './components/Home';

const App = () => {
  const Tab = createBottomTabNavigator();
  // const Stack = createStackNavigator();
  return (
   <NavigationContainer>
    <Tab.Navigator
    initialRouteName='sign'
    screenOptions={{
      headerShown:false,
      tabBarStyle:{
        backgroundColor:'black'
      },
      tabBarActiveTintColor:'white'
    }}>
      <Tab.Screen name="Sign" component={Sign} 
      options={{
        tabBarIcon:({focused})=>{
          return(
            <Image source={require('./images/addfriend.png')}
            style={{tintColor:focused ? 'white' : 'grey'}}
            />
          )
        }
      }}/>
      <Tab.Screen name="Todo" component={Home}
      options={{
        tabBarIcon:({focused})=>{
          return(
            <Image source={require('./images/todolist.png')}
            style={{tintColor:focused ? 'white' : 'grey'}}
            />
          )
        }
      }} />
    </Tab.Navigator>


{/* <Stack.Navigator>
      <Stack.Screen name="Home" component={Sign} />
      <Stack.Screen name="Notifications" component={Home} />

    </Stack.Navigator> */}
   </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})
