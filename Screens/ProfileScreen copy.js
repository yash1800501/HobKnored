import React from "react";
import { Image, ImageBackground, ScrollView, Text, View } from "react-native";
import MaskedView from '@react-native-masked-view/masked-view';
import { responsiveScreenFontSize, responsiveScreenHeight, responsiveScreenWidth } from "react-native-responsive-dimensions";

const ProfileScreen = () => {
    return (
        <>
            <MaskedView
                style={{ flex: 1, height: '100%' }}
                maskElement={
                    <View
                        style={{
                            // Transparent background because mask is based off alpha channel.
                            backgroundColor: 'black',
                            // flex: 1,
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: responsiveScreenHeight(50),
                            width: responsiveScreenWidth(260),
                            borderBottomRightRadius: 10000,
                            right: responsiveScreenWidth(150),
                            top: -responsiveScreenHeight(15),
                        }}
                    >

                    </View>
                }
            >
                {/* Shows behind the mask, you can put anything here, such as an image */}
                <View style={{ flex: 1, backgroundColor: '#324376' }} >
                    <Image source={require('../assets/bg.png')}
                        style={{
                            width: '100%',
                            height: '40%'
                        }}
                    />
                </View>

            </MaskedView>
            <View
                style={{
                    position: 'absolute',
                    width: responsiveScreenWidth(100),
                    height:responsiveScreenHeight(100),
                }}>
                <Text
                    style={{
                        position: 'absolute',
                        left: responsiveScreenWidth(10),
                        top: responsiveScreenWidth(10),
                        fontSize: responsiveScreenFontSize(4),
                        fontWeight: '600',
                        // width: responsiveScreenWidth(18)
                    }}
                >
                    PROFILE
                </Text>
                <Image source={require('../assets/add.png')}
                    style={{
                        position: 'absolute',
                        height: responsiveScreenHeight(12),
                        width: responsiveScreenWidth(18),
                        left: responsiveScreenWidth(20),
                        top: responsiveScreenHeight(30),
                    }}
                />
                <Image source={require('../assets/edit.png')}
                    style={{
                        position: 'absolute',
                        height: responsiveScreenHeight(12),
                        width: responsiveScreenWidth(18),
                        left: responsiveScreenWidth(60),
                        top: responsiveScreenHeight(25),
                    }}
                />
                <View style={{
                    position: 'absolute',
                    height: responsiveScreenWidth(25),
                    width: responsiveScreenWidth(25),
                    borderRadius: 100,
                    borderWidth: 1,
                    left: responsiveScreenWidth(35),
                    top: responsiveScreenHeight(27),
                    backgroundColor:'white'
                }}>

                </View>
                <ScrollView style={{
                    // flex:1,
                    // justifyContent:'flex-start',
                    alignSelf:'center',
                    height:'0%',
                    width:'100%',
                    alignContent:'center',
                    marginTop:responsiveScreenHeight(40),
                    marginBottom:responsiveScreenHeight(14),
                    }}>
                    <Text style={{borderWidth:1}}>Hello</Text>
                    <Text>Hello</Text>
                    <Text>Hello</Text>
                    <Text>Hello</Text>
                    <Text>Hello</Text>
                    <Text>Hello</Text>
                    <Text>Hello</Text>
                    <Text>Hello</Text>
                    <Text>Hello</Text>
                    <Text>Hello</Text>

                    <Text>Hello</Text>
                    <Text>Hello</Text>
                    <Text>Hello</Text>
                    <Text>Hello</Text>
                    <Text>Hello</Text>
                    <Text>Hello</Text>
                    <Text>Hello</Text>
                    <Text>Hello</Text>
                    <Text>Hello</Text>
                    <Text>Hello</Text>
                    <Text>Hello</Text>
                    <Text>Hello</Text>
                    <Text>Hello</Text>
                    <Text>Hello</Text>
                    <Text>Hello</Text>
                    <Text>Hello</Text>
                    <Text>Hello</Text>
                    <Text>Hello</Text>
                    <Text>Hello</Text>
                    <Text>Hello</Text>
                    <Text>Hello</Text>
                    <Text>Hello</Text>
                    <Text>Hello</Text>
                    <Text>Hello</Text>
                    <Text>Hello</Text>
                    <Text>Hello</Text>
                    <Text>Hello</Text>
                </ScrollView>
            </View>
        </>
    );
}

export default ProfileScreen;