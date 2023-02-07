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

        <TextInput
          placeholder={placeholderText}
          placeholderTextColor={'#5F5F5F'}
          style={[styles.TextInputStyleClass, inputStyle]}
          secureTextEntry={issecureTextEntry}
          ref={reference}
          onKeyPress={keyPressAction}
          returnKeyType="next"
          maxLength={maxl}
          multiline={true}
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
    borderRadius: 10,
  },

  ChildViewStyle: {
    width: '100%',
    height:'100%',
  },

  TextInputStyleClass: {
    paddingHorizontal: 20,
    width: '100%',
    justifyContent:'center',

    // color:'#C4C4C4',
  }

});

