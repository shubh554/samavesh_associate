import React from 'react'
import { StyleSheet, Text, View,ScrollView ,Image,TextInput} from 'react-native';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Appointment from '../components/Appointment';
import AppointmentConfirm from '../components/AppointmentConfirm'

const Dashboard = ({navigation}) => {
    return (
        <View style={{flex:1}}>
        <Header navigation={navigation}/>
        <View style={{ shadowColor: '#000',shadowOffset: { width: 1, height: 1 },shadowOpacity:  0.4,shadowRadius: 3,elevation: 5,borderRadius:5,width:'80%',height:36.5,marginLeft:'10%',marginTop:-15,backgroundColor:'#ffffff'}}>
         <TextInput
         placeholder={"Enter Name or Booking Id"}
         placeholderTextColor={'#000000'}
         style={{padding:10}}
         />
         </View>
      <ScrollView style={{width:'100%',height:'70%',borderWidth:0}}>
      <View style={{borderRadius:5,marginLeft:'3%',width:'94%',height:200,backgroundColor:'#512536',marginTop:'2%',flexDirection:'row'}}>
      <Text style={{color:'#ffffff',fontFamily:'banner',fontSize:34,width:'40%',marginTop:'10%',marginLeft:'5%'}}>Sewing Mends The Soul</Text>
     
      <Image
        style={{width:'45%',height:'88%',marginTop:'5%'}}
        source={require('../assets/machine.png')}
      />
     
      </View>
        <Text style={{fontSize:18,marginLeft:'8%',marginBottom:10,marginTop:'5%',color:'#512536',fontWeight:'bold'}}>Pending</Text>
        <View style={{backgroundColor:'#ffffff',width:'94%',marginLeft:'3%',borderRadius:5,shadowColor: '#000',shadowOffset: { width: 1, height: 1 },shadowOpacity:  0.4,shadowRadius: 3,elevation: 5}}>
        <Appointment />
        <Appointment/>
        </View>
        <Text style={{fontSize:18,marginLeft:'8%',marginBottom:10,color:'#512536',marginTop:10,fontWeight:'bold'}}>Ongoing</Text>
        <View style={{backgroundColor:'#ffffff',width:'94%',marginLeft:'3%',borderRadius:5,shadowColor: '#000',shadowOffset: { width: 1, height: 1 },shadowOpacity:  0.4,shadowRadius: 3,elevation: 5}}>

        <AppointmentConfirm/>
        <AppointmentConfirm cash/>
     
        </View>
       </ScrollView>
       <Footer navigation={navigation}/>
        </View>
    )
}

export default Dashboard

const styles = StyleSheet.create({})
