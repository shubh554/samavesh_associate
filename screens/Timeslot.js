import React,{useContext,useState} from 'react'
import { StyleSheet, Text,SafeAreaView, View,Image ,TextInput,TouchableOpacity,KeyboardAvoidingView,ActivityIndicator,Pressable} from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import Weekdays from "../components/Weekdays"
//import DurationPicker from 'react-duration-picker'




const Timeslot = ({navigation}) => {
    const [text, onChangeText] = React.useState("");
    const [text2, onChangeText2] = React.useState("");
    const [loading, setLoading] = React.useState(0);
    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('time');
    const [show, setShow] = useState(false);
    
  
    const onChange = (event, selectedDate) => {
      const currentDate = selectedDate || date;
      setShow(Platform.OS === 'ios');
      setDate(currentDate);
    };
  
    const showMode = (currentMode) => {
      setShow(true);
      setMode(currentMode);
    };
  
    const showDatepicker = () => {
      showMode('date');
    };
  
    const showTimepicker = () => {
      showMode('time');
    };

    
   

    return (
       
       <SafeAreaView style={styles.container}>
             <Image
        style={styles.logo}
        source={require('../assets/logo.png')}
        resizeMode = 'contain'
      />
      
                <KeyboardAvoidingView style={styles.loginBlock}>
          <Text style={styles.heading}>Enter Your Details 2/4</Text>
  
      <TouchableOpacity
      onPress={()=>{setShow(true)}}
      style={{backgroundColor:'#512536',width:'100%',height:56,borderRadius:50,justifyContent:'center',alignItems:'center'}}>
        <Text style={{color:'#ffffff',fontFamily:'normal'}}>Opening Time</Text>
      </TouchableOpacity>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}

      <TouchableOpacity 
      onPress={()=>{setShow(true)}}
      style={{backgroundColor:'#512536',width:'100%',height:56,borderRadius:50,justifyContent:'center',alignItems:'center',marginTop:10}}>
        <Text style={{color:'#ffffff',fontFamily:'normal'}}>Closing Time</Text>
      </TouchableOpacity>
      <Text style={{textAlign:'left',marginLeft:'5%',marginTop:10,fontFamily:'normal',color:'#000000'}}>Select Working Days</Text>
      <View style={{flexDirection:'row',justifyContent:'space-evenly'}}>
      <Weekdays value={"M"}></Weekdays>
      <Weekdays value={"T"}></Weekdays>
      <Weekdays value={"W"}></Weekdays>
      <Weekdays value={"T"}></Weekdays>
      <Weekdays value={"F"}></Weekdays>
      <Weekdays value={"S"}></Weekdays>
      <Weekdays value={"S"}></Weekdays>
      </View>
       
     
       <TouchableOpacity style={styles.button}
        onPress ={()=>{navigation.navigate('Know')}}
      >
       {!loading?<Text style={styles.buttonText}>Submit</Text>:
          <ActivityIndicator size="small" color="#ffffff" />}
     </TouchableOpacity>
     <Text style={{textAlign:'center',marginTop:50,fontSize:12,fontFamily:'normal',color:'#512536'}}>By registring I agree to the terms & conditions.</Text>
   

   
      </KeyboardAvoidingView>
           </SafeAreaView>
    )
}

export default Timeslot

const styles = StyleSheet.create({
  checkbox: {
    width: 64,
    height: 64
  }, 
  container:{
        flex:1,
        backgroundColor:'#E5E5E5'
    },
    logo:{
        marginTop:'20%',
        height:200,
        width:200,
        marginLeft:'25%'
    },
    slogo:{
       
        height:40,
        width:40,
       
    },
    loginBlock:{
        height:'30%',
        width:'80%',
        marginLeft:'10%',
        marginRight:'10%',
        borderWidth:0
    },
    input: {
       
        padding: 10,
        height: 56,
      },
      inputContainer:{
        height: 56,
        borderWidth: 0,
        backgroundColor:'#D3D3D3',
        width:'100%',
        borderRadius:30,
        color:'#AC849C',
        marginTop:8
      },
      heading:{
          fontSize:26,
          textAlign:'center',
          marginBottom:'10%',
          color:'#000000',
          fontFamily:'normal'
      },
      subHeading:{
          fontSize:17,
          textAlign:'center',
          marginTop:'10%'
      },
      button:{
       width:'100%',
       height:66,
       backgroundColor:'#512536',
       borderRadius:30,
       marginTop:'10%',
       justifyContent:'center'
      },
      buttonText:{
          color:'#ffffff',
          textAlign:'center',
          fontSize:20,
          fontFamily:'normal'
      },
      socialMedia:{
         height:'10%',
         width:'80%' ,
         marginLeft:'10%',
         marginRight:'10%',
         marginTop:'10%',
         borderWidth:0 ,
         flexDirection:'row',
         justifyContent:'space-between'        
      },
      bottomMessage:{
          height:'10%',
          width:'80%',
          marginLeft:'10%',
          marginRight:'10%',
          borderWidth:0,
          marginTop:'5%',
          color:'#828282'
          
      }
})

