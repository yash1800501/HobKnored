import React from "react";
import {
  StyleSheet,
  TextInput,
  View,
  StyleProp,
  ViewStyle
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { responsiveScreenHeight } from "react-native-responsive-dimensions";


type Props = {
  style?: StyleProp<ViewStyle>;
  issecureTextEntry: boolean;
  isMultyLine: boolean;
  placeholderText: string;
  inputStyle: StyleProp<ViewStyle>;
  reference: () => {};
  keyType: string;
  keyPressAction: () => {};
  maxl: number;
  returnKeyType:string|undefined;
  keyboardType:string;
};

const InputTextGradient = ({ style, issecureTextEntry, placeholderText, keyboardType, inputStyle, returnKeyType, isMultyLine, reference, keyPressAction, keyType, maxl }: Props) => {
  return (

    <LinearGradient colors={['#DBE0E7', '#F8FBFF']} style={[styles.LinearGradientStyle, style]} >

      <View style={styles.ChildViewStyle}>

        <TextInput
          placeholder={placeholderText}
          placeholderTextColor={'#5F5F5F'}
          style={[styles.TextInputStyleClass, inputStyle]}
          secureTextEntry={issecureTextEntry}
          ref={reference}
          onKeyPress={keyPressAction}
          returnKeyType={returnKeyType}
          maxLength={maxl}
          multiline={isMultyLine}
          keyboardType = {keyboardType}
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
    margin:10,
  },

  LinearGradientStyle: {
    borderRadius: 10,
    margin:5,
  },

  ChildViewStyle: {
    width: '100%',
    height:'100%',
  },

  TextInputStyleClass: {
    paddingHorizontal: 20,
    width: '100%',
    justifyContent:'center',
    height:'100%',
    paddingTop:'1%',

    // color:'#C4C4C4',
  }

});

