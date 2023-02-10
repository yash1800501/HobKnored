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
    const [isPoterate, setIsPoterate] = React.useState(false);
    console.log("hello1", height, width)
    return (
        <View
            style={{
                backgroundColor: '#EFF1F5',
                borderRadius: 10,
                width: isPoterate? responsiveScreenHeight(30) : responsiveScreenWidth(30),
                height: isPoterate? responsiveScreenWidth(6) : responsiveScreenHeight(6),
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
                        textAlign: 'center',
                        height: '100%',
                        width: '60%',
                        marginTop: isPoterate? responsiveScreenWidth(1.8) : responsiveScreenHeight(1.8),
                    }}
                >
                    {value}
                </Text>
                <Image source={require('../assets/dropDown.png')} style={{ width: isPoterate? responsiveScreenHeight(3) : responsiveScreenWidth(3), height: isPoterate? responsiveScreenWidth(1) : responsiveScreenHeight(1), marginTop: isPoterate? responsiveScreenWidth(2.5) : responsiveScreenHeight(2.5) }} />
            </TouchableOpacity>
            <Modal
                supportedOrientations={["portrait","landscape"]}

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
                        paddingLeft: isPoterate? responsiveScreenHeight(15) : responsiveScreenWidth(15),
                        paddingTop:isPoterate? responsiveScreenHeight(50) : responsiveScreenHeight(50),

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