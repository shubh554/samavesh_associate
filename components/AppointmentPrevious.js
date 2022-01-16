import React, { useState } from 'react'
import { StyleSheet, Text, View,Image,TouchableOpacity ,Button} from 'react-native'
import Modal from "react-native-modal";

const AppointmentPrevious = ({complete}) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [isWarningModalVisible, setWarningModalVisible] = useState(false);
  
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const toggleWarningModal = () => {
    setWarningModalVisible(!isWarningModalVisible);
  };
  
  const confirm = ()=>{
      
  }  
  return (
        <View style={{flexDirection:'row',padding:4,height:100,width:'90%',marginLeft:'5%',marginRight:'5%',borderWidth:0,backgroundColor:'#ffffff',borderRadius:15,marginTop:10,marginBottom:5}}>
             

           
             <View style={{marginTop:20,height:'50%',width:'30%',alignItems:'center',justifyContent:'center',backgroundColor:'#512536'}}>
              <Text style={{color:'#ffffff',fontFamily:'normal'}}>#123456</Text>
             </View>
             <View style={{height:'100%',width:'45%',borderWidth:0}}>
              <Text style={{marginTop:20,marginLeft:10,color:'#000000',fontFamily:'normal'}}>Details of the Appointment..</Text>
              <Text style={{marginTop:0,marginLeft:10,color:'#000000',fontFamily:'normal'}}>INR 500 (Cash)</Text>
             </View>
             <View style={{height:'100%',width:'25%',borderWidth:0,flexDirection:'row',justifyContent:'space-evenly',alignItems:'center'}}>
           
            {complete? <Image
        style={{height:30,width:30}}
        source={require('../assets/complete.png')}
        resizeMode = 'contain'
      />:<Image
      style={{height:30,width:30}}
      source={require('../assets/cancelled.png')}
      resizeMode = 'contain'
    />}
                   </View>
         </View>
    )
}

export default AppointmentPrevious

const styles = StyleSheet.create({})
