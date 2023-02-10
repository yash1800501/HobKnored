import React from "react";
import { StyleProp, Text, TouchableOpacity, View, ViewStyle } from "react-native";
import { responsiveHeight, responsiveScreenHeight, responsiveScreenWidth } from "react-native-responsive-dimensions";


type Props = {
    style?: StyleProp<ViewStyle>;
    valueText:string;
    action:() => {};
  };

const Button = ({valueText, action, style}:Props) => {
  const [isPoterate, setIsPoterate] = React.useState(false);
    return(
        <View 
        onLayout={(native) => {
          if (responsiveScreenWidth(100) > responsiveScreenHeight(100)) {
              setIsPoterate(true)
              console.log("asas",isPoterate)
          }
          else {
              setIsPoterate(false)
              console.log("asas",isPoterate)
          }
      }}
          style={{
            paddingTop:responsiveHeight(1),
          }}>
            <TouchableOpacity style={[{
            width:'100%',
            height:isPoterate? responsiveScreenWidth(6) : responsiveScreenHeight(6),
            backgroundColor:'#3AA8DF',
            alignSelf:'center',
            borderRadius:20,

          },style]}
            onPress={action}
          >
            <Text style={{
              textAlign:'center',
              marginVertical:isPoterate? responsiveScreenWidth(1.7) : responsiveScreenHeight(1.7),
              fontSize:16,
              color:'white',
            }}>{valueText}</Text>
            </TouchableOpacity>
          </View>
    );
}

export default Button;