import React,{useContext,useState} from 'react'
import { StyleSheet, Text,SafeAreaView, View,Image ,TextInput,TouchableOpacity,KeyboardAvoidingView,ActivityIndicator,Pressable} from 'react-native'





const Login = ({navigation}) => {
    const [text, onChangeText] = React.useState("");
    const [text2, onChangeText2] = React.useState("");
    const [loading, setLoading] = React.useState(0);
   

    
   

    return (
       
       <SafeAreaView style={styles.container}>
             <Image
        style={styles.logo}
        source={require('../assets/logo.png')}
        resizeMode = 'contain'
      />
      
                <KeyboardAvoidingView style={styles.loginBlock}>
          <Text style={styles.heading}>Sign Up</Text>
       <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        onChangeText={(text)=>{onChangeText(text)}}
        placeholder = "Enter Your Mobile Email / Mobile Number"
        placeholderTextColor="#000000" 
      
      />
        </View>
       
     
       <TouchableOpacity style={styles.button}
        onPress ={()=>{navigation.navigate('Name')}}
      >
       {!loading?<Text style={styles.buttonText}>Submit</Text>:
          <ActivityIndicator size="small" color="#ffffff" />}
     </TouchableOpacity>
     <Text style={{textAlign:'center',marginTop:50,fontSize:12,fontFamily:'normal',color:'#512536'}}>By registring I agree to the terms & conditions.</Text>
   

   
      </KeyboardAvoidingView>
           </SafeAreaView>
    )
}

export default Login

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
        color:'#AC849C'
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
       height:56,
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
