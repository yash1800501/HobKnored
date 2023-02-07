import React, { useState } from "react";
import { Image, SafeAreaView, Text, TouchableOpacity, View } from "react-native";


import { launchCamera, launchImageLibrary } from "react-native-image-picker";
import { responsiveScreenHeight, responsiveScreenWidth } from "react-native-responsive-dimensions";

const PhotoSelectedScreen = ( {navigation} ) => {

    const [imageUri, setimageUri] = useState('')
    const [isPoterate, setIsPoterate] = useState(false);

    const openCamera = () => {
        let option = {
            storageOption: {
                path : 'image',
                mediaType: 'photo',
            },
            includeBase64: true,
        }
        launchCamera(option,response => {
            console.log('Response = ', response);
            if(response.didCancel) {
                console.log('User cancle the Image Picker');
            }
            else if(response.error) {
                console.log('ImagePicker error = ', response.error);
            }
            else if(response.customButtom) {
                console.log('User tab on customButton', response.customButtom);
            }
            else {
                const source = {uri: response.assets[0].uri}
                console.log(source);
                console.log('hello');
                setimageUri(source);
                alert('Opening the camera');
            }
            
        });
    };
        

    const openGallery = () => {
        let option = {
            storageOption: {
                path : 'image',
                mediaType: 'photo',
            },
            includeBase64: true,
        }
        launchImageLibrary(option,response => {
            console.log('Response = ', response);
            if(response.didCancel) {
                console.log('User cancle the Image Picker');
            }
            else if(response.error) {
                console.log('ImagePicker error = ', response.error);
            }
            else if(response.customButtom) {
                console.log('User tab on customButton', response.customButtom);
            }
            else {
                const source = {uri: response.assets[0].uri}
                console.log('hello');
                setimageUri(source);
            }
        });
    };

    // if (responsiveScreenHeight<responsiveScreenWidth && isPoterate === true)
    //     setIsPoterate(false)

    return(
        <View
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
         style={{
            flex:1,
            justifyContent:'center',
            alignSelf:'center',
            width:'100%',
          }}>
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
        <View
        style={{
        }}
        >
            
            <TouchableOpacity style={{
                width:'50%',
                height:50,
                backgroundColor:'#3AA8DF',
                alignSelf:'center',
                borderRadius:20,
            }}
                onPress={()=>{
                    openCamera();
                }}
            >
                <Text style={{
                alignSelf:'center',
                justifyContent:'center',
                paddingVertical:13,
                fontSize:16,
                color:'white',
                }}>LET' BEGIN</Text>
            </TouchableOpacity>
        </View>
        <View>
            <TouchableOpacity style={{
                width:'50%',
                height:50,
                backgroundColor:'#3AA8DF',
                alignSelf:'center',
                borderRadius:20,
                margin:10,
            }}
                onPress={()=>{
                    openGallery();
                }}
            >
                <Text style={{
                alignSelf:'center',
                justifyContent:'center',
                paddingVertical:13,
                fontSize:16,
                color:'white',
                }}>LET’ BEGIN</Text>
            </TouchableOpacity>
        </View>
        <Image source={imageUri}
        style={{
            height:100,
            width:100,
            borderRadius:100,
            borderWidth:2,
            alignSelf:'center'
        }}
        />
        <Image source={require('../assets/bottom.png')} 
            
            resizeMethod={'scale'}
            style={{
                width: isPoterate? responsiveScreenWidth(100) : responsiveScreenWidth(100),
                position:'absolute',
                bottom: isPoterate? responsiveScreenHeight(-45) : responsiveScreenHeight(0),
                zIndex:-1,
                height:isPoterate? responsiveScreenHeight(105) : responsiveScreenHeight(25),
            }}
            />
    </View>
    );
}

export default PhotoSelectedScreen;