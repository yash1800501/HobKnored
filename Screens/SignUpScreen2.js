import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View, ImageBackground, Image, TouchableOpacity } from "react-native";
import { responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import { SafeAreaView } from "react-native-safe-area-context";

import Button from '../components/Button';
import InputTextGradient from "../components/InputTextGradient";

const SignUpScreen2 = ({ route, navigation }) => {
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
            height:'100%',
            width:'100%'
        }}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={{flexDirection:'row', justifyContent:'space-between',marginTop:30,}}>
        
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
                justifyContent: 'flex-start',
                alignItems: "center",
                height:'100%'
        }}
        >
            <View style={{
                marginBottom:50,
                backgroundColor: "rgba(255, 255, 255, 0.3)",
                borderRadius: 20,
                padding: 35,
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
            <Text style={{
            fontSize:12,
            position:'absolute',
            padding:'5%',
            color:'#000',
            textAlign:'left',
          }}>Step 2</Text>
            <Image source={require('../assets/SignUp1.png')} style={{height:250,width:150,alignSelf:'center'}}/>
            <Text style={{
            fontSize:16,
            color:'#000',
            textAlign:'center',
          }}>Verify Phone Number</Text>
            
            <InputTextGradient placeholderText=""
            style={{
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
            <Text style={{
              fontSize:16,
              padding:5,
              opacity:0.5,
              textAlign:'center',
            }}>Code will be sent to number above. SMS message carrrier rates may apply</Text>
            <Button
          action={()=>{
            navigation.navigate('SignUpScreen3')
            setModalVisible(false)
          }}
          style={{
            width:responsiveWidth(85)
          }}
          valueText="Next"
          />

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

export default SignUpScreen2;