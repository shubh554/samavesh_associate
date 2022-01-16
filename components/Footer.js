import React from 'react'
import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

const Footer = ({navigation}) => {
    return (
        <View style={{height:'10%',flexDirection:'row',padding:5,backgroundColor:'#E8E8E8',justifyContent:'space-evenly',marginBottom:0}}>
            <View style={{height:'100%',width:'30%',borderWidth:0,alignItems:'center',justifyContent:'center'}}>
            <TouchableOpacity
            onPress={()=>{navigation.navigate('Dashboard')}}
            >
       <Icon name="home" size={32} color="#512536" />
      </TouchableOpacity>
            </View>
         
            <View style={{height:'100%',width:'30%',borderWidth:0,alignItems:'center',justifyContent:'center'}}>
            <TouchableOpacity
            onPress={()=>{navigation.navigate('Profile')}}
            >
               <Icon name="user" size={32} color="#512536" />
      </TouchableOpacity>
            </View>
            <View style={{height:'100%',width:'30%',borderWidth:0,alignItems:'center',justifyContent:'center'}}>
            <TouchableOpacity
            onPress={()=>{navigation.navigate('Previous')}}
            >
               <Icon name="list-alt" size={32} color="#512536" />
      </TouchableOpacity>
            </View>
        

        </View>
    )
}

export default Footer

const styles = StyleSheet.create({})
