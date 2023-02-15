import React from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';
import CheckBox from '../components/CheckBox';
import InputTextGradient from '../components/InputTextGradient';
import data from '../Data/FriendsData.json';
import InputFieldIcon from '../components/InputFieldIcon';

const AddPostTagFriend = ({navigation}) => {
  const [isPoterate, setIsPoterate] = React.useState(false);
  return (
    <>
      <SafeAreaView
        onLayout={native => {
          if (responsiveScreenWidth(100) > responsiveScreenHeight(100)) {
            setIsPoterate(true);
            console.log(isPoterate);
          } else {
            setIsPoterate(false);
            console.log(isPoterate);
          }
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: isPoterate
              ? responsiveScreenHeight(6)
              : responsiveScreenWidth(6),
            marginTop: isPoterate ? responsiveScreenWidth(6) : undefined,
          }}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('AddPostPhoto');
            }}>
            <Image
              source={require('../assets/back2.png')}
              style={{
                width: isPoterate
                  ? responsiveScreenHeight(3)
                  : responsiveScreenWidth(3),
                height: isPoterate
                  ? responsiveScreenHeight(5)
                  : responsiveScreenWidth(5),
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('AddPostScreen1');
            }}>
            <Image
              source={require('../assets/cross2.png')}
              style={{
                width: isPoterate
                  ? responsiveScreenHeight(6)
                  : responsiveScreenWidth(6),
                height: isPoterate
                  ? responsiveScreenHeight(6)
                  : responsiveScreenWidth(6),
              }}
            />
          </TouchableOpacity>
        </View>

        <View>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 24,
              fontWeight: '600',
            }}>
            Tag Friend
          </Text>
        </View>
        <InputFieldIcon
          style={{
            height: 50,
            width: '90%',
            alignSelf: 'center',
            marginTop: 10,
          }}
          placeholderText={'Search'}
        />
        <FlatList
          data={data.result}
          renderItem={element => {
            return (
              <>
                <View
                  style={{
                    flexDirection: 'row',
                    backgroundColor: 'rgba(255, 255, 255, 0.5)',
                    borderRadius: 10,
                    margin: 10,
                    height: 70,
                    // justifyContent:'space-around',
                  }}>
                  <Image
                    style={{
                      width: !isPoterate? responsiveScreenWidth(17) : responsiveScreenHeight(17),
                      height: !isPoterate? responsiveScreenWidth(17) : responsiveScreenHeight(17),
                      borderRadius: 100,
                      borderWidth: 4,
                      borderColor: '#CBD0D9',
                    }}
                    source={{uri: element.item.image}}
                  />
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      width: isPoterate? '85%': '70%',
                    }}>
                    <Text
                      style={{
                        marginTop: 25,
                        marginLeft: 20,
                      }}>
                      {element.item.name}
                    </Text>
                    <CheckBox
                      style={{
                        height: 20,
                        width: 20,
                        borderRadius: 5,
                        borderWidth: 0.5,
                        marginHorizontal: 10,
                        borderColor: '#868686',
                        marginTop: 25,
                      }}
                    />
                  </View>
                </View>
              </>
            );
          }}
        />
      </SafeAreaView>
    </>
  );
};

export default AddPostTagFriend;
