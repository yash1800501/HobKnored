import React from "react";
import { FlatList, Image, Modal, Pressable, Text, TouchableOpacity, View } from "react-native";
import { responsiveScreenHeight, responsiveScreenWidth } from "react-native-responsive-dimensions";
import Button from "./Button";


type Props = {
    x: number;
    y: number;
};


const ComboBox = ({ x, y }: Props) => {
    const data = [1, 2, 3, 4, 5];
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState(data[0]);
    const [width, setWidth] = React.useState(x);
    const [height, setheight] = React.useState(y);
    console.log("hello1", height, width)
    return (
        <View
            style={{
                backgroundColor: '#EFF1F5',
                borderRadius: 10,
                width: '35%',
                height: '100%',
                padding: 5
            }}>
            <TouchableOpacity
                onPress={() => {
                    setOpen(true);
                    console.log("Hello", width, height)
                }}
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    width: '100%',
                    height: '100%',
                }}
            >
                <Text
                    style={{
                        paddingTop: '15%',
                        alignSelf: 'center',
                        textAlign: 'center',
                        justifyContent: 'center',
                        height: '100%',
                        width: '40%',
                    }}
                >
                    {value}
                </Text>
                <Image source={require('../assets/dropDown.png')} style={{ width: responsiveScreenWidth(3), height: responsiveScreenHeight(1), marginTop: responsiveScreenHeight(2) }} />
            </TouchableOpacity>
            <Modal

                style={{
                    // flex:1,
                    // justifyContent:'center',
                    // alignSelf:'center',
                    backgroundColor: 'white'
                }}
                animationType="none"
                transparent={true}
                visible={open}
                onRequestClose={() => {
                    alert('Modal has been closed.');
                    setOpen(!open);
                }}>
                <View
                    style={{
                        paddingLeft: '15%',
                        paddingTop: '140%',

                    }}
                >
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        data={data}
                        renderItem={(element) => {
                            var i = element.index
                            return <TouchableOpacity
                                style={{
                                    padding: 5,
                                    // borderTopWidth:1,
                                    borderBottomWidth: 0.3,
                                    backgroundColor: 'white',
                                    width: responsiveScreenWidth(20),
                                }}
                                onPress={() => {
                                    setOpen(false)
                                    setValue(element.item)
                                }}
                            >
                                <Text
                                    style={{ textAlign: 'center' }}
                                >{element.item}</Text>
                            </TouchableOpacity>
                        }}
                    />
                </View>
            </Modal>

        </View>
    );

}

export default ComboBox;