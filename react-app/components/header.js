import React from "react";
import {StyleSheet,Text, View, } from "react-native";

export default function Header() {
    return(
        <View style={styles.header}>
            <Text style ={styles.title}> <i>Event Planner</i></Text>
        </View>
    )
}

const styles  = StyleSheet.create({
    header : {
        height :80,
        paddingTop:38,
        // backgroundColor : "#AFKL567"

        /*Ice Cold: #a0d2eb

Freeze Purple: #e5eaf5

Medium Purple: #d0bdf4

Purple Pain: #8458B3

Heavy Purple: #a28089 */
        backgroundColor : "#8458B3"
        
    },
    title:{
        textAlign: 'center',
        color : '#fff',
        fontSize: 20,
        fontWeight : 'bold',
        fontFamily: 'cursive'
    }
});