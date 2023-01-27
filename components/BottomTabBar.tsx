import React from "react";

import { Image, StyleProp, Text, TouchableOpacity, View, ViewStyle } from "react-native";
import { responsiveHeight, responsiveScreenHeight, responsiveScreenWidth, responsiveWidth } from "react-native-responsive-dimensions";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/HomeScreen';
import ChatScreen from '../Screens/ChatScreen';
import FriendsScreen from '../Screens/FriendsScreen';
import SettingScreen from '../Screens/SettingScreen';
import ProfileScreen from '../Screens/ProfileScreen';



type Props = {
  style?: StyleProp<ViewStyle>;
  valueText: string;
  action: () => {};
};

const Tab = createBottomTabNavigator();
const BottomTabBar = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarIconStyle: {},
        tabBarStyle: {

          position: 'absolute',
          bottom: responsiveScreenHeight(2),
          borderRadius: 25,
          margin: responsiveScreenHeight(1),
          paddingTop: responsiveScreenHeight(10) / 2,
          paddingBottom: responsiveScreenHeight(10) / 2,
          height: responsiveHeight(10),
          shadowOffset: {
            height: 1,
            width: 1
          },
          elevation: 5,
          shadowRadius: 5,
          shadowOpacity: 0.5,
        },
        headerShown: false,
      }}>
      <Tab.Screen name="Home" component={HomeScreen}
        options={{
          tabBarIcon: (tab) => (tab.focused ? <Image source={require('../assets/home2.png')} style={{ height: responsiveScreenHeight(4), width: responsiveScreenWidth(25), marginLeft: responsiveScreenWidth(12) }} /> : <Image source={require('../assets/home1.png')} style={{ height: responsiveScreenHeight(2.6), width: responsiveScreenWidth(5) }} />),
        }}
      />
      <Tab.Screen name="Friends" component={FriendsScreen}
        options={{
          tabBarIcon: (tab) => (tab.focused ? <Image source={require('../assets/friend2.png')} style={{ height: responsiveScreenHeight(3.6), width: responsiveScreenWidth(25), marginLeft: responsiveScreenWidth(3) }} /> : <Image source={require('../assets/friend1.png')} style={{ height: responsiveScreenHeight(3), width: responsiveScreenWidth(6.9), marginLeft: responsiveScreenWidth(5) }} />),
        }}
      />
      <Tab.Screen name="Chat" component={ChatScreen}
        options={{
          tabBarIcon: (tab) => (tab.focused ? <Image source={require('../assets/chat2.png')} style={{ height: responsiveScreenHeight(3.6), width: responsiveScreenWidth(25), marginLeft: responsiveScreenWidth(3) }} /> : <Image source={require('../assets/chat1.png')} style={{ height: responsiveScreenHeight(3), width: responsiveScreenWidth(5.9) }} />),
        }}
      />
      <Tab.Screen name="Setting" component={SettingScreen}
        options={{
          tabBarIcon: (tab) => (tab.focused ? <Image source={require('../assets/setting2.png')} style={{ height: responsiveScreenHeight(3.6), width: responsiveScreenWidth(25), marginLeft: responsiveScreenWidth(3) }} /> : <Image source={require('../assets/setting1.png')} style={{ height: responsiveScreenHeight(2.6), width: responsiveScreenWidth(5) }} />),
        }}
      />
      <Tab.Screen name="Profile" component={ProfileScreen}
        options={{
          tabBarIcon: (tab) => (tab.focused ? <Image source={require('../assets/profile2.png')} style={{ height: responsiveScreenHeight(3.5), width: responsiveScreenWidth(21), marginRight: responsiveScreenWidth(6) }} /> : <Image source={require('../assets/profile1.png')} style={{ height: responsiveScreenHeight(2.8), width: responsiveScreenWidth(5) }} />),
        }}
      />

    </Tab.Navigator>
  );
};

export default BottomTabBar;