import React from "react";
import { ImageBackground, Text, View } from "react-native";
import Slider from '@react-native-community/slider';
import { responsiveScreenHeight, responsiveScreenWidth } from "react-native-responsive-dimensions";


const ProgressBarComponent = () => {
    const [WIDTH, setWIDTH] = React.useState<number>(0)
    const [isPoterate, setIsPoterate] = React.useState(false);
    return (
        <View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignSelf: 'center',
                height: '100%',
                width: responsiveScreenWidth(60),

            }}
            onLayout={(native) => {
                if (responsiveScreenWidth(100) > responsiveScreenHeight(100)) {
                    setIsPoterate(true)
                    console.log(isPoterate)
                }
                else {
                    setIsPoterate(false)
                    console.log(isPoterate)
                }
            }} 
        >
            <ImageBackground source={require('../assets/prop.png')}
                style={{
                    width: isPoterate? responsiveScreenHeight(15) : responsiveScreenWidth(15),
                    height: isPoterate? responsiveScreenWidth(5) : responsiveScreenHeight(5),
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