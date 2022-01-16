import React, { useState } from 'react'
import { StyleSheet, Text, View,Image,TouchableOpacity ,Button} from 'react-native'
import Modal from "react-native-modal";

const Appointment = ({cash}) => {
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
        <View style={{flexDirection:'row',padding:4,height:100,width:'90%',marginLeft:'5%',marginRight:'5%',borderRadius:15}}>
             
             <Modal isVisible={isModalVisible}>
        <View style={{ flex: 1,alignItems:'center',justifyContent:'center',borderTopLeftRadius: 10,borderTopRightRadius: 10, overflow: 'hidden' }}>
          <View style={{height:'40%',borderWidth:0,backgroundColor:'#ffffff',padding:10,justifyContent:'space-evenly'}}>
          <>
          <Text style={{color:'#000000',fontSize:20,fontFamily:'normal'}}>Name of the Customer:ABCD</Text>
          <Text style={{color:'#000000',fontSize:20,marginTop:5,fontFamily:'normal'}}>Timing:4:00 A.M to 5:00 P.M</Text>
          <Text style={{color:'#000000',fontSize:20,marginTop:5,fontFamily:'normal'}}>Description:Lorem Ipsum Lorem Ipsum Lorem Ipsum</Text>
          </>
          <View style={{flexDirection:'row',justifyContent:'space-between'}}>
          <TouchableOpacity style={{height:30,width:'40%',backgroundColor:'#512536',justifyContent:'center'}}><Text style={{textAlign:'center',color:'#ffffff'}}>{cash?"Paid In Cash":"Confirm"}</Text></TouchableOpacity>
          <TouchableOpacity onPress={()=>{toggleModal()}} style={{height:30,justifyContent:'center',width:'40%',backgroundColor:'#ffffff',borderWidth:1}}><Text style={{textAlign:'center',color:'#000000'}}>Not Now</Text></TouchableOpacity>
          </View>
          </View>
         
        </View>
      </Modal>

  
             <View style={{borderRadius:55,marginTop:25,height:'50%',width:'30%',borderWidth:0,alignItems:'center',justifyContent:'center',backgroundColor:'#E9C6D4'}}>
              <Text style={{color:'#512536',fontFamily:'normal'}}>#123456</Text>
             </View>
             <View style={{height:'100%',width:'45%',borderWidth:0}}>
              <Text style={{marginTop:25,marginLeft:10,color:'#000000',fontFamily:'normal'}}>Details of the Appointment..</Text>
             </View>
             <View style={{height:'100%',width:'25%',borderWidth:0,flexDirection:'row',justifyContent:'space-evenly',alignItems:'center'}}>
             <TouchableOpacity style={{height:30,width:'100%',backgroundColor:'#512536',justifyContent:'center',alignItems:'center',borderRadius:10}}
             onPress={()=>{toggleModal()}}
             >
              <Text style={{color:'#ffffff',fontFamily:'normal'}}>Update</Text>
      </TouchableOpacity>

             </View>
         </View>
    )
}

export default Appointment

const styles = StyleSheet.create({})
