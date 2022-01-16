import 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Signup from './screens/Signup';
import Splash from './screens/Splash';
import Details from './screens/Details';
import Dashboard from './screens/Dashboard';
import Profile from './screens/Profile';
import Previous from './screens/Previous';
import Name from './screens/Name';
import { DrawerContent } from './screens/DrawerContent';
import Timeslot from './screens/Timeslot';


const App = () => {
  const Stack = createNativeStackNavigator();
  const Drawer = createDrawerNavigator();

  const onboarding = () =>{

    return(   <Stack.Navigator   screenOptions={{
      headerShown: false
     }}>
     <Stack.Screen name="Splash" component={Splash}/>
     <Stack.Screen name="Signup" component={Signup}/>
     <Stack.Screen name="Name" component={Name}/>
     <Stack.Screen name="Timeslot" component={Timeslot}/>
     <Stack.Screen name="Details" component={Details}/>
     <Stack.Screen name="Dashboard" component={Dashboard}/>
     <Stack.Screen name="Profile" component={Profile}/>
     <Stack.Screen name="Previous" component={Previous}/>

    
   </Stack.Navigator>)

  }
  

  return (
    <NavigationContainer>
        <Drawer.Navigator initialRouteName="onboarding" drawerContent={props => <DrawerContent {...props} />}>
        <Drawer.Screen name="onboarding"  options={{headerShown: false}} component={onboarding} />
      </Drawer.Navigator>
    </NavigationContainer>
  
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
