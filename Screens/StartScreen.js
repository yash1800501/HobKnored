import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions';
import Button from '../components/Button';

const StartScreen = ({ navigation }) => {
  const [isPoterate, setIsPoterate] = React.useState(false);
  return (
    <View style={styles.container}
    
    onLayout={(native)=>{
      if(native.nativeEvent.layout.width>native.nativeEvent.layout.height)
      {
          setIsPoterate(true)
          console.log(isPoterate)
      }
      else
      {
          setIsPoterate(false)
          console.log(isPoterate)
      }
   }}
    >
      
      <Image source={require('../assets/upper.png')} 
            
            resizeMethod={'scale'}
            style={{
                width: isPoterate? responsiveScreenWidth(100) : responsiveScreenWidth(100),
                position:'absolute',
                top: isPoterate? responsiveScreenHeight(-45) : responsiveScreenHeight(0),
                zIndex:-1,
                height:isPoterate? responsiveScreenHeight(100) : responsiveScreenHeight(25),
            }}
            />
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
        <Image source={require('../assets/bottom.png')} 
            
            resizeMethod={'scale'}
            style={{
                width: isPoterate? responsiveScreenWidth(100) : responsiveScreenWidth(100),
                position:'absolute',
                bottom: isPoterate? responsiveScreenHeight(-45) : responsiveScreenHeight(0),
                zIndex:-1,
                height:isPoterate? responsiveScreenHeight(100) : responsiveScreenHeight(25),
            }}
            />
    </View>
    
  );
}

export default StartScreen;

const styles = StyleSheet.create({
  container: {
    flex:1,
  },
});
