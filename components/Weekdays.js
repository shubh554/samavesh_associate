import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'

const Weekdays = ({value}) => {
    const [selected, setSelected] = React.useState(false);
    return (
        <TouchableOpacity
        onPress={()=>{setSelected(!selected)}}
        style={{backgroundColor:selected?'#512536':'#AC849C',height:30,width:30,borderWidth:0,justifyContent:'center',alignItems:'center',flexDirection:'row'}}><Text style={{color:'#ffffff'}}>{value}</Text></TouchableOpacity>

    )
    //#AC849C
}

export default Weekdays

const styles = StyleSheet.create({})
