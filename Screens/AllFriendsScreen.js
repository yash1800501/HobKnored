import React from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { responsiveScreenFontSize, responsiveScreenHeight, responsiveScreenWidth } from "react-native-responsive-dimensions";
import data from '../Data/FriendsData.json';

const AllFriendsScreen = () => {
  const [like, setLike] = React.useState(true);
  const [likeArray, setLikeArray] = React.useState(data.result)
  // setLikeArray(data.result[0].like)
  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignSelf: 'center',
      width: '100%',
      height: responsiveScreenHeight(1),
    }}>
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
              paddingTop: responsiveScreenHeight(1.5),
              marginBottom: responsiveScreenHeight(3) / 2,
              width: responsiveScreenWidth(90),
              height: responsiveScreenHeight(10),
              borderRadius: 10,
              flexDirection: 'row',
              backgroundColor: 'white',
            }}
          >
            <Image style={
              {
                width: responsiveScreenWidth(14),
                height: responsiveScreenHeight(7),
                borderRadius: 100,
                marginBottom: responsiveScreenHeight(10),
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
                paddingTop: responsiveScreenHeight(1.5),
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
                    marginTop: responsiveScreenHeight(1.5),
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