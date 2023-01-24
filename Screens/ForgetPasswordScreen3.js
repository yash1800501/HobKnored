import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View, ImageBackground, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
  } from "react-native-responsive-dimensions";

import InputTextGradient from "../components/InputTextGradient";

const ForgetPasswordScreen3 = ({ route, navigation }) => {
  const [modalVisible, setModalVisible] = useState(true);
//   !modalVisible? setModalVisible(route.params):undefined
  return (
    <View style={{
        flex: 1
    }}>
      <ImageBackground
          source={require('../assets/bottom.png')}
          resizeMode="cover"
          style={{
            flex:1,
            flexDirection:'column-reverse',
            height:'25%',
          }}
          blurRadius={10}
        >
        <ImageBackground
        source={require('../assets/upper.png')}
        resizeMode="cover"
        style={{
          flex:1,
          flexDirection:'column',
          justifyContent:'center',
          height:'25%',
        }}
        blurRadius={10}
      >
    <SafeAreaView>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        style={{
            flex:1,
            height:responsiveHeight('100%'),
        }}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View
        style={{
            flexDirection:'row',
            justifyContent:'space-between'
        }}
        >
        <TouchableOpacity
            onPress={() => {
                navigation.goBack()
            }}
        >
            <Image source={require('../assets/backButton.png')}/>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
                navigation.navigate('SignInScreen')
            }}
        >
            <Image source={require('../assets/crossButton.png')}/>
          </TouchableOpacity>
          </View>
        <View
        style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                height:'100%'
        }}
        >
            <View style={{
                // flex:1,
                // justifyContent:'center',
                // alignContent:'center',
                backgroundColor: "rgba(255, 255, 255, 0.3)",
                borderRadius: 20,
                marginBottom:50,
                padding:35,
                alignItems: "center",
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 2
                },
                shadowOpacity: 0.25,
                shadowRadius: 4,
                elevation: 5,
                width:'100%',
                height:'90%'
            }}>
            <Text
            style={{
                fontSize:20,
                paddingBottom:'10%',
            }}
            >Reset Password</Text>
            <Image source={require('../assets/forget3.png')} style={{
                width:'58.6%',
            }}/>
            <InputTextGradient placeholderText="Create a new password"
            style={{
                marginTop:'14%',
                width:'100%',
                shadowColor:'black',
              shadowRadius:4,
              shadowOffset:{
                height:4,
                width:3,
              },
              shadowOpacity:1,
              elevation:5,
            }}
            />

            <InputTextGradient placeholderText="Conform password"
            style={{
                marginTop:10,
                width:'100%',
                shadowColor:'black',
              shadowRadius:4,
              shadowOffset:{
                height:4,
                width:3,
              },
              shadowOpacity:1,
              elevation:5,
            }}
            />

        <View style={{
            paddingTop:'10%',
            width:'100%',
            height:'100%',
          }}>
            <TouchableOpacity style={{
            width:'100%',
            height:50,
            backgroundColor:'#3AA8DF',
            alignSelf:'center',
            borderRadius:20,

          }}
            onPress={()=>{
                setModalVisible(!modalVisible);
                navigation.navigate('PasswordUpdatedScreen')
            }}
          >
            <Text style={{
              alignSelf:'center',
              justifyContent:'center',
              paddingTop:14,
              fontSize:16,
              color:'white',
            }}>CONTINUE</Text>
            </TouchableOpacity>
          </View>
            </View>
        </View>
      </Modal>
      </SafeAreaView>
      </ImageBackground>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
});

export default ForgetPasswordScreen3;