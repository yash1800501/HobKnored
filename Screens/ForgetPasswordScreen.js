import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View, ImageBackground, Image, TouchableOpacity } from "react-native";
import { responsiveHeight } from "react-native-responsive-dimensions";
import { SafeAreaView } from "react-native-safe-area-context";

import InputTextGradient from "../components/InputTextGradient";

const ForgetPasswordScreen = ({ route, navigation }) => {
  const {v} = route.params;
  console.log(v)
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
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        style={{
            flex:1,
            height:'100%',
        }}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <SafeAreaView
        style={{
            paddingTop:40,
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
        </SafeAreaView>
        <View
        style={{
                flex: 1,
                justifyContent: "flex-end",
                alignItems: "center",
                height:'100%'
        }}
        >
            <View style={{
                margin: 50,
                backgroundColor: "rgba(255, 255, 255, 0.3)",
                borderRadius: 20,
                padding: 35,
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
            >Forget Password</Text>
            <Image source={require('../assets/forget1.png')} style={{
                // height:responsiveHeight('150'),
            }}/>
            <InputTextGradient placeholderText="Enter your Email or Phone Number"
            style={{
                marginTop:'24%',
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
            paddingTop:responsiveHeight(10),
            width:'100%'
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
                navigation.navigate('ForgetPasswordScreen2')
            }}
          >
            <Text style={{
              alignSelf:'center',
              justifyContent:'center',
              paddingVertical:14,
              fontSize:16,
              color:'white',
            }}>CONTINUE</Text>
            </TouchableOpacity>
          </View>
            </View>
        </View>
      </Modal>
      </ImageBackground>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
});

export default ForgetPasswordScreen;