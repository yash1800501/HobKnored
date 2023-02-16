import React from "react";
import { Image, Text, View } from "react-native";
import { responsiveScreenWidth } from "react-native-responsive-dimensions";

const RecentPlace = () => {
    return(
        <View
            style={{
                flexDirection:'row',
                width:'85%',
                alignSelf:'center',
                backgroundColor:'white',
                height:100,
                borderRadius:10,
                padding:20,
                marginTop:10,
            }}
            >
                <View
                style={{paddingRight:10}}
                >
                    <Image 
                    source={require('../assets/recentLocation.png')}
                    style={{
                        width:responsiveScreenWidth(13),
                        height:responsiveScreenWidth(13),
                        paddingRight:10,
                    }}
                    />
                </View>
                <View>
                    <Text
                    style={{
                        marginTop:10,
                        fontSize:15,
                    }}
                    >America, New York</Text>
                    <Text
                    style={{
                        color:'rgba(153, 153, 153, 1)'
                    }}
                    >America, New York</Text>
                </View>
            </View>
    );
}

export default RecentPlace;