import React from "react";
import { FlatList, Image, Text, View } from "react-native";
import data from '../Data/FriendsData.json';


const FlatListDemo = () => {
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={data.result}
      renderItem={(element) => {
        //  console.log(element)
        return <View>
          <Text>Name : {element.item.name}</Text>
          <Text>Year: {element.item.like}</Text>
          <Image style={
            {
              width: 50,
              height: 100,
              position: 'absolute',
              alignSelf: 'flex-end',
              borderRadius: 10,
            }
          }
            source={{
              uri: element.item.image
            }}
          />
        </View>
      }}
    />
  );
}

const AllFriendScreenFlatList = () => {
  <FlatListDemo />
}

export default AllFriendScreenFlatList;

