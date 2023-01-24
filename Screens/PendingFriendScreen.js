
import React from "react";
import { FlatList, Image, Text, View } from "react-native";
import { responsiveScreenFontSize, responsiveScreenHeight, responsiveScreenWidth } from "react-native-responsive-dimensions";
import data from '../Data/FriendsData.json';

const PendingFriendScreen = () => {
    return(
        <View style={{
            flex:1,
            justifyContent:'center',
            alignSelf:'center',
            width:'100%',
            height:responsiveScreenHeight(1)
        }}>
            <FlatList
          showsVerticalScrollIndicator={false}
          data = {data.result}
          renderItem={(element) => {
             //  console.log(element)
              return <View
                    style={{
                        flex:1,
                        justifyContent:'space-around',
                        paddingTop:responsiveScreenHeight(1.5),
                        marginBottom:responsiveScreenHeight(3)/2,
                        width:responsiveScreenWidth(90),
                        height:responsiveScreenHeight(10),
                        borderRadius:10,
                        flexDirection:'row',
                        backgroundColor:'white',
                    }}              
              >
                          <Image style={
                              { 
                                width: responsiveScreenWidth(14),
                                height: responsiveScreenHeight(7),
                                borderRadius:100,
                                marginBottom:responsiveScreenHeight(10),
                              }
                          }
                          source={{
                              uri:element.item.image
                          }}
                          />
                          <Text style={{
                            fontSize:responsiveScreenFontSize(2.5),
                            paddingTop:responsiveScreenHeight(1.5),
                          }}>{element.item.name}</Text>
                            <View style={{flexDirection:'row',marginTop:responsiveScreenHeight(1.5),}}>
                                <Image source={require('../assets/accept.png')}/>
                                <Image source={require('../assets/reject.png')}/>
                            </View>
                          
                   </View>
              }}
      />

        </View>
    );
}

export default PendingFriendScreen;