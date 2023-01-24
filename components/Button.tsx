import React from "react";
import { StyleProp, Text, TouchableOpacity, View, ViewStyle } from "react-native";
import { responsiveHeight } from "react-native-responsive-dimensions";


type Props = {
    style?: StyleProp<ViewStyle>;
    valueText:string;
    action:() => {};
  };

const Button = ({valueText, action, style}:Props) => {
    return(
        <View style={{
            paddingTop:responsiveHeight(1),
          }}>
            <TouchableOpacity style={[{
            width:'100%',
            height:responsiveHeight(6),
            backgroundColor:'#3AA8DF',
            alignSelf:'center',
            borderRadius:20,

          },style]}
            onPress={action}
          >
            <Text style={{
              textAlign:'center',
              marginVertical:responsiveHeight(1.7),
              fontSize:16,
              color:'white',
            }}>{valueText}</Text>
            </TouchableOpacity>
          </View>
    );
}

export default Button;