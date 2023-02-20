import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View, ImageBackground, Image, TouchableOpacity, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import InputTextGradient from "../components/InputTextGradient";
import Button from '../components/Button';

import {landscape,portrait} from '../State/action-creators/index';
import { bindActionCreators } from "redux";
import { useDispatch, useSelector } from "react-redux";
import { isOpen, isClose } from "../State/action-creators/index";


const SignUp3 = ({ navigation, route }) => {
  const [modalVisible1, setModalVisible1] = useState(true);
  const dispatch = useDispatch();
  const isOpen1 = useSelector(state => state.isOpen? false : !state.isOpen);
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
            paddingTop:20,
            flexDirection:'row',
            justifyContent:'space-between'
        }}
        >
        <TouchableOpacity
            onPress={() => {
                navigation.navigate('SignUpScreen2')
                setModalVisible1(!modalVisible1)
                dispatch(isClose(false))
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
                marginBottom: 50,
                backgroundColor: "rgba(255, 255, 255, 0.3)",
                borderRadius: 20,
                padding: 35,
                alignSelf: "center",
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
            <Image source={require('../assets/SignUp2-3.png')} style={{
                height:'50%',
                width:'50%',
                alignSelf:'center'
            }}/>
            <View
            style={{
                flexDirection:'row',
                height:'8%',
                alignItems:'center',
                width:'100%'
            }}
            >
                <InputTextGradient placeholderText=""
            style={{
                marginHorizontal:'4%',
                marginTop:30,
                width:50,
                height:50,
                shadowColor:'black',
              shadowRadius:4,
              shadowOffset:{
                height:4,
                width:3,
              },
              shadowOpacity:1,
              elevation:5,
            }}
            keyPressAction={({ nativeEvent }) => {nativeEvent.key === 'Backspace'? undefined:this.secondTextInput.focus();}}
            reference={(input) => { this.firstTextInput = input; }}
            maxl={1}
            />
            <InputTextGradient placeholderText=""
            style={{
                marginHorizontal:'4%',
                marginTop:30,
                width:50,
                height:50,
                shadowColor:'black',
              shadowRadius:4,
              shadowOffset:{
                height:4,
                width:3,
              },
              shadowOpacity:1,
              elevation:5,
            }}
            keyPressAction={({ nativeEvent }) => { nativeEvent.key === 'Backspace'? this.firstTextInput.focus():this.thirdTextInput.focus(); }}
            reference={(input) => { this.secondTextInput = input; }}
            maxl={1}
            />
            <InputTextGradient placeholderText=""
            style={{
                marginHorizontal:'4%',
                marginTop:30,
                width:50,
                height:50,
                shadowColor:'black',
              shadowRadius:4,
              shadowOffset:{
                height:4,
                width:3,
              },
              shadowOpacity:1,
              elevation:5,
            }}
            keyPressAction={({ nativeEvent }) => { 
              nativeEvent.key === 'Backspace'? this.secondTextInput.focus():this.fourthTextInput.focus();
               }}
            reference={(input) => { this.thirdTextInput = input; }}
            maxl={1}
            />
            <InputTextGradient placeholderText=""
            style={{
                marginHorizontal:'4%',
                marginTop:30,
                width:50,
                height:50,
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
            keyPressAction={({ nativeEvent }) => {
              nativeEvent.key === 'Backspace'? this.thirdTextInput.focus():undefined
            }}
            reference={(input) => { this.fourthTextInput = input; }}
            maxl={1}
            />







            </View>
            
            <View
            style={{
                width:'100%',
            }}
            ><Text style={{
                fontSize:12,
                color:'#868686',
                textAlign:'right',
                paddingTop:'9%',
                paddingRight:'10%',
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

        <Button
        valueText="Continue"
        />
          <Text style={{textAlign:'center'}}>Didn’t receive the code? <Text style={{color:'white',fontWeight:'900'}}>resend</Text></Text>
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

export default SignUp3;