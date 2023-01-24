import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Button from '../components/Button';

const StartScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/upper.png')}
        resizeMode="cover"
        style={{
          flex:1,
          justifyContent:'center',
          height:'25%',
        }}
      >
        <ImageBackground
          source={require('../assets/bottom.png')}
          resizeMode="cover"
          style={{
            flex:1,
            flexDirection:'column-reverse',
            height:'25%',
          }}
        >

        <View style={{
          flex:1,
          justifyContent:'center',
          alignSelf:'center'
        }}>
          <Image source={require('../assets/splashDark.png')}/>
          

          <Button
          valueText='LET’ BEGIN'
          action={()=>{navigation.navigate('PhotoSelectedScreen')}}
          style={{}}
          />
          
          
          <Button
          valueText='SIGN IN'
          action={()=>{navigation.navigate('SignInScreen')}}
          style={{}}
          />

        </View>

        
        </ImageBackground>
      </ImageBackground>
    </View>
    
  );
}

export default StartScreen;

const styles = StyleSheet.create({
  container: {
    flex:1,
  },
});
