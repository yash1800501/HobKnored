import React, {useState} from 'react';
import {Text, TouchableOpacity, View, Switch, ScrollView} from 'react-native';
import {
  responsiveScreenFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';
import ProgressBar from '../components/ProgressBar';
import DropDown from '../components/DropDown';

const SettingScreen = ({navigation}) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const [isEnabled1, setIsEnabled1] = useState(false);
  const toggleSwitch1 = () => setIsEnabled1(previousState => !previousState);
  const [isPoterate, setIsPoterate] = React.useState(false);
  let x = 0;
  let y = 0;
  return (
    <ScrollView
      style={{
        paddingTop: isPoterate? responsiveScreenWidth(10) : responsiveScreenHeight(10),
        paddingBottom: isPoterate? responsiveScreenWidth(20) : responsiveScreenHeight(60),
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
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignSelf: 'center',
          width: '100%',
          marginBottom: isPoterate? responsiveScreenWidth(25) : responsiveScreenHeight(25),
        }}>
        <Text
          style={{
            fontSize: 24,
            paddingLeft: 20,
            paddingBottom: 30,
          }}>
          Setting
        </Text>
        <View
          style={{
            backgroundColor: 'white',
            width: responsiveScreenWidth(87),
            alignSelf: 'center',
            height: isPoterate? responsiveScreenWidth(14) : responsiveScreenHeight(14),
            borderRadius: 20,
            marginTop: 20,
          }}>
          <View
            style={{
              padding: 35,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text style={{fontSize: responsiveScreenFontSize(2)}}>
              DARK MODE
            </Text>
            <Switch
              trackColor={{false: '#767577', true: '#3AA8DF'}}
              thumbColor={isEnabled ? '#E1E8F1' : '#E1E8F1'}
              ios_backgroundColor="#E1E8F1"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
        </View>
        <View
          style={{
            backgroundColor: 'white',
            width: responsiveScreenWidth(87),
            alignSelf: 'center',
            height: isPoterate? responsiveScreenWidth(14) : responsiveScreenHeight(14),
            borderRadius: 20,
            marginTop: 20,
          }}>
          <View
            style={{
              padding: 35,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text style={{fontSize: responsiveScreenFontSize(2)}}>
              Show My Location
            </Text>
            <Switch
              trackColor={{false: '#E1E8F1', true: '#3AA8DF'}}
              thumbColor={isEnabled1 ? '#E1E8F1' : '#E1E8F1'}
              ios_backgroundColor="#E1E8F1"
              onValueChange={toggleSwitch1}
              value={isEnabled1}
            />
          </View>
        </View>
        <Text
          style={{
            paddingLeft: isPoterate? responsiveScreenHeight(10) : responsiveScreenWidth(10),
            padding: isPoterate? responsiveScreenHeight(5) : responsiveScreenWidth(5),
            fontSize: 15,
          }}>
          Number of interests in common{' '}
        </Text>
        <View
          style={{
            flex: 1,
            backgroundColor: 'white',
            width: responsiveScreenWidth(87),
            alignSelf: 'center',
            height: isPoterate? responsiveScreenWidth(10) : responsiveScreenHeight(10),
            borderRadius: 20,
          }}
          onTouchStart={native => {
            x = Number(native.nativeEvent.locationX);
            y = Number(native.nativeEvent.locationY);
            console.log(x, y);
          }}>
          <View
            style={{
              padding: '5%',
              paddingTop: isPoterate? '1.5%':'5%',
              width: '100%',
              height:'100%'
            }}>
            {/* <ComboBox x={x} y={y} /> */}
            <DropDown/>
          </View>
        </View>
        <Text
          style={{
            paddingLeft: isPoterate? responsiveScreenHeight(10) : responsiveScreenWidth(10),
            padding: isPoterate? responsiveScreenWidth(5) : responsiveScreenWidth(5),
            fontSize: 15,
          }}>
          Distance
        </Text>
        <View
          style={{
            backgroundColor: 'white',
            width: responsiveScreenWidth(87),
            alignSelf: 'center',
            height: isPoterate? responsiveScreenWidth(17) : responsiveScreenHeight(17),
            borderRadius: 20,
          }}>
          <ProgressBar />
          <View
            style={{
              padding: '5%',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{color: '#777777', fontSize: responsiveScreenFontSize(2)}}>
              1 Mile
            </Text>
            <Text
              style={{color: '#777777', fontSize: responsiveScreenFontSize(2)}}>
              50 Mile
            </Text>
          </View>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: 'white',
            width: responsiveScreenWidth(87),
            alignSelf: 'center',
            height: isPoterate? responsiveScreenWidth(10) : responsiveScreenHeight(10),
            borderRadius: 20,
            marginTop: 10,
            justifyContent: 'center',
          }}
          onPress={() => {
            navigation.navigate('SignInScreen');
          }}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 15,
              color: '#F40000',
            }}>
            Sign Out
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default SettingScreen;
