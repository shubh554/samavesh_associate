import React,{useState}  from 'react';
import { View, StyleSheet } from 'react-native';
import {
    useTheme,
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch
} from 'react-native-paper';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/MaterialIcons';
import Geolocation from '@react-native-community/geolocation';
import Geocoder from 'react-native-geocoder';
//import Icon from 'react-native-vector-icons/Entypo';




export function DrawerContent(props) {

    const paperTheme = useTheme();
    const color = '#ffffff'
    const [cords, setCords] = useState(0);
    const location = async ()=>{
      let c = await Geolocation.getCurrentPosition(info => setCords(info))
    
    if(cords){
    Geocoder.geocodePosition({
      lat:cords.coords.latitude,
      lng:cords.coords.longitude
    }).then(res => {
    alert(`Your location is set to "${res[0]['formattedAddress']}"`)
  })}
  else{
    alert("Please Try Again!")
  }
    }

    

    return(
        <View style={{flex:1,backgroundColor:'#512536',color:'#ffffff'}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{flexDirection:'row',marginTop: 15}}>
                            <Avatar.Image 
                                source={{
                                    uri: 'https://api.adorable.io/avatars/50/abott@adorable.png'
                                }}
                                size={50}
                            />
                            <View style={{marginLeft:15, flexDirection:'column'}}>
                                <Title style={styles.title}>John Doe</Title>
                                <Caption style={styles.caption}>@j_doe</Caption>
                            </View>
                        </View>

                     
                    </View>

                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="home-outline" 
                                color={'#ffffff'}
                                size={size}
                                />
                            )}
                            labelStyle={{color: '#ffffff',fontFamily:'normal'}}
                            label="Home"
                            onPress={() => {props.navigation.navigate('Dashboard')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="account-outline" 
                                color={'#ffffff'}
                                size={size}
                                />
                            )}
                            labelStyle={{color: '#ffffff',fontFamily:'normal'}}
                            label="Profile"
                            onPress={() => {props.navigation.navigate('Profile')}}
                        />
                     
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="format-list-bulleted" 
                                color={'#ffffff'}
                                size={size}
                                />
                            )}
                            labelStyle={{color: '#ffffff',fontFamily:'normal'}}
                            label="Terms & Conditions"
                            onPress={() => {props.navigation.navigate('SettingsScreen')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="account-check-outline" 
                                color={'#ffffff'}
                                size={size}
                                />
                            )}
                            labelStyle={{color: '#ffffff',fontFamily:'normal'}}
                            label="Support"
                            onPress={() => {props.navigation.navigate('SupportScreen')}}
                        />
                         <DrawerItem 
                            icon={({color, size}) => (
                                <Ionicons
                                name="location-searching" 
                                color={'#ffffff'}
                                size={size}
                                />
                            )}
                            labelStyle={{color: '#ffffff',fontFamily:'normal'}}
                            label="Update Location"
                            onPress={() => {location()}}
                        />
                    </Drawer.Section>
                  
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem 
                    icon={({color, size}) => (
                        <Icon 
                        name="exit-to-app" 
                        color={'#ffffff'}
                        size={size}
                        />
                    )}
                    labelStyle={{color: '#ffffff',fontFamily:'normal'}}
                    label="Sign Out"
                    onPress={() => {props.navigation.navigate('Signup')}}
                    
                />
            </Drawer.Section>
        </View>
    );
}

const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
      //backgroundColor:'red'
    },
    userInfoSection: {
      paddingLeft: 20,
    },
    title: {
      fontSize: 16,
      marginTop: 3,
      fontWeight: 'bold',
      color:'#ffffff',
      fontFamily:'normal'
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
      color:'#ffffff',
      fontFamily:'normal'
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
    },
    drawerSection: {
      marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
  });
