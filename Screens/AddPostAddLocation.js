import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { responsiveScreenHeight, responsiveScreenWidth } from "react-native-responsive-dimensions";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../components/Button";
import InputFieldIcon from '../components/InputFieldIcon';

import RecentPlace from "../components/RecentPlace";

const AddPostAddLocation = ({navigation}) => {
    const [isPoterate, setIsPoterate] = React.useState(false);
    return(
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
              navigation.navigate('AddPostFeelings');
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
        <View
            style={{
                flexDirection:'row',
                alignSelf:'center',
            }}
        >
          <Text
            style={{
              fontSize: 24,
              fontWeight: '600',
              paddingBottom: isPoterate
              ? responsiveScreenHeight(6)
              : responsiveScreenWidth(6),
            }}>
            Add Location
          </Text>
          <Image
            source={require('../assets/locationIcon.png')}
            style={{
                width: isPoterate
                  ? responsiveScreenHeight(6)
                  : responsiveScreenWidth(6),
                height: isPoterate
                  ? responsiveScreenHeight(6)
                  : responsiveScreenWidth(6),
                marginLeft: isPoterate
                ? responsiveScreenHeight(6)
                : responsiveScreenWidth(6),
            }}
          />
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
        <ScrollView
            style={{
                height:responsiveScreenHeight(100),
            }}
        >
            <Image
                source={require('../assets/locationImage.png')}
                style={{
                    width: isPoterate
                        ? responsiveScreenHeight(70)
                        : responsiveScreenWidth(70),
                    height: isPoterate
                        ? responsiveScreenHeight(70)
                        : responsiveScreenWidth(70),
                    marginLeft: isPoterate? responsiveScreenWidth(25) : responsiveScreenWidth(15),
                    marginTop: isPoterate? responsiveScreenHeight(25) : responsiveScreenHeight(-5),
                }}
            />
            <Text style={{
                fontSize: 28,
                fontWeight: '600',
                textAlign:'center',
            }}>Find place near you</Text>
            <Text style={{
                color:'rgba(95, 95, 95, 1)',
                alignSelf:'center',
                width:responsiveScreenWidth(70),
                textAlign:'center',
            }}>To see places near you, or to check in to a specific location services</Text>
            <Button
            valueText="Turn on"
            style={{
                width:responsiveScreenWidth(25),
                height:responsiveScreenHeight(4),
                borderRadius:5,
                padding:5
            }}
            />
            <Text
            style={{
                fontSize:20,
                padding:10,
                paddingBottom:20,
            }}
            >Recent Places</Text>
            <RecentPlace/>
            <RecentPlace/>
            <RecentPlace/>
        </ScrollView>
        </SafeAreaView>
        </>
    );
}
export default AddPostAddLocation;