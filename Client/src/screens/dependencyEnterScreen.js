import React from "react";
import { View,Text,TextInput,FlatList,TouchableOpacity,StyleSheet, ImageBackground } from "react-native";



const Dependency = ( {navigation,data}) =>
{
    const {state } = navigation
    return (
        <ImageBackground source={require('../../assets/34436.jpg')} style={styles.backgroundImage}>
    <View style={styles.mainContainer}>
        
        <FlatList 
        data={state.params.data}
        keyExtractor={(wave) => `${wave.length}`}
        scrollEnabled={false}
        renderItem={({item}) =>
        {
            return(
                    <View style={styles.inputContainer}>
                        <Text style={styles.text}> {item} </Text>
                        <View style={{
                                backgroundColor:"#CCCCCC",
                                borderWidth:6,
                                borderColor:"#777",
                                borderRadius:15,
                                paddingLeft:4
                            }
                        }>
                            <TextInput style={styles.ext} />
                        </View>
                    </View> 
                
            );

        }}
        />
        <TouchableOpacity style={styles.WaveContainer} onPress={() => navigation.navigate("OTP")}>
            <Text style={styles.text}> VERIFY</Text>
        </TouchableOpacity>  
    </View>
    </ImageBackground>
    );
};

const styles = StyleSheet.create(
    {
        mainContainer:{
            marginTop:70,
        },
        WaveContainer:{
            flexDirection:"row",
            justifyContent:"space-around",
            backgroundColor:"#010101",
            paddingVertical:30,
            marginBottom:10,
            borderColor:"#1796df",
            borderWidth:13,
            borderRadius:10,
            marginHorizontal:2,
            alignItems:"center"
        },
        backgroundImage:
        {
            flex:1
        },
        inputContainer:{
            flexDirection:"row",
            justifyContent: "space-between",
            backgroundColor:"#010101",
            paddingVertical:30,
            marginBottom:10,
            borderColor:"#1796df",
            borderWidth:7,
            borderRadius:10,
            marginHorizontal:2,
            alignItems:"center",
            paddingHorizontal:15
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


export default Dependency