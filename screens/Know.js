import React,{useContext,useState,useRef} from 'react'
import { StyleSheet, Text,SafeAreaView, View,Image ,TextInput,TouchableOpacity,KeyboardAvoidingView,ActivityIndicator,Pressable} from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import Weekdays from "../components/Weekdays";
import {Picker} from '@react-native-picker/picker';
//import DurationPicker from 'react-duration-picker'




const Know = ({navigation}) => {
    const [text, onChangeText] = React.useState("");
    const [text2, onChangeText2] = React.useState("");
    const [loading, setLoading] = React.useState(0);
    const [selectedLanguage, setSelectedLanguage] = useState("Social Media");
    const [date, setDate] = useState(new Date(1598051730000));
    const pickerRef = useRef();
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

    const open=()=> {
        pickerRef.current.focus();
      }
      
      const close=() => {
        pickerRef.current.blur();
      }

    
  //alert(selectedLanguage)

    return (
       
       <SafeAreaView style={styles.container}>
             <Image
        style={styles.logo}
        source={require('../assets/logo.png')}
        resizeMode = 'contain'
      />
      
                <KeyboardAvoidingView style={styles.loginBlock}>
          <Text style={styles.heading}>Enter Your Details 3/4</Text>
  
          <Text style={{color:'#512536',fontFamily:'normal',marginLeft:'3%'}}>How Did You Come To Know About Us?</Text>
          <TouchableOpacity style={styles.pickerContiner}
             onPress={open}
           >
            <Picker
        selectedValue={selectedLanguage}
        onValueChange={(itemValue, itemIndex) =>
            
            setSelectedLanguage(itemValue)
         
        }
        numberOfLines={1}
        ref={pickerRef}
        itemStyle={{fontSize:1}}
        style={{fontSize:10}}
        dropdownIconColor={"#AC849C"}
        >
        <Picker.Item color={'#512536'} label="Social Media" value="Social Media" />
        <Picker.Item color={'#512536'} label="Samavesh Associate Referral" value="Referal" />
        <Picker.Item color={'#512536'} label="Word Of Mouth" value="Word Of Mouth" />
        <Picker.Item color={'#512536'} label="Other" value="Other" />
      </Picker>
      </TouchableOpacity>

      {selectedLanguage!="Social Media" && selectedLanguage!="Word Of Mouth"?<View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        onChangeText={(text)=>{onChangeText(text)}}
        placeholder = {`Enter ${selectedLanguage}`}
        placeholderTextColor="#000000" 
      
      />
        </View>:null}
       
     
       <TouchableOpacity style={styles.button}
        onPress ={()=>{navigation.navigate('Details')}}
      >
       {!loading?<Text style={styles.buttonText}>Submit</Text>:
          <ActivityIndicator size="small" color="#ffffff" />}
     </TouchableOpacity>
     <Text style={{textAlign:'center',marginTop:50,fontSize:12,fontFamily:'normal',color:'#512536'}}>By registring I agree to the terms & conditions.</Text>
   

   
      </KeyboardAvoidingView>
           </SafeAreaView>
    )
}

export default Know

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
          
      },
      pickerContiner:{
        width:'100%',
        height:40,
        borderWidth:1,
        marginTop:15,
        borderRadius:30,
        justifyContent:'center',
        borderColor:'#512536'
      }
})

