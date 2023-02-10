
import React from "react";
import { FlatList, Image, Text, View } from "react-native";
import { responsiveScreenFontSize, responsiveScreenHeight, responsiveScreenWidth } from "react-native-responsive-dimensions";
import data from '../Data/FriendsData.json';

const PendingFriendScreen = () => {
    const [isPoterate, setIsPoterate] = React.useState(false);
    return(
        <View style={{
            flex:1,
            justifyContent:'center',
            alignSelf:'center',
            width:'100%',
            height:responsiveScreenHeight(1)
        }}
        onLayout={(native) => {
            if (native.nativeEvent.layout.width > native.nativeEvent.layout.height) {
                setIsPoterate(true)
                console.log(isPoterate)
            }
            else {
                setIsPoterate(false)
                console.log(isPoterate)
            }
        }} 
        >
            <FlatList
          showsVerticalScrollIndicator={false}
          data = {data.result}
          renderItem={(element) => {
             //  console.log(element)
              return <View
                    style={{
                        flex:1,
                        justifyContent:'space-around',
                        paddingTop:isPoterate? responsiveScreenWidth(1.5) : responsiveScreenHeight(1.5),
                        marginBottom:isPoterate? responsiveScreenWidth(1.5) : responsiveScreenHeight(3)/2,
                        width:responsiveScreenWidth(90),
                        height:isPoterate? responsiveScreenWidth(10) : responsiveScreenHeight(10),
                        borderRadius:10,
                        flexDirection:'row',
                        backgroundColor:'white',
                    }} 
                               
              >
                          <Image style={
                              { 
                                width: isPoterate? responsiveScreenHeight(14) : responsiveScreenWidth(14),
                                height: isPoterate? responsiveScreenWidth(7) : responsiveScreenHeight(7),
                                borderRadius:100,
                                marginBottom:isPoterate? responsiveScreenWidth(10) : responsiveScreenHeight(10),
                              }
                          }
                          source={{
                              uri:element.item.image
                          }}
                          />
                          <Text style={{
                            fontSize:responsiveScreenFontSize(2.5),
                            paddingTop:isPoterate? responsiveScreenWidth(1.5) : responsiveScreenHeight(1.5),
                          }}>{element.item.name}</Text>
                            <View style={{flexDirection:'row',marginTop:isPoterate? responsiveScreenWidth(1.5) : responsiveScreenHeight(1.5),}}>
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