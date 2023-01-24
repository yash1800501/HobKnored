import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View, ImageBackground, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import InputTextGradient from "../components/InputTextGradient";

const PasswordUpdateScreen = ({ route, navigation }) => {
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
        <View
        style={{
                flex: 1,
                justifyContent: "flex-end",
                alignItems: "center",
                height:'100%'
        }}
        >
            <View style={{
                flex:1,
                justifyContent:'center',
                margin: 50,
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
            
            <Image source={require('../assets/forget4.png')} style={{
                width:'58.6%',
            }}/>
            <Text
            style={{
                fontSize:24,
                paddingBottom:'5%',
            }}
            >PASSWORD UPDATED</Text>
            <Text
            style={{
                fontSize:15,
                paddingBottom:'10%',
                color:'#868686',
                textAlign:'center'
            }}
            >your password has been reset {'\n'} successfully.</Text>

        <View style={{
            paddingTop:'20%',
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
                navigation.navigate('SignInScreen')
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

export default PasswordUpdateScreen;