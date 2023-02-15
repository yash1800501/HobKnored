import React from "react";
import {
  StyleSheet,
  TextInput,
  View,
  StyleProp,
  ViewStyle,
  Image
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { responsiveScreenHeight, responsiveScreenWidth } from "react-native-responsive-dimensions";


type Props = {
  style?: StyleProp<ViewStyle>;
  issecureTextEntry: boolean;
  placeholderText: string;
  inputStyle: StyleProp<ViewStyle>;
  reference: () => {};
  keyType: string;
  keyPressAction: () => {};
  maxl: number;
};

const InputTextGradient = ({ style, issecureTextEntry, placeholderText, inputStyle, reference, keyPressAction, keyType, maxl }: Props) => {
  return (

    <LinearGradient colors={['#DBE0E7', '#F8FBFF']} style={[styles.LinearGradientStyle, style]} >

      <View style={styles.ChildViewStyle}>
      <Image source={require('../assets/Search.png')}
        style={{
            height:'40%',
            width:20,
            marginTop:14,
            marginLeft:15,
            position:'absolute',
        }}
        />
        <TextInput
          placeholder={placeholderText}
          placeholderTextColor={'#5F5F5F'}
          style={[styles.TextInputStyleClass, inputStyle]}
          secureTextEntry={issecureTextEntry}
          ref={reference}
          onKeyPress={keyPressAction}
          returnKeyType="next"
          maxLength={maxl}
        />

      </View>

    </LinearGradient>

  );
}

export default InputTextGradient;

const styles = StyleSheet.create({

  MainContainer: {

    //   flex:1,
    //   justifyContent: 'center',
    //   alignItems: 'center',
    //   backgroundColor : '#fff'

  },

  LinearGradientStyle: {
    borderRadius: 20,
  },

  ChildViewStyle: {
    width: '100%',
    height:'100%',
  },

  TextInputStyleClass: {
    paddingHorizontal: responsiveScreenWidth(14),
    width: '100%',
    height:'100%',
    justifyContent:'center',
    fontSize:18,

    // color:'#C4C4C4',
  }

});

