import React from 'react'
import { StyleSheet, Text, View,Image  } from 'react-native'
import { useFocusEffect } from '@react-navigation/native';

const Splash = ({navigation}) => {
    
    useFocusEffect(
        React.useCallback(() => {
            setTimeout(() => {
                navigation.navigate('Signup')
                }, 3000);      
        })
      );

    return (
        <View >
            <Image
        style={styles.logo}
        source={require('../assets/logo.png')}
        resizeMode = 'contain'
      />
      <Text style={{textAlign:'center',fontSize:25,fontFamily:'normal',color:'#AC849C'}}>Associate App</Text>
        </View>
    )
}

export default Splash

const styles = StyleSheet.create({
    logo:{
        marginTop:'50%',
        height:250,
        width:250,
        marginLeft:'20%'
    }
})
