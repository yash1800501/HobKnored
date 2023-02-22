import {
    StyleProp,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    ViewStyle,
  } from 'react-native';
  import React from 'react';
import { responsiveHeight, responsiveScreenFontSize, responsiveScreenHeight, responsiveScreenWidth, responsiveWidth, useResponsiveScreenFontSize } from 'react-native-responsive-dimensions';
  
  type Props = {
    imoji: string;
    text: string;
    value: number;
    isSelected: boolean;
    onSelect: (value: number) => void;
    style?: StyleProp<ViewStyle>;
    disable: boolean;
  };
  
  const NumberOfTableSelector = ({isSelected, onSelect, value, style, imoji, text, disable}: Props) => {
    return (
      <TouchableOpacity
        style={[
          styles.number,
          {
            backgroundColor: isSelected ? '#3AA8DF' : undefined,
  
            borderColor: isSelected ? '#3AA8DF' : '#3AA8DF',
          },
          style,
        ]}
        disabled={disable}
        onPress={() => onSelect(value)}>
          <View style={{flexDirection:'row'}}>
            <Text
            style={[{
                color: isSelected ? 'white' : '#3AA8DF',
                // fontWeight: '700',
                fontSize: useResponsiveScreenFontSize(1.8),
               },style]}
            >{imoji}</Text>
            <Text
              style={[{
                color: isSelected ? 'white' : '#3AA8DF',
                // fontWeight: '700',
                fontSize: useResponsiveScreenFontSize(1.8),
               },style]}>
              {text}
            </Text>
          </View>
      </TouchableOpacity>
    );
  };
  
  export default NumberOfTableSelector;
  
  const styles = StyleSheet.create({
    number: {
      margin:4,
      padding:4,
    //   width: responsiveScreenWidth(60),
    //   height: responsiveScreenHeight(5),
      borderRadius: 20,
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 1,
      // shadowColor: '#000',
      // shadowOffset: {
      //   width: 5,
      //   height: 2,
      // },
      // shadowOpacity: 0.65,
      // shadowRadius: 3,
      // elevation: 15,
    },
    innerText:{
      fontSize:16,
      textAlign:'center',
    },
  });
  