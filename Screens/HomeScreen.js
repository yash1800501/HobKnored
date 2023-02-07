import React, { useEffect, useState } from "react";

import MapView, { MapMarker } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

import data from '../Data/FriendsData.json';
import { Image, Text, TouchableOpacity, View } from "react-native";
import { responsiveScreenHeight, responsiveScreenWidth, useResponsiveScreenHeight } from "react-native-responsive-dimensions";

import {getDistance, getPreciseDistance} from 'geolib';

const HomeScreen = () => {
  const [position, setPosition] = useState(data.result[0].location);
  const [currentlocation, setCurrentlocation] = useState(true);

  var dis = getDistance(
    {latitude: 20.0504188, longitude: 64.4139099},
    {latitude: 51.528308, longitude: -0.3817765},
  );

  // alert(
  //   `Distance\n\n${dis} Meter\nOR\n${dis / 1000} KM`
  // );

  useEffect(() => {
    Geolocation.getCurrentPosition((pos) => {
      const crd = pos.coords;
      setPosition({
        latitude: crd.latitude,
        longitude: crd.longitude,
        latitudeDelta: 0.0421,
        longitudeDelta: 0.0421,
      });
    })
  }, []);
  return (
    <>
    <MapView
      style={{
        flex: 1
      }}
      initialRegion={position}
      showsUserLocation={currentlocation}
      showsMyLocationButton={false}
      followsUserLocation={true}
      showsCompass={true}
      scrollEnabled={true}
      zoomEnabled={true}
      pitchEnabled={true}
      rotateEnabled={true}
      loadingEnabled={true}
      onTouchStart={()=>{
        setCurrentlocation(false)
      }}
    >

      <TouchableOpacity
      onPress={()=>{
        setCurrentlocation(true)
      }}
      >
      <Image source={require('../assets/currentlocation.png')}
      style={{
        width:responsiveScreenHeight(6),
        height:responsiveScreenHeight(6.2),
        alignSelf:'flex-end',
        marginTop:60,
        marginRight:30
      }}
      />
      </TouchableOpacity>
      <MapMarker
        title='Yor are here'
        description='This is a description'
        coordinate={position}
        >
        <View>
          <Image source={require('../assets/location.png')}
            style={{
              width: responsiveScreenWidth(15.5),
              height: responsiveScreenWidth(18.5),
              position: 'absolute',
              left: -responsiveScreenWidth(8),
              bottom: 0,
            }}
          />
          <Image source={{ uri: data.result[0].image }}
            style={{
              position: 'absolute',
              width: responsiveScreenWidth(12),
              height: responsiveScreenWidth(12),
              borderRadius: 100,
              left: -responsiveScreenWidth(6.2),
              top: -responsiveScreenWidth(16.5),
              borderWidth:2,
              borderColor:'white',
            }}
          />
        </View>
      </MapMarker>
      {[...Array(data.result.length)].map((value, index) => (
        <>
          <MapMarker
            title={data.result[index].name}
            description='This is a description'
            coordinate={{
              latitude: data.result[index].location.latitude,
              longitude: data.result[index].location.longitude,
              latitudeDelta: data.result[index].location.latitudeDelta,
              longitudeDelta: data.result[index].location.longitudeDelta,
            }}
          >
            <View>
              <Image source={require('../assets/location.png')}
                style={{
                  width: responsiveScreenWidth(15),
                  height: responsiveScreenWidth(18.5),
                  position: 'absolute',
                  left: 0,
                  bottom: 0,
                }}
              />
              <Image source={{ uri: data.result[index].image }}
                style={{
                  position: 'absolute',
                  width: responsiveScreenWidth(12),
                  height: responsiveScreenWidth(12),
                  borderRadius: 100,
                  left: responsiveScreenWidth(1.5),
                  top: -responsiveScreenWidth(16.5),
                  borderWidth:2,
                  borderColor:'white',
                }}
              />
            </View>
          </MapMarker>
        </>
      ))}
    </MapView>
    </>
  );
};

export default HomeScreen;