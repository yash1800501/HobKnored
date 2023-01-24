import React, { useState } from "react";
import { Image, SafeAreaView, Text, TouchableOpacity, View } from "react-native";


import { launchCamera, launchImageLibrary } from "react-native-image-picker";

const PhotoSelectedScreen = ( {navigation} ) => {

    const [imageUri, setimageUri] = useState('')

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


    return(
        <SafeAreaView style={{
            flex:1,
            justifyContent:'center',
            alignSelf:'center',
            width:'100%',
          }}>
        <View>
            <TouchableOpacity style={{
                width:'100%',
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
                }}>LET’ BEGIN</Text>
            </TouchableOpacity>
        </View>
        <View>
            <TouchableOpacity style={{
                width:'100%',
                height:50,
                backgroundColor:'#3AA8DF',
                alignSelf:'center',
                borderRadius:20,
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
    </SafeAreaView>
    );
}

export default PhotoSelectedScreen;