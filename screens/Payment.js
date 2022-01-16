import React,{useContext,useState} from 'react'
import { StyleSheet, Text,SafeAreaView, View,Image ,TextInput,TouchableOpacity,KeyboardAvoidingView,ActivityIndicator,Pressable} from 'react-native'





const Payment = ({navigation}) => {
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
       <View style={{marginLeft:'5%',marginRight:'5%'}}>
              <Text style={{fontFamily:'normal',fontSize:22,textAlign:'justify',color:'#512536'}}>One Time Training & Skill Development Fee and Security Deposit 
              of INR 5000 is reuqired
              </Text>
              <Text style={{fontFamily:'normal',fontSize:20,textAlign:'left',color:'#000000'}}>Terms & Conditions :-</Text>
              <Text style={{fontFamily:'normal',fontSize:15,textAlign:'left',color:'#000000'}}>1- Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
              <Text style={{fontFamily:'normal',fontSize:15,textAlign:'left',color:'#000000'}}>2- Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
              <Text style={{fontFamily:'normal',fontSize:15,textAlign:'left',color:'#000000'}}>3- Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
              <Text style={{fontFamily:'normal',fontSize:15,textAlign:'left',color:'#000000'}}>4- Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
              <Text style={{fontFamily:'normal',fontSize:15,textAlign:'left',color:'#000000'}}>5- Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
              <Text style={{fontFamily:'normal',fontSize:15,textAlign:'left',color:'#000000'}}>6- Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
          </View>

<TouchableOpacity style={styles.button}
        onPress ={()=>{navigation.navigate('Complete')}}
      >
         
       {!loading?<Text style={styles.buttonText}>Proceed To Pay INR 5000</Text>:
          <ActivityIndicator size="small" color="#ffffff" />}
     </TouchableOpacity>
      
            
           </SafeAreaView>
    )
}

export default Payment

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
        marginTop:'1%',
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
       width:'80%',
       height:46,
       backgroundColor:'#512536',
       borderRadius:30,
       marginTop:'10%',
       justifyContent:'center',
       marginLeft:'10%'
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

