import React,{useState} from 'react'
import { StyleSheet, Text, View,TouchableOpacity,Image,ScrollView ,TextInput} from 'react-native'
import Geolocation from '@react-native-community/geolocation';
import Geocoder from 'react-native-geocoder';


const Header = ({search,navigation}) => {
  const [cords, setCords] = useState(0);
  const location = async ()=>{
    let c = await Geolocation.getCurrentPosition(info => setCords(info))
  
  if(cords){
  Geocoder.geocodePosition({
    lat:cords.coords.latitude,
    lng:cords.coords.longitude
  }).then(res => {
  alert(`Your location is set to "${res[0]['formattedAddress']}"`)
})}
else{
  alert("Please Try Again!")
}
  }
  
  return (
       <>
       <View style={styles.header}>
          <TouchableOpacity
          onPress ={()=>{navigation.toggleDrawer();}}
          >
          <Image
        style={styles.logo}
        source={require('../assets/menu.png')}
        resizeMode = 'contain'
      />
      </TouchableOpacity>
        <Text style={{color:'#ffffff',fontSize:20,fontFamily:'normal'}}>Hello, Jhon Doe</Text>
        <TouchableOpacity
        onPress = {()=>{location()}}
        >
        <Image
        style={styles.logo}
        source={require('../assets/location-pin.png')}
        resizeMode = 'contain'
      />
      </TouchableOpacity>
       </View>
       </>
    )
}

export default Header

const styles = StyleSheet.create({
    header:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingLeft:5,
        paddingRight:5,
        height:100,
        backgroundColor:'#512536',
        width:'100%',
        

      
      },
      logo:{
       
          height:20,
          width:20,
         
      },
      icon:{
       
        height:30,
        width:30,
       
    },
})
