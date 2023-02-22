import React from "react";
import {
  StyleSheet,
  TextInput,
  View,
  StyleProp,
  ViewStyle,
  Image,
  TouchableOpacity,
  ScrollView,
  Modal,
  Text,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { responsiveScreenHeight, responsiveScreenWidth } from "react-native-responsive-dimensions";
import Button from './Button';
import EmojiSelector, { Categories } from 'react-native-emoji-selector';
import data from '../Data/InterestCategory.json';
type Props = {
  style?: StyleProp<ViewStyle>;
  issecureTextEntry: boolean;
  placeholderText: string;
  inputStyle: StyleProp<ViewStyle>;
  reference: () => {};
  keyType: string;
  keyPressAction: () => {};
};

const ImojisInputText = ({ style, issecureTextEntry, placeholderText, inputStyle, reference, keyPressAction, keyType }: Props) => {
    const interest = data.result;
    const [show, setShow] = React.useState(false);
    const [emoji, setImoji] = React.useState('');
    const onClick = (emoji) => {
        console.log(emoji);
    };
  return (
<>
<View
style={{
    flexDirection:'row',
}}
>
    <LinearGradient colors={['#DBE0E7', '#F8FBFF']} style={[styles.LinearGradientStyle, style]} >

      <View style={styles.ChildViewStyle}>
        <TouchableOpacity
        style={{
            position:'absolute',
            height:'50%',
            width:20,
    }}
    onPress={() => setShow(!show)}
        >
        {
            emoji===''?
            <Image source={require('../assets/faceEmoji.png')}
            style={{
                height:'100%',
                width:20,
                marginTop:10,
                marginLeft:15,
            }}
            />:<Text
            style={styles.text}
            >{emoji}</Text>
        }
        </TouchableOpacity>
        <TextInput
          placeholder={placeholderText}
          placeholderTextColor={'#5F5F5F'}
          style={[styles.TextInputStyleClass, inputStyle]}
          secureTextEntry={issecureTextEntry}
          ref={reference}
          onKeyPress={keyPressAction}
          returnKeyType="next"
        />
      </View>
    </LinearGradient>
    <Modal
    transparent={true}
    visible={show}
    animationType="slide"

    >
        <View
        style={{
            height:'70%',
            width:'95%',
            marginTop: 100,
            margin: 10,
            backgroundColor: 'white',
            borderRadius: 20,
            paddingTop: 35,
            alignItems: 'center',
            shadowColor: '#000',
            shadowOffset: {
            width: 1,
            height: 3,
            },
            shadowOpacity: 0.25,
            shadowRadius: 4,
            elevation: 5,
        }}
        >
            {
    show?
    <View>
    <ScrollView>
        <EmojiSelector
  category={Categories.symbols}
  onEmojiSelected={emoji => {setImoji(emoji); setShow(!show)}}
  columns={12}/>
    </ScrollView></View>:undefined
}
        </View>
    </Modal>
    <Button
    valueText="Add"
    style={{
        width:responsiveScreenWidth(20),
        borderRadius:10,
        height:responsiveScreenHeight(5)
    }}
    action={()=>{
        console.log(emoji)
        var d = {"imoji":emoji,"text":"ahsgdf"}
        data.result.push(d);

    }}
    />
    </View>
    </>
  );
}

export default ImojisInputText;

const styles = StyleSheet.create({

  LinearGradientStyle: {
    borderRadius: 10,
    height:responsiveScreenHeight(5),
  },

  ChildViewStyle: {
    width: '50%',
    height:'100%',
  },

  TextInputStyleClass: {
    marginHorizontal: responsiveScreenWidth(14),
    width: '100%',
    height:'100%',
    justifyContent:'center',
    fontSize:15,
    position:'absolute',
    // color:'#C4C4C4',
  },
  text: {
    marginHorizontal: responsiveScreenWidth(1),
    width: 35,
    height:35,
    justifyContent:'center',
    fontSize:25,
    position:'absolute',
    // color:'#C4C4C4',
  }

});