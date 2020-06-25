import React from "react";
import { View,Text,TextInput,FlatList,TouchableOpacity,StyleSheet,Animated, ImageBackground } from "react-native";
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer'


const OTP = ( {navigation,data}) =>
{
    return (
    <ImageBackground source={require('../../assets/34436.jpg')} style={styles.backgroundImage}>
        <View style={styles.mainContainer}>
            <View style={{justifyContent:"center",flexDirection:"row",}}>
                <CountdownCircleTimer
                isPlaying
                duration={120}
                colors={[['#1796df', 0.50], ['#F7B801', 0.33], ['#000000']]}
                >
                {({ remainingTime, animatedColor }) => (
                <Animated.Text style={{ color: animatedColor , fontSize:30}}>
                    {remainingTime}
                </Animated.Text>
                )}
            </CountdownCircleTimer>
            </View>
            
            <View style={styles.WaveContainer}>
                <Text style={styles.text}> OTP Code Is {Math.round(Math.random()* 999999)}</Text>
            </View>  
        </View>
        </ImageBackground>
        );
};

const styles = StyleSheet.create(
    {
        mainContainer:{
            marginTop:70,
        },
        backgroundImage:
        {
            flex:1
        },
        WaveContainer:{
            flexDirection:"row",
            justifyContent:"space-around",
            backgroundColor:"#010101",
            paddingVertical:30,
            marginTop:250,
            borderColor:"#1796df",
            borderWidth:13,
            borderRadius:10,
            marginHorizontal:2,
            alignItems:"center"
        },
        inputContainer:{
            flexDirection:"row",
            justifyContent:"space-around",
            backgroundColor:"#010101",
            paddingVertical:30,
            marginBottom:10,
            borderColor:"#1796df",
            borderWidth:7,
            borderRadius:10,
            marginHorizontal:2,
            alignItems:"center"
        },
        text:{
            color:"#1796df",
            fontSize:20,
            fontWeight:"700"
        },
        ext:{
            color:"#1796df",
            fontSize:20,
            fontWeight:"700",
            width:100,
            height:49
        }
    })


export default OTP