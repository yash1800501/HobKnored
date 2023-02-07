import React from "react";
import { Image, SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { responsiveScreenHeight, responsiveScreenWidth } from "react-native-responsive-dimensions";
import Button from "../components/Button";
import InputTextGradient from "../components/InputTextGradient";

import data from '../Data/FriendsData.json'

const AddPostScreen = ({navigation}) => {
    return (
        <SafeAreaView>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: 20,
            }}>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                }}>
                    <TouchableOpacity
                    style={{

                    }}
                    onPress={()=>{
                        navigation.navigate('Profile')
                    }}
                    >
                    <Image source={require('../assets/backButton.png')}/>
                    </TouchableOpacity>
                    <Text style={{
                        color: 'black',
                        paddingTop: '6%',
                        fontSize: 20,
                    }}>Add Post</Text>
                </View>
                <Button
                    valueText="Post"
                    style={{
                        paddingHorizontal: '5%',
                        borderRadius: 8,
                        fontSize: 18,
                        // height:responsiveScreenHeight(5),
                        // paddingTop:-9,
                    }}
                />
            </View>
            <View
                style={{
                    flexDirection: 'row',
                    paddingHorizontal: 30,
                }}
            >
                <Image source={{ uri: data.result[0].image }}
                    style={{
                        width: responsiveScreenWidth(16),
                        height: responsiveScreenHeight(8),
                        borderRadius: 1000,
                    }}
                />
                <Text style={{
                        color: 'rgba(0, 0, 0, 0.8)',
                        paddingTop: '6%',
                        fontSize: 20,
                        paddingHorizontal: 20,
                    }}>{data.result[0].name}</Text>
            </View>
            <InputTextGradient
            placeholderText="What's Happening?"
            style={{
                width:'90%',
                height:responsiveScreenHeight(20),
                alignSelf:'center',
                marginTop:20,
            }}
            />
            <View
            style={{
                flexDirection:'row',
                width:'90%',
                alignSelf:'center',
                backgroundColor:'white',
                borderRadius:10,
                marginTop:responsiveScreenHeight(10),
                paddingHorizontal:responsiveScreenWidth(4),
                height:responsiveScreenHeight(6),
            }}
            >
                <Image source={require('../assets/photo.png')}
                
                style={{
                    width:responsiveScreenWidth(12),
                    height:responsiveScreenHeight(6),
                }}/>
                <Text style={{height:'100%',paddingTop:responsiveScreenHeight(2),paddingLeft:responsiveScreenWidth(3)}}>Photo</Text>
            </View>
            <View
            style={{
                flexDirection:'row',
                width:'90%',
                alignSelf:'center',
                backgroundColor:'white',
                borderRadius:10,
                marginTop:10,
                paddingHorizontal:responsiveScreenWidth(4),
                height:responsiveScreenHeight(6)
            }}
            >
                <Image source={require('../assets/tagPeople.png')}
                
                style={{
                    width:responsiveScreenWidth(12),
                    height:responsiveScreenHeight(6),
                }}/>
                <Text style={{height:'100%',paddingTop:responsiveScreenHeight(2),paddingLeft:responsiveScreenWidth(3)}}>Tag People</Text>
            </View>
            <View
            style={{
                flexDirection:'row',
                width:'90%',
                alignSelf:'center',
                backgroundColor:'white',
                borderRadius:10,
                marginTop:10,
                paddingHorizontal:responsiveScreenWidth(4),
                height:responsiveScreenHeight(6)
            }}
            >
                <Image source={require('../assets/feelings.png')}
                
                style={{
                    width:responsiveScreenWidth(12),
                    height:responsiveScreenHeight(6),
                }}/>
                <Text style={{height:'100%',paddingTop:responsiveScreenHeight(2),paddingLeft:responsiveScreenWidth(3)}}>Feelings</Text>
            </View>
            <View
            style={{
                flexDirection:'row',
                width:'90%',
                alignSelf:'center',
                backgroundColor:'white',
                borderRadius:10,
                marginTop:10,
                paddingHorizontal:responsiveScreenWidth(4),
                height:responsiveScreenHeight(6)
            }}
            >
                <Image source={require('../assets/checkIn.png')}
                
                style={{
                    width:responsiveScreenWidth(12),
                    height:responsiveScreenHeight(6),
                }}/>
                <Text style={{height:'100%',paddingTop:responsiveScreenHeight(2),paddingLeft:responsiveScreenWidth(3)}}>Check In</Text>
            </View>
            <View
            style={{
                flexDirection:'row',
                width:'90%',
                alignSelf:'center',
                backgroundColor:'white',
                borderRadius:10,
                marginTop:10,
                paddingHorizontal:responsiveScreenWidth(4),
                height:responsiveScreenHeight(6)
            }}
            >
                <Image source={require('../assets/backgroundColor.png')}
                
                style={{
                    width:responsiveScreenWidth(12),
                    height:responsiveScreenHeight(6),
                }}/>
                <Text style={{height:'100%',paddingTop:responsiveScreenHeight(2),paddingLeft:responsiveScreenWidth(3)}}>Background Color</Text>
            </View>
        </SafeAreaView>
    );
}

export default AddPostScreen;