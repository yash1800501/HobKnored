import CheckBox from '../components/CheckBox';
import React from 'react';
import { Image, ImageBackground, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import InputTextGradient from '../components/InputTextGradient';
import { responsiveHeight } from 'react-native-responsive-dimensions';

export default function App({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/upper.png')}
        resizeMode="cover"
        style={{
          flex:1,
          flexDirection:'column',
          justifyContent:'center',
          height:responsiveHeight(25),
        }}
      >
        <SafeAreaView/>
        <TouchableOpacity
            onPress={() => {
                navigation.goBack()
            }}
        >
            <Image source={require('../assets/backButton.png')}/>
          </TouchableOpacity>
      <ImageBackground
          source={require('../assets/bottom.png')}
          resizeMode="cover"
          style={{
            flex:1,
            flexDirection:'column-reverse',
            height:'25%',
          }}
        >
            <Text
            style={{
              textAlign:'center',
              marginBottom:'4%',
              color:'#5F5F5F'
            }}
            >Don’t have an account?<Text style={{color:'white',fontWeight:'900'}} 
            onPress={()=>{
              navigation.navigate('SignUpScreen');}
            }> Sign up</Text></Text>
        

          <View style={{
          flex:1,
          justifyContent:'flex-start',
          alignSelf:'flex-start',
          paddingVertical:'20%',
          paddingHorizontal:'10%',
          width:'100%',
          // backgroundColor:'#000'
        }}>
          <Text style={{
            fontSize:24,
            color:'#3AA8DF',
            paddingBottom:60,
          }}>SIGN IN</Text>
          
            <Text style={{
              fontSize:16,
              padding:5,
              opacity:0.5,
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
              width:'100%',
              height:50,
              shadowColor:'black',
              shadowRadius:3,
              shadowOffset:{
                height:1,
                width:2,
              },
              shadowOpacity:1,
              elevation:5,
            }}
            issecureTextEntry={false}/>

            <Text style={{
              fontSize:16,
              padding:4,
              opacity:0.5,
            }}>Password</Text>
            <InputTextGradient style={{
              shadowColor:'black',
              shadowRadius:2,
              shadowOffset:{
                height:0,
                width:2,
              },
              shadowOpacity:1,
              elevation:5,
              marginBottom:10,
            }}
            issecureTextEntry={true}/>
            
            <View style={styles.checkboxContainer}>
              <Text style={{
                fontSize:12,
                opacity:0.5,
              }}
              onPress={()=>{
                navigation.navigate('ForgetPasswordScreen',{v:true})
              }}
              >Forgot password?</Text>
              <View
              style={{
                flexDirection:'row'
              }}>
              <CheckBox style={{
                height:20,
                width:20,
                borderRadius:5,
                borderWidth:1,
                marginHorizontal:10,
                borderColor:'#868686'
              }}/>
              <Text style={styles.label}>Remember me</Text>
              </View>
            </View>
            <View style={{
            paddingVertical:50
          }}>
            <TouchableOpacity style={{
            width:'100%',
            height:50,
            backgroundColor:'#3AA8DF',
            alignSelf:'center',
            borderRadius:20,

          }}
            onPress={()=>{
              navigation.navigate('BottomTabBar')
            }}
          >
            <Text style={{
              alignSelf:'center',
              justifyContent:'center',
              paddingVertical:14,
              fontSize:16,
              color:'white',
            }}>SIGN IN</Text>
            </TouchableOpacity>
          </View>
            
        </View>

        
          
        

        
        </ImageBackground>
      </ImageBackground>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
  },
  checkboxContainer: {
    flexDirection: "row",
    justifyContent:'space-between',
    paddingTop:20
  },
  checkbox: {
    padding:20,
  },
  label: {
    fontSize:12,
    opacity:0.5,
  },
});
