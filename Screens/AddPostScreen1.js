import React from "react";
import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { responsiveScreenHeight, responsiveScreenWidth } from "react-native-responsive-dimensions";
import { useDispatch, useSelector } from "react-redux";
import Button from "../components/Button";
import InputTextGradient from "../components/InputTextGradient";

import {landscape,portrait} from '../State/action-creators/index';
import data from '../Data/FriendsData.json'

const AddPostScreen = ({navigation}) => {
    const dispatch = useDispatch();
    const mode = useSelector(state => state.mode);
    return (
        <SafeAreaView
        onLayout={(native) => {
            if (responsiveScreenWidth(100) > responsiveScreenHeight(100)) {
                dispatch(landscape(true))
                console.log(mode)
            }
            else {
                dispatch(portrait(false))
                console.log(mode)
            }
        }}
        scrollEventThrottle={(value) => {
            setWidth(value)
            console.log(value)
        }}
        >
            <ScrollView>
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
                        paddingTop: mode? responsiveScreenWidth(6) : responsiveScreenHeight(6),
                        fontSize: 20,
                    }}>Add Post</Text>
                </View>
                <Button
                    valueText="Post"
                    style={{
                        paddingHorizontal: '5%',
                        borderRadius: 8,
                        fontSize: 18,
                        height:40
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
                        width: mode? responsiveScreenWidth(16) : responsiveScreenHeight(16),
                        height: mode? responsiveScreenHeight(8) : responsiveScreenWidth(8),
                        borderRadius: 1000,
                    }}
                />
                <Text style={{
                        color: 'rgba(0, 0, 0, 0.8)',
                        paddingTop: mode? responsiveScreenWidth(6) : responsiveScreenHeight(6),
                        fontSize: 20,
                        paddingHorizontal: 20,
                    }}>{data.result[0].name}</Text>
            </View>
            <InputTextGradient
            placeholderText="What's Happening?"
            style={{
                width:'90%',
                height:mode? responsiveScreenHeight(20) : responsiveScreenWidth(20),
                alignSelf:'center',
                marginTop:20,
            }}
            />
            <TouchableOpacity
            onPress={() => {
                navigation.navigate("AddPostPhoto");
            }}
            >
            <View
            style={{
                flexDirection:'row',
                width:'90%',
                alignSelf:'center',
                backgroundColor:'white',
                borderRadius:10,
                marginTop:mode? responsiveScreenHeight(10) : responsiveScreenWidth(10),
                paddingHorizontal: mode?responsiveScreenWidth(4) : responsiveScreenHeight(4),
                height: mode? responsiveScreenHeight(6) : responsiveScreenWidth(6),
            }}
            >
                <Image source={require('../assets/photo.png')}
                
                style={{
                    width: mode?responsiveScreenWidth(12) : responsiveScreenHeight(12),
                    height: mode? responsiveScreenHeight(6) : responsiveScreenWidth(6),
                }}/>
                <Text style={{
                    height:'100%',
                    paddingTop:mode? responsiveScreenHeight(2) : responsiveScreenWidth(2),
                    paddingLeft:responsiveScreenWidth(3)
                    }}>
                        Photo
                </Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={()=>{
                navigation.navigate("AddPostTagFriend");
            }}
            >
            <View
            style={{
                flexDirection:'row',
                width:'90%',
                alignSelf:'center',
                backgroundColor:'white',
                borderRadius:10,
                marginTop:mode? responsiveScreenHeight(2) : responsiveScreenWidth(2),
                paddingHorizontal: mode?responsiveScreenWidth(4) : responsiveScreenHeight(4),
                height: mode? responsiveScreenHeight(6) : responsiveScreenWidth(6),
            }}
            >
                <Image source={require('../assets/tagPeople.png')}
                
                style={{
                    width: mode?responsiveScreenWidth(12) : responsiveScreenHeight(12),
                    height: mode? responsiveScreenHeight(6) : responsiveScreenWidth(6),
                }}/>
                <Text style={{
                    height:'100%',
                    paddingTop:mode? responsiveScreenHeight(2) : responsiveScreenWidth(2),
                    paddingLeft:responsiveScreenWidth(3)
                    }}>Tag People</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={()=>{navigation.navigate("AddPostFeelings");}}>
            <View
            style={{
                flexDirection:'row',
                width:'90%',
                alignSelf:'center',
                backgroundColor:'white',
                borderRadius:10,
                marginTop:mode? responsiveScreenHeight(2) : responsiveScreenWidth(2),
                paddingHorizontal: mode?responsiveScreenWidth(4) : responsiveScreenHeight(4),
                height: mode? responsiveScreenHeight(6) : responsiveScreenWidth(6),
            }}
            >
                <Image source={require('../assets/feelings.png')}
                
                style={{
                    width: mode?responsiveScreenWidth(12) : responsiveScreenHeight(12),
                    height: mode? responsiveScreenHeight(6) : responsiveScreenWidth(6),
                }}/>
                <Text style={{
                    height:'100%',
                    paddingTop:mode? responsiveScreenHeight(2) : responsiveScreenWidth(2),
                    paddingLeft:responsiveScreenWidth(3)
                    }}>Feelings</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={()=>{
                navigation.navigate("AddPostAddLocation");
            }}
            >
            <View
            style={{
                flexDirection:'row',
                width:'90%',
                alignSelf:'center',
                backgroundColor:'white',
                borderRadius:10,
                marginTop:mode? responsiveScreenHeight(2) : responsiveScreenWidth(2),
                paddingHorizontal: mode?responsiveScreenWidth(4) : responsiveScreenHeight(4),
                height: mode? responsiveScreenHeight(6) : responsiveScreenWidth(6),
            }}
            >
                <Image source={require('../assets/checkIn.png')}
                
                style={{
                    width: mode?responsiveScreenWidth(12) : responsiveScreenHeight(12),
                    height: mode? responsiveScreenHeight(6) : responsiveScreenWidth(6),
                }}/>
                <Text style={{
                    height:'100%',
                    paddingTop:mode? responsiveScreenHeight(2) : responsiveScreenWidth(2),
                    paddingLeft:responsiveScreenWidth(3)
                    }}>Check In</Text>
            </View>
            </TouchableOpacity>
            <View
            style={{
                flexDirection:'row',
                width:'90%',
                alignSelf:'center',
                backgroundColor:'white',
                borderRadius:10,
                marginTop:mode? responsiveScreenHeight(2) : responsiveScreenWidth(2),
                paddingHorizontal: mode?responsiveScreenWidth(4) : responsiveScreenHeight(4),
                height: mode? responsiveScreenHeight(6) : responsiveScreenWidth(6),
            }}
            >
                <Image source={require('../assets/backgroundColor.png')}
                
                style={{
                    width: mode?responsiveScreenWidth(12) : responsiveScreenHeight(12),
                    height: mode? responsiveScreenHeight(6) : responsiveScreenWidth(6),
                }}/>
                <Text style={{
                    height:'100%',
                    paddingTop:mode? responsiveScreenHeight(2) : responsiveScreenWidth(2),
                    paddingLeft:responsiveScreenWidth(3)
                    }}>Background Color</Text>
            </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default AddPostScreen;