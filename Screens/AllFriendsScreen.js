import React from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { responsiveScreenFontSize, responsiveScreenHeight, responsiveScreenWidth } from "react-native-responsive-dimensions";
import data from '../Data/FriendsData.json';

const AllFriendsScreen = () => {
  const [like, setLike] = React.useState(true);
  const [likeArray, setLikeArray] = React.useState(data.result);
  const [isPoterate, setIsPoterate] = React.useState(false);
  // setLikeArray(data.result[0].like)
  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignSelf: 'center',
      width: '100%',
      height: responsiveScreenHeight(0),
      // backgroundColor:'black',
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
        data={likeArray}
        renderItem={(element) => {
          // setLike(element.item.like)
          console.log(likeArray)
          var i = element.index
          return <View
            style={{
              flex: 1,
              justifyContent: 'space-around',
              paddingTop: isPoterate? responsiveScreenWidth(1.5) : responsiveScreenHeight(1.5),
              marginBottom: isPoterate? responsiveScreenWidth(1.5) : responsiveScreenHeight(3) / 2,
              width: responsiveScreenWidth(90),
              height:isPoterate? responsiveScreenWidth(10) : responsiveScreenHeight(10),
              borderRadius: 10,
              flexDirection: 'row',
              backgroundColor: 'white',
            }}
          >
            <Image style={
              {
                width: isPoterate? responsiveScreenHeight(14) : responsiveScreenWidth(14),
                height:isPoterate? responsiveScreenWidth(7) : responsiveScreenHeight(7),
                borderRadius: 100,
                marginBottom: isPoterate? responsiveScreenWidth(10) : responsiveScreenHeight(10),
              }
            }
              source={{
                uri: element.item.image
              }}
            />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '70%',
              }}
            >
              <Text style={{
                fontSize: responsiveScreenFontSize(2.5),
                paddingTop: isPoterate? responsiveScreenWidth(1.5) : responsiveScreenHeight(1.5),
              }}>{element.item.name}</Text>
              <TouchableOpacity
                onPress={() => {

                  console.log(element.index)
                  console.log(likeArray[element.index].like)
                  data.result[element.index].like = !element.item.like
                  setLikeArray(data.result)
                  setLike(!element.item.like)
                  console.log(element.index)
                  console.log(likeArray[element.index].like)
                }}
                onPressOut={()=>{
                  setLikeArray(data.result)
                }}
              >
                <Image
                  style={{
                    marginTop: isPoterate? responsiveScreenWidth(1.5) : responsiveScreenHeight(1.5),
                  }}
                  source={data.result[element.index].like && likeArray[element.index].like ? require('../assets/like.png') : require('../assets/notLike.png')} />
              </TouchableOpacity>
            </View>


          </View>
        }}
      />

    </View>
  );
}

export default AllFriendsScreen;