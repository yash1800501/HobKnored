import React from "react";
import { ImageBackground, Text, View } from "react-native";
import Slider from '@react-native-community/slider';
import { responsiveScreenHeight, responsiveScreenWidth } from "react-native-responsive-dimensions";


const ProgressBarComponent = () => {
    const [WIDTH, setWIDTH] = React.useState<number>(0)
    return (
        <View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignSelf: 'center',
                height: '100%',
                width: responsiveScreenWidth(60),

            }}
        >
            <ImageBackground source={require('../assets/prop.png')}
                style={{
                    width: responsiveScreenWidth(15),
                    height: responsiveScreenHeight(5),
                    marginLeft: responsiveScreenWidth(WIDTH * 50),
                }}>
                <Text style={{
                    textAlign: 'center',
                    paddingTop: 5,
                    color: 'white',
                    alignContent: 'center',
                    justifyContent: 'center',
                }}
                >{parseInt(((WIDTH * 100) / 2).toString())} Mile</Text>
            </ImageBackground>
            <Slider
                style={{ width: responsiveScreenWidth(60), height: 40 }}
                minimumValue={0}
                maximumValue={1}
                minimumTrackTintColor="#3AA8DF"
                maximumTrackTintColor="#DEE2E7"
                onValueChange={value => setWIDTH(value)}
            />
        </View>
    );
}

export default ProgressBarComponent;