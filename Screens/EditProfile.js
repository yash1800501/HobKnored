import React from 'react';
import {
  Image,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {responsiveScreenWidth} from 'react-native-responsive-dimensions';
import {SafeAreaView} from 'react-native-safe-area-context';
import data from '../Data/FriendsData.json';
import InputTextGrediant from '../components/InputTextGradient';
import InterestCategory from '../components/InterestCategory';
import InterestCategoryData from '../Data/InterestCategory.json';
import ImojisInputText from '../components/ImojisInputText';

const EditProfile = ({navigation}) => {
  var [selectedArray, setselectedArray] = React.useState(
    global.interestCategory,
  );
  const [selectedTableNumber, setSelectedTableNumber] = React.useState(-1);
  return (
    <KeyboardAvoidingView
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    style={{flex: 1,}}
        >
    <SafeAreaView>
      <ScrollView>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}>
            <Image source={require('../assets/backButton.png')} />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 20,
              fontWeight: '600',
            }}>
            Edit Profile
          </Text>
        </View>
        <View
          style={{
            alignSelf: 'center',
          }}>
          <Image
            source={{uri: data.result[1].image}}
            style={{
              width: responsiveScreenWidth(25),
              height: responsiveScreenWidth(25),
              borderRadius: 100,
              marginTop: responsiveScreenWidth(1),
              borderWidth: 7,
              borderColor: '#CBD0D9',
              alignSelf: 'center',
            }}
          />
          <TouchableOpacity onPress={() => {}}>
            <Image
              source={require('../assets/camera.png')}
              style={{
                height: 35,
                width: 35,
                left: '18%',
                top: '-20%',
              }}
            />
          </TouchableOpacity>
        </View>
        <InputTextGrediant
          style={{
            height: 50,
            width: '90%',
            alignSelf: 'center',
          }}
          placeholderText={'Name'}
          returnKeyType={'next'}
        />
        <InputTextGrediant
          style={{
            height: 50,
            width: '90%',
            alignSelf: 'center',
          }}
          placeholderText={'Date of birth'}
          keyboardType={'default'}
        />
        <InputTextGrediant
          style={{
            height: 50,
            width: '90%',
            alignSelf: 'center',
          }}
          placeholderText={'Gender'}
        />
        <InputTextGrediant
          style={{
            height: 50,
            width: '90%',
            alignSelf: 'center',
          }}
          placeholderText={'Phone Number'}
          keyboardType={'phone-pad'}
          keyType={"z"}
        />
        <InputTextGrediant
          style={{
            height: 50,
            width: '90%',
            alignSelf: 'center',
          }}
          placeholderText={'Email'}
          keyboardType={'email-address'}
          isMultyLine={false}
        />
        <Text style={styles.texts}>Photos</Text>
        <Text style={styles.texts}>Interests</Text>
        <View
          style={{
            flexDirection: 'row',
            width: '90%',
            flexWrap: 'wrap',
            marginTop: '2%',
            marginLeft: 10,
          }}>
          {[...Array(InterestCategoryData.result.length)].map((_, index) => (
            <InterestCategory
              key={index}
              value={index + 1}
              onSelect={val => {
                setSelectedTableNumber(val);
                selectedArray.includes(val)
                  ? setselectedArray(
                      selectedArray.filter(
                        (value, index, array) => val !== value,
                      ),
                    )
                  : setselectedArray(selectedArray.concat(val));
              }}
              isSelected={selectedArray.includes(index + 1) ? true : false}
              text={InterestCategoryData.result[index].text}
              imoji={InterestCategoryData.result[index].imoji}
            />
          ))}
        </View>
        
        <ImojisInputText
          style={{
            margin:20,
            width: '65%',
            alignSelf: 'center',
            marginTop: 10,
          }}
          placeholderText={'Write Your Interest'}
        />
      </ScrollView>
    </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  texts: {
    marginLeft: 20,
    fontSize: 16,
  },
});
