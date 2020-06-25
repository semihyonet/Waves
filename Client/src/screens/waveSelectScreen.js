import React from "react";
import { View,Text,Button,FlatList,TouchableOpacity,StyleSheet, ImageBackground } from "react-native";



const waveSelect = ({navigation}) =>
{
    const waveArray = [
        {title:"WAVE 1", requirements:["SMS Verification"]},
        {title:"WAVE 2", requirements:["SMS Verification","Email Verification"]},
        {title:"WAVE 3", requirements:["SMS Verification","Email Verification","Phone Call Verification"]},
        {title:"WAVE 4", requirements:["SMS Verification","Email Verification","Phone Call Verification","2nd Person E-Mail"]},
        {title:"WAVE 5", requirements:["SMS Verification","Email Verification","Phone Call Verification","2nd Person E-Mail","Cargo Delivery"]},
    ]
    return (
    <ImageBackground source={require('../../assets/underwater.jpg')} style={styles.backgroundImage}>
    <View style={styles.mainContainer}>
        <FlatList 
        data={waveArray}
        keyExtractor={(wave) => wave.title}
        renderItem={({item}) =>
        {
            return(
                <TouchableOpacity style={styles.WaveContainer}  onPress={() =>navigation.navigate("Dependency",{data : item.requirements})}>
                    <Text style={styles.text}>{item.title}</Text>
                </TouchableOpacity>
            );

        }}
        />
    </View>
    </ImageBackground>
    );
};

const styles = StyleSheet.create(
    {
        mainContainer:{
            marginTop:100,
        },
        backgroundImage:
        {
            flex:1
        },
        WaveContainer:{
            flexDirection:"row",
            justifyContent:"center",
            backgroundColor:"#010101",
            paddingVertical:30,
            marginBottom:10,
            borderColor:"#1796df",
            borderWidth:20,
            borderRadius:10,
            marginHorizontal:2
        },
        text:{
            color:"#1796df",
            fontSize:20,
            fontWeight:"700"
        }
    })


export default waveSelect