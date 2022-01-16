import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Appointment from '../components/Appointment'
import AppointmentPrevious from '../components/AppointmentPrevious'

const Previous = ({navigation}) => {
    return (
        <View style={{flex:1,justifyContent:'space-between'}}>
            <Header navigation={navigation}/>
           
            <Text style={{fontSize:18,marginLeft:'8%',marginBottom:10,color:'#512536',marginTop:1,fontWeight:'bold'}}>Ongoing</Text>
            <View style={{marginTop:'-100%',backgroundColor:'#ffffff',width:'94%',marginLeft:'3%',borderRadius:5,shadowColor: '#000',shadowOffset: { width: 1, height: 1 },shadowOpacity:  0.4,shadowRadius: 3,elevation: 5}}>
            <Text style={{marginLeft:'5%',fontFamily:'normal',color:'#000000',marginTop:15}}>Total Bussiness This Week:- 1500</Text>
            <Text style={{marginLeft:'5%',fontFamily:'normal',color:'#000000',marginTop:15}}>Total Cash to Be Deposited:- 1000 </Text>
            <AppointmentPrevious complete/>
            <AppointmentPrevious complete/>
            <AppointmentPrevious/>
            </View>
            <Footer navigation={navigation}/>
        </View>
    )
}

export default Previous

const styles = StyleSheet.create({})
