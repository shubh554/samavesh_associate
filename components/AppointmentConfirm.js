import React,{useState} from 'react'
import { StyleSheet, Text, View,Image,TouchableOpacity,TextInput } from 'react-native'
import Modal from "react-native-modal";


const AppointmentConfirm = ({cash}) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  
  return (
        <View style={{flexDirection:'row',padding:4,height:100,width:'90%',marginLeft:'5%',marginRight:'5%',borderWidth:0,backgroundColor:'#ffffff',borderRadius:15,marginTop:10,marginBottom:5}}>
             <Modal isVisible={isModalVisible}>
        <View style={{ flex: 1,alignItems:'center',justifyContent:'center' }}>
          <View style={{height:'40%',borderWidth:0,backgroundColor:'#ffffff',padding:10,justifyContent:'space-evenly'}}>
          <>
          <View style={{width:200,marginLeft:'9%',height:38,borderWidth:1}}>
          <TextInput 
          style={{width:'100%'}}
          placeholder={"Enter The Charges"}
          placeholderTextColor={"#000000"}
          />
          </View>
          <View style={{width:200,marginLeft:'9%',height:98,borderWidth:1}}>
          <TextInput 
          style={{width:'100%'}}
          placeholder={"Enter The Description"}
          placeholderTextColor={"#000000"}
          />
          </View>
          </>
          <View style={{flexDirection:'row',justifyContent:'space-between'}}>
          <TouchableOpacity style={{justifyContent:'center',height:25,width:'40%',backgroundColor:'#512536'}}><Text style={{textAlign:'center',color:'#ffffff'}}>Confirm</Text></TouchableOpacity>
          <TouchableOpacity onPress={()=>{toggleModal()}} style={{justifyContent:'center',height:25,width:'40%',backgroundColor:'#ffffff',borderWidth:1}}><Text style={{textAlign:'center',color:'black'}}>Not Now</Text></TouchableOpacity>
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
              <Text style={{color:'#ffffff',fontFamily:'normal',fontSize:cash?11.5:14}}>{cash?"Paid In Cash":"Update"}</Text>
      </TouchableOpacity>

             </View>
         </View>
    )
}

export default AppointmentConfirm

const styles = StyleSheet.create({})
