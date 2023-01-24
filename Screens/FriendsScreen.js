import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import { responsiveScreenFontSize, responsiveScreenHeight,responsiveScreenWidth } from "react-native-responsive-dimensions";
import SwitchSelector from "react-native-switch-selector";
import AllFriendsScreen from "./AllFriendsScreen";
import PendingFriendScreen from "./PendingFriendScreen";

const FriendsScreen = () => {
    const [value, setValue] = React.useState(true);
    return(
        <View>
            
            <SafeAreaView style={{
                justifyContent:'flex-start',
                alignSelf:'center',
                height:'100%',
                width:'90%'
            }}>
                <Text style={{
                    width:responsiveScreenWidth(100),
                    paddingTop:responsiveScreenHeight(2),
                    paddingBottom:responsiveScreenHeight(5),
                    fontSize:responsiveScreenFontSize(4),
                }}>Friends</Text>
                <View>
                <SwitchSelector
                    initial={0}
                    height={responsiveScreenHeight(10)/2}
                    backgroundColor={'#DCDCDC'}
                    onPress={value=>setValue(value)}
                    textColor={'#3AA8DF'} //'#7a44cf'
                    selectedColor={'white'}
                    buttonColor={'#3AA8DF'}
                    borderColor={'#3AA8DF'}
                    borderRadius={8}
                    hasPadding
                    options={[
                        { label: "ALL", value: true}, //images.feminino = require('./path_to/assets/img/feminino.png')
                        { label: "PENDING", value: false} //images.masculino = require('./path_to/assets/img/masculino.png')
                    ]}
                    testID="gender-switch-selector"
                    accessibilityLabel="gender-switch-selector"
                />
                </View>
                <View
                style={{
                    // position:'absolute',
                    // flex:1,
                    justifyContent:'center',
                    alignSelf:'center',
                    paddingTop:responsiveScreenHeight(4),
                    height:responsiveScreenHeight(65)
                }}
                >
                {value? <AllFriendsScreen/> : <PendingFriendScreen/>}
                </View>
                
            </SafeAreaView>
        </View>
    );
}

export default FriendsScreen;