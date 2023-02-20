import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View, ImageBackground, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import InputTextGradient from "../components/InputTextGradient";

import { bindActionCreators } from "redux";
import { useDispatch, useSelector } from "react-redux";
import { isOpen , isClose } from "../State/action-creators/index";

const ForgetPasswordScreen = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const isOpen1 = useSelector(state => state.isOpen? state.isOpen : false);
  const [modalVisible1, setModalVisible1] = useState(true);
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
        visible={!isOpen1}
        style={{
            flex:1,
            height:'100%',
        }}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible1(!modalVisible1);
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
                navigation.navigate('ForgetPasswordScreen')
                // setModalVisible1(!modalVisible1)
                dispatch(isOpen(true))
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
            }}
            >Varification Code</Text>
            <Image source={require('../assets/forget2.png')} style={{
                height:'50%',
                width:'50%',
            }}/>
            <View
            style={{
                flexDirection:'row',
                height:'8%',
                alignItems:'center',
            }}
            >
                <InputTextGradient placeholderText=""
            style={{
                marginHorizontal:'4%',
                width:50,
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
            <InputTextGradient placeholderText=""
            style={{
                marginHorizontal:'4%',
                width:50,
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
            <InputTextGradient placeholderText=""
            style={{
                marginHorizontal:'4%',
                width:50,
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
            <InputTextGradient placeholderText=""
            style={{
                marginHorizontal:'4%',
                width:50,
                shadowColor:'black',
              shadowRadius:4,
              shadowOffset:{
                height:4,
                width:3,
              },
              shadowOpacity:1,
              elevation:5,
            }}
            inputStyle={{
                textAlign:'center',
            }}
            />
            </View>
            
            <View
            style={{
                width:'90%',
            }}
            ><Text style={{
                fontSize:12,
                color:'#868686',
                textAlign:'right',
                paddingTop:'4%',
                paddingRight:'3%',
            }}>00:26</Text>
            <Text
            style={{
                paddingTop:'5%',
                fontSize:14,
                textAlign:'center',

            }}
            >
            AN 4 DIGIT CODE HAS BEEN SEND TO  
            </Text>
            <Text
            style={{
                textAlign:'center',
                color:'#3AA8DF'
            }}
            >
            +1 512 - 358 - 6984
            </Text>
            </View>
        <View style={{
            paddingVertical:18,
            width:'100%',
            height:'18%'
          }}>
            <TouchableOpacity style={{
            width:'100%',
            height:50,
            backgroundColor:'#3AA8DF',
            alignSelf:'center',
            borderRadius:20,

          }}
            onPress={()=>{
              navigation.navigate('ForgetPasswordScreen3')
              setModalVisible1(!modalVisible1);
              dispatch(isOpen(true))
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
          <Text>Didn’t receive the code? <Text style={{color:'white',fontWeight:'900'}}>resend</Text></Text>
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