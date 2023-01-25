import React, { useEffect, useState } from "react";

import MapView, { Marker, MarkerAnimated } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

import data from'../Data/FriendsData.json';
import { ScrollView, Text } from "react-native";

const HomeScreen = () =>{
    const [position, setPosition] = useState(data.result[0].location);
      const [position2, setPosition2] = useState({
        latitude: 100,
        longitude: 10,
        latitudeDelta: 0.001,
        longitudeDelta: 0.001,
      });

    useEffect(() => {
        Geolocation.getCurrentPosition((pos) => {
          const crd = pos.coords;
          setPosition({
            latitude: crd.latitude,
            longitude: crd.longitude,
            latitudeDelta: 0.0421,
            longitudeDelta: 0.0421,
          });
          setPosition2({
            latitude: crd.latitude+0.1,
            longitude: crd.longitude+0.1,
            latitudeDelta: 0.0421,
            longitudeDelta: 0.0421,
          });
        })
      }, []);
    return(
        <MapView 
        style={{
            flex: 1
        }} 
            initialRegion={position}
            showsUserLocation={true}
            // showsMyLocationButton={false}
            followsUserLocation={true}
            showsCompass={true}
            scrollEnabled={true}
            zoomEnabled={true}
            pitchEnabled={true}
            rotateEnabled={true} 
            loadingEnabled={true}
            
            >
            <Marker
                anchor={{ x: 100 }}
                image={{ uri: data.result[0].image }}
                style={{
                    borderRadius: 20,
                    borderWidth:1,
                }}

                title='Yor are here'
                description='This is a description'
                coordinate={position}
            />
            {[...Array(data.result.length)].map((value,index)=>(
              <>
                <Marker
                  // anchor={{ x: 100 }}
                  image={{ uri: data.result[index].image }}
                  title={data.result[index].name}
                  description='This is a description'
                  coordinate={{
                    latitude: data.result[index].location.latitude,
                    longitude: data.result[index].location.longitude,
                    latitudeDelta: data.result[index].location.latitudeDelta,
                    longitudeDelta: data.result[index].location.longitudeDelta,
                  }}
                />
              </>
              ))}
            </MapView>
    );
};

export default HomeScreen;