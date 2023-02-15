import React from 'react';
import {Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View} from 'react-native';

import { launchCamera, launchImageLibrary } from "react-native-image-picker";
import { responsiveScreenHeight, responsiveScreenWidth } from "react-native-responsive-dimensions";



const AddPostPhoto = ({navigation}) => {
    const [imageUri, setimageUri] = React.useState('')
    const [isPoterate, setIsPoterate] = React.useState(false);
    const [arrayCount,setArrayCount] = React.useState(0);
    var [selectedArray, setselectedArray] = React.useState(Array());
    const openGallery = () => {
        let option = {
            storageOption: {
                path : 'image',
                mediaType: 'photo',
            },
            includeBase64: true,
        }
        launchImageLibrary(option,response => {
            if(response.didCancel) {
                console.log('User cancle the Image Picker');
                setArrayCount(arrayCount);
            }
            else if(response.error) {
                console.log('ImagePicker error = ', response.error);
            }
            else if(response.customButtom) {
                console.log('User tab on customButton', response.customButtom);
            }
            else if(response.assets) {
                const source = {uri: response.assets[0].uri};
                setimageUri(source);
                setselectedArray(selectedArray.concat(imageUri));
                setArrayCount(arrayCount+1);
            }
            else {
                const source = {uri: response.assets[0].uri};
                setimageUri(source);
                setselectedArray(selectedArray.concat(imageUri));
            }
        });
    };
  return (
    <SafeAreaView
      onLayout={native => {
        if (responsiveScreenWidth(100) > responsiveScreenHeight(100)) {
          setIsPoterate(true);
          console.log(isPoterate);
        } else {
          setIsPoterate(false);
          console.log(isPoterate);
        }
      }}>
      <ScrollView>
        <TouchableOpacity
          style={{}}
          onPress={() => {
            navigation.navigate('AddPostScreen1');
          }}>
          <Image source={require('../assets/backButton.png')} />
        </TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            width: responsiveScreenWidth(100),
            flexWrap: 'wrap',
          }}>
          {[...Array(arrayCount)].map((_, index) => {
            // if(arrayCount == 0)
            console.log(index);

            return (
              <Image
                source={selectedArray[index + 1] || imageUri}
                style={{
                  height: responsiveScreenHeight(80) / 5.5,
                  width: responsiveScreenWidth(100) / 3.5,
                  borderRadius: 10,
                  margin: responsiveScreenWidth(2),
                }}
              />
            );
          })}
          <View
            style={{
              borderStyle: 'dashed',
              borderRadius: 10,
              borderWidth: 2,
              height: responsiveScreenHeight(80) / 5.5,
              width: responsiveScreenWidth(100) / 3.5,
              borderColor: 'rgba(58, 168, 223, 1)',
              backgroundColor: 'rgba(58, 168, 223, 0.08)',
              margin: responsiveScreenWidth(2.5),
            }}>
            <Text
              style={{
                flex: 1,
                justifyContent: 'center',
                color: 'rgba(58, 168, 223, 1)',
                alignSelf: 'center',
                paddingTop: responsiveScreenHeight(4.5),
                fontSize: 40,
              }}
              onPress={event => {
                // if(arrayCount == 0)
                // {
                //     setArrayCount(arrayCount+2);
                // }
                // else
                // {
                //     setArrayCount(arrayCount+1);
                // }
                openGallery();
                console.log(selectedArray);
              }}>
              +
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AddPostPhoto;