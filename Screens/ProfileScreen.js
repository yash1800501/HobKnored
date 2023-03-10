import React from "react";
import { Image, ImageBackground, ScrollView, Text, TouchableOpacity, View } from "react-native";
import MaskedView from '@react-native-masked-view/masked-view';
import { responsiveFontSize, responsiveHeight, responsiveScreenFontSize, responsiveScreenHeight, responsiveScreenWidth } from "react-native-responsive-dimensions";
import EnvironmentVariable from '../components/EnvironmentVariable'

import data from'../Data/FriendsData.json';

import InterestCategory from "../components/InterestCategory";
import InterestCategoryData from "../Data/InterestCategory.json";



const ProfileScreen = ({ navigation }) => {
    
    const [width, setWidth] = React.useState(150)
    return (
        <ScrollView
            style={{
                height: responsiveScreenHeight(100),
            }}
            scrollEventThrottle={(value) => {
                setWidth(value)
                console.log(value)
            }}
        >
            <ScrollView
                style={{
                    position: 'absolute',
                    height: responsiveScreenHeight(60),
                    width: responsiveScreenWidth(width),
                    borderBottomRightRadius: responsiveScreenWidth(1000),
                    right: responsiveScreenWidth(-30),
                    top: responsiveScreenHeight(-15),
                    backgroundColor:'black'
                }}
                scrollEnabled={false}
            >
                <Image source={require('../assets/bg.png')}
                    style={{
                        width: responsiveScreenWidth(100),
                        height: responsiveHeight(50),
                        position: 'absolute',
                        right: responsiveScreenWidth(30),
                        top: responsiveHeight(10),
                    }}
                />
            </ScrollView>
                <Text
                    style={{
                        position: 'absolute',
                        left: responsiveScreenWidth(10),
                        top: responsiveScreenWidth(10),
                        fontSize: responsiveScreenFontSize(4),
                        fontWeight: '600',
                    }}
                >
                    PROFILE
                </Text>
                <View
                style={{
                    marginTop: responsiveScreenHeight(33),
                    flexDirection:'row',
                    alignSelf:'center',
                }}
                >
                <TouchableOpacity
                onPress={()=>{
                    navigation.navigate('AddPostScreen1')
                }}
                >
                <Image source={require('../assets/add.png')}
                    style={{
                        height: responsiveScreenHeight(8),
                        width: responsiveScreenWidth(16),
                        marginHorizontal:responsiveScreenHeight(1.5),
                        marginTop:responsiveScreenHeight(6),
                    }}
                />
                </TouchableOpacity>
                <View style={{
                    height: responsiveScreenWidth(30),
                    width: responsiveScreenWidth(30),
                    borderRadius: 100,
                }}>
                    <Image source={{uri:data.result[1].image}}
                        style={
                            {
                              width: responsiveScreenWidth(30),
                              height: responsiveScreenWidth(30),
                              borderRadius: 100,
                            }
                          }
                    />
                </View>
                <Image source={require('../assets/edit.png')}
                    style={{
                        height: responsiveScreenHeight(9),
                        width: responsiveScreenHeight(9),
                        marginHorizontal:responsiveScreenHeight(1.5),
                        marginTop:-responsiveScreenHeight(2),
                    }}
                />
                </View>
                <View
                style={{
                    width:'100%',
                }}
                >
                <Text
                style={{
                    width:responsiveScreenWidth(100),
                    textAlign:'center',
                    marginTop:10,
                    fontSize:responsiveFontSize(2),
                    color:'black',
                }}
                >
                    {data.result[0].name}
                </Text>
                <Text
                style={{
                    // position:'absolute',
                    width:responsiveScreenWidth(100),
                    textAlign:'center',
                    paddingTop:10,
                    color:'black',
                    fontSize:responsiveFontSize(1.7),
                }}
                >
                    {data.result[0].name}
                </Text>
                </View>
                
            <ScrollView style={{
                    alignSelf: 'center',
                    height: '0%',
                    width: '100%',
                    alignContent: 'center',
                    paddingTop: responsiveScreenHeight(5),
                    marginBottom: responsiveScreenHeight(14),
                }}>
                    <ScrollView 
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        style={{width:'90%',alignSelf:'center'}}
                    >
                    {[...Array(data.result[0].interest.length)].map((value, index) => (
                        <InterestCategory
                            key={index}
                            value={data.result[0].interest[index]}
                            // onSelect={val => { setSelectedTableNumber(val); selectedArray.includes(val) ? setselectedArray(selectedArray.filter((value, index, array) => val !== value)) : setselectedArray(selectedArray.concat(val)); }}
                            // isSelected={selectedArray.includes(index + 1) ? true : false}
                            text={InterestCategoryData.result[data.result[0].interest[index]].text}
                            imoji={InterestCategoryData.result[data.result[0].interest[index]].imoji}
                            disable={true}
                        />
                    ))}
                    </ScrollView>
                    <Image source={require('../assets/profilePic.png')} style={{
                        alignSelf:'center', paddingTop:10,
                    }}/>
                    <Image source={require('../assets/profilePic.png')} style={{
                        alignSelf:'center', paddingTop:10,
                    }}/>
                    <Image source={require('../assets/profilePic.png')} style={{
                        alignSelf:'center', paddingTop:10,
                    }}/>
            </ScrollView>
                
        </ScrollView>
    );
}

export default ProfileScreen;