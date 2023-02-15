import React from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';
import {SafeAreaView} from 'react-native-safe-area-context';
import InputFieldIcon from '../components/InputFieldIcon';
import imagePath from '../Data/imagePath';

var listOfImages = [];

const AddPostFeelings = ({navigation}) => {
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
              navigation.navigate('AddPostTagFriend');
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
            Feelings
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
        <ScrollView>
          <View
            style={{
              flexDirection: 'row',
              justifyContent:'center',
            }}>
            <View
              style={{
                marginBottom: 125,
                marginTop: 20,
                borderRadius: 10,
                paddingTop: 20,
                padding: 2,
                backgroundColor: 'white',
                paddingLeft: 20,
                width: isPoterate? responsiveScreenWidth(40):responsiveScreenWidth(40),
              }}>
              {imagePath.map((value, index) => {
                const path = value.image;
                const img = (imagePath.length/2) > index
                if (img) {
                    return (
                        <View style=
                          {{
                              flexDirection: 'row',
                              paddingTop:10
                          }}>
                          <Image
                            source={path}
                            style={{
                              width: 30,
                              height: 30,
                            }}
                          />
                          <Text
                            style={{
                              height: 50,
                              alignItems: 'center',
                              paddingTop:10,
                              paddingLeft:10,
                            }}>
                            {imagePath[index].name}
                          </Text>
                        </View>
                      )
                }
              })}
            </View>
            <View
              style={{
                marginBottom: 125,
                marginTop: 20,
                marginLeft: 20,
                borderRadius: 10,
                paddingTop: 20,
                padding: 2,
                backgroundColor: 'white',
                paddingLeft: 20,
                width: isPoterate? responsiveScreenWidth(44):responsiveScreenWidth(44),
              }}>
              {imagePath.map((value, index) => {
                const img = (imagePath.length/2) <= index
                const path = value.image;
                if(img)
                {
                    return (
                        <View style={{
                            flexDirection: 'row',
                            paddingTop:10,
                            }}>
                          <Image
                            source={img ? path : undefined}
                            style={{
                              width: 30,
                              height: 30,
                            }}
                          />
                          <Text style={{
                              height: 50,
                              alignContent:'center',
                              paddingTop:10,
                              paddingLeft:10,
                            }}>{img ? imagePath[index].name : undefined}</Text>
                        </View>
                      )
                }
              })}
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default AddPostFeelings;
