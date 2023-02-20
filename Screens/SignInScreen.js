import CheckBox from '../components/CheckBox';
import React from 'react';
import { Image, ImageBackground, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import InputTextGradient from '../components/InputTextGradient';
import { responsiveScreenHeight, responsiveScreenWidth, responsiveWidth } from 'react-native-responsive-dimensions';

import { bindActionCreators } from "redux";
import { useDispatch, useSelector } from "react-redux";
import { isOpen , isClose } from "../State/action-creators/index";

export default function App({ navigation }) {
  const dispatch = useDispatch();
  const [isPoterate, setIsPoterate] = React.useState(false);
  return (
    <View
      onLayout={(native) => {
        if (responsiveScreenWidth(100) > responsiveScreenHeight(100)) {
          setIsPoterate(true)
          console.log(isPoterate)
        }
        else {
          setIsPoterate(false)
          console.log(isPoterate)
        }
      }}
    >
      <View
        style={{
          height: responsiveScreenHeight(100),
          width: responsiveScreenWidth(100),
        }}
      >
        {/* <ScrollView> */}
        <View style={styles.container}>
          <SafeAreaView />
          <Image source={require('../assets/upper.png')}

            resizeMethod={'scale'}
            style={{
              width: isPoterate ? responsiveScreenWidth(100) : responsiveScreenWidth(100),
              position: 'absolute',
              top: isPoterate ? responsiveScreenHeight(-45) : responsiveScreenHeight(0),
              zIndex: -1,
              height: isPoterate ? responsiveScreenHeight(100) : responsiveScreenHeight(25),
            }}
          />
          <TouchableOpacity
            onPress={() => {
              navigation.goBack()
            }}
          >
            <Image source={require('../assets/backButton.png')} />
          </TouchableOpacity>
          <ScrollView style={{ backgroundColor: 'transparent' }}>

            <View style={{
              flex: 1,
              justifyContent: 'flex-start',
              alignSelf: 'flex-start',
              paddingVertical: responsiveScreenHeight(12),
              paddingHorizontal: '10%',
              width: '100%',
              // backgroundColor:'#000'
            }}>
              <Text style={{
                fontSize: 24,
                color: '#3AA8DF',
                paddingBottom: 60,
              }}>SIGN IN</Text>

              <Text style={{
                fontSize: 16,
                padding: 5,
                opacity: 0.5,
              }}>Email</Text>
              {/* <TextInput style={{
              // width:,
              height:50,
              borderWidth:0.2,
              marginBottom:10,
              paddingHorizontal:10,
              borderRadius:10,
              shadowColor:'black',
              shadowRadius:2,
              shadowOffset:{
                height:0,
                width:1,
              },
              shadowOpacity:1,
              elevation:5,
              
            }}/> */}
              <InputTextGradient style={{
                width: '100%',
                height: 50,
                shadowColor: 'black',
                shadowRadius: 3,
                shadowOffset: {
                  height: 1,
                  width: 2,
                },
                shadowOpacity: 1,
                elevation: 5,
              }}
                issecureTextEntry={false}

              />

              <Text style={{
                fontSize: 16,
                padding: 4,
                opacity: 0.5,
              }}>Password</Text>
              <InputTextGradient style={{
                shadowColor: 'black',
                shadowRadius: 2,
                shadowOffset: {
                  height: 0,
                  width: 2,
                },
                shadowOpacity: 1,
                elevation: 5,
                marginBottom: 10,
                height: 50,
              }}
                issecureTextEntry={true} />

              <View style={styles.checkboxContainer}>
                <Text style={{
                  fontSize: 12,
                  opacity: 0.5,
                }}
                  onPress={() => {
                    navigation.navigate('ForgetPasswordScreen')
                    dispatch(isOpen(true))
                  }}
                >Forgot password?</Text>
                <View
                  style={{
                    flexDirection: 'row'
                  }}>
                  <CheckBox style={{
                    height: 20,
                    width: 20,
                    borderRadius: 5,
                    borderWidth: 1,
                    marginHorizontal: 10,
                    borderColor: '#868686'
                  }} />
                  <Text style={styles.label}>Remember me</Text>
                </View>
              </View>
              <View style={{
                paddingVertical: 50
              }}>
                <TouchableOpacity style={{
                  width: '100%',
                  height: 50,
                  backgroundColor: '#3AA8DF',
                  alignSelf: 'center',
                  borderRadius: 20,

                }}
                  onPress={() => {
                    navigation.navigate('BottomTabBar')
                  }}
                >
                  <Text style={{
                    alignSelf: 'center',
                    justifyContent: 'center',
                    paddingVertical: 14,
                    fontSize: 16,
                    color: 'white',
                  }}>SIGN IN</Text>
                </TouchableOpacity>
              </View>

            </View>
          </ScrollView>
          <Image source={require('../assets/bottom.png')}

            resizeMethod={'scale'}
            style={{
              width: isPoterate ? responsiveScreenWidth(100) : responsiveScreenWidth(100),
              position: 'absolute',
              bottom: isPoterate ? responsiveScreenHeight(-45) : responsiveScreenHeight(0),
              zIndex: -1,
              height: isPoterate ? responsiveScreenHeight(100) : responsiveScreenHeight(25),
            }}
          />
          <Text
            style={{
              textAlign: 'center',
              marginBottom: '4%',
              color: '#5F5F5F'
            }}
          >Don’t have an account?<Text style={{ color: 'white', fontWeight: '900' }}
            onPress={() => {
              navigation.navigate('SignUpScreen');
              dispatch(isOpen(true))
            }
            }> Sign up</Text></Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  checkboxContainer: {
    flexDirection: "row",
    justifyContent: 'space-between',
    paddingTop: 20
  },
  checkbox: {
    padding: 20,
  },
  label: {
    fontSize: 12,
    opacity: 0.5,
  },
});
