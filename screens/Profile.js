import React from 'react'
import { StyleSheet, Text, View,TextInput,TouchableOpacity ,Image} from 'react-native'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Profile = ({navigation}) => {
    return (
        <View style={{flex:1,justifyContent:'space-between'}}>
            <Header navigation={navigation}/>
            {/* <Footer navigation={navigation}/> */}
           
            <View style={{height:'40%',width:'100%',borderWidth:0,backgroundColor:'#E8E8E8',marginTop:'-18%'}}>
             <View style={{width:'100%',height:'45%',borderWidth:0}}>
             <Image
        style={{height:'100%',width:'100%',borderBottomLeftRadius:50,borderBottomRightRadius:50}}
        source={{
            uri: 'https://www.thoughtco.com/thmb/Y0u9dMhdSXvKQh10yOBoUu-C7vk=/3435x2576/smart/filters:no_upscale()/abstract-paper-flower-pattern-656688606-5acfba2eae9ab80038461ca0.jpg',
          }}
        resizeMode='stretch'
      />
             </View>
             <View style={{height:120,width:120,borderWidth:0,marginLeft:'5%',marginTop:'-20%'}}>
             <Image
        style={{height:'100%',width:'100%',borderBottomLeftRadius:50,borderBottomRightRadius:50}}
        source={{
            uri: 'https://www.oneeducation.org.uk/wp-content/uploads/2020/06/cool-profile-icons-69.png',
          }}
        resizeMode='stretch'
      />
             </View>
             <Text style={{marginTop:5,marginLeft:'5%',fontSize:20,color:'#512536',fontWeight:'bold',fontFamily:'normal'}}>Jhon Doe</Text>
             <Text style={{marginTop:5,marginLeft:'5%',color:'#000000',fontFamily:'normal'}}>Jhon@gmail.com</Text>
             <Text style={{marginTop:5,marginLeft:'5%',color:'#000000',fontFamily:'normal'}}>25 Customers Served</Text>
            </View>
         
             <View>
            <View style={{width:'80%',marginLeft:'10%',height:45,borderWidth:1,marginTop:'2%',borderRadius:10}}>
            <TextInput
            placeholder={"GST"}
            placeholderTextColor={'#000000'}
            />
            </View>

            <View style={{width:'80%',marginLeft:'10%',height:45,borderWidth:1,marginTop:'2%',borderRadius:10}}>
            <TextInput
            placeholder={"PAN"}
            placeholderTextColor={'#000000'}
            />
            </View>

          
            
            <TouchableOpacity style={{borderRadius:100,alignItems:'center',justifyContent:'center',width:'80%',marginLeft:'10%',height:45,borderWidth:0,marginTop:'2%',backgroundColor:'#512536'}}>
            <Text style={{color:'#ffffff',fontFamily:'normal'}}>Update</Text>
            </TouchableOpacity>
            </View>

            <Footer navigation={navigation}/>
            </View>
    )
}

export default Profile

const styles = StyleSheet.create({})
