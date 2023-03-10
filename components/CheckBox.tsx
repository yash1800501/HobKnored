import React, { useState } from "react";
import {
  StyleSheet,
  StyleProp,
  ViewStyle,
  TouchableOpacity,
  Text,
  Image
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';


type Props = {
  style?: StyleProp<ViewStyle>;
};



const CheckBox = ({ style }: Props) => {
  const [isChecked, setIsChecked] = useState(false)
  return (

    <LinearGradient colors={isChecked? ['#3AA8DF', '#3AA8DF'] : ['#DBE0E7','#F8FBFF']} style={[styles.LinearGradientStyle, style,{borderColor: isChecked? '#3AA8DF':'black'}]} >

      <TouchableOpacity
        onPress={() => {
          isChecked ? setIsChecked(!isChecked) : setIsChecked(!isChecked);
        }}
      >
        {isChecked ? <Image source={require('../assets/tick.png')} style={{height:15,width:15,margin:2}}/> : <Text></Text>}
      </TouchableOpacity>

    </LinearGradient>

  );
}

export default CheckBox;

const styles = StyleSheet.create({

  LinearGradientStyle: {
    borderRadius: 0,
  },

  ChildViewStyle: {
    width: '100%',
    height: 50,
  },

  TextInputStyleClass: {
    paddingHorizontal: 20,
    height: 50,
    width: '100%'

  }

});

