import React, { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import InterestCategory from "../components/InterestCategory";
import InterestCategoryData from "../Data/InterestCategory.json";
import EnvironmentVariable from '../components/EnvironmentVariable'

const ChatScreen = () => {
    const [selectedTableNumber, setSelectedTableNumber] = useState(-1);
    const [select,setSelect] = useState(false)
    var [selectedArray, setselectedArray] = React.useState(global.interestCategory);
    return(
        <ScrollView>

        <View style={{
            flexDirection:'row',
            justifyContent:'center',
            alignSelf:'center',
            width:'90%',
            flexWrap:'wrap',
            marginTop:'20%',
            borderWidth:1
        }}>
            {[...Array(InterestCategoryData.result.length)].map((_, index) => (
            <InterestCategory
              key={index}
              value={index + 1}
              onSelect={val => {setSelectedTableNumber(val);selectedArray.includes(val)?setselectedArray(selectedArray.filter((value,index,array)=>val !== value)):setselectedArray(selectedArray.concat(val));}}
              isSelected={selectedArray.includes(index+1)?true:false}
              text={InterestCategoryData.result[index].text}
              imoji={InterestCategoryData.result[index].imoji}
            />
          ))}
        </View>
        </ScrollView>
    );
}

export default ChatScreen;