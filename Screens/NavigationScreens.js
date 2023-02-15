
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import SignInScreen from './SignInScreen';
import StartScreen from './StartScreen';
import PhotoSelectedScreen from './PhotoSelectedScreen';
import ForgetPasswordScreen from './ForgetPasswordScreen';
import ForgetPasswordScreen2 from './ForgetPasswordScreen2';
import ForgetPasswordScreen3 from './ForgetPasswordScreen3';
import PasswordUpdatedScreen from "./PasswordUpdatedScreen";
import SignUpScreen from "./SignUpScreen";
import SignUpScreen2 from "./SignUpScreen2";
import SignUpScreen3 from "./SignUpScreen3";
import HomeScreen from './HomeScreen';
import BottomTabBar from "../components/BottomTabBar";
import AddPostScreen1 from './AddPostScreen1';
import AddPostPhoto from "./AddPostPhoto";
import AddPostTagFriend from "./AddPostTagFriend";
import AddPostFeelings from "./AddPostFeelings";

const {Navigator, Screen} = createNativeStackNavigator();
const NavigationScreen = () => {
    return(
        <NavigationContainer
            independent={true}
        >
            <Navigator 
                initialRouteName="StartScreen"
                screenOptions={{
                    headerShown: false,
                    animation:'none'
                }}
            >
                <Screen
                    name="StartScreen"
                    component={StartScreen}/>
                <Screen
                    name="SignInScreen"
                    component={SignInScreen}/>
                <Screen
                    name="PhotoSelectedScreen"
                    component={PhotoSelectedScreen}/>
                <Screen
                    name="ForgetPasswordScreen"
                    component={ForgetPasswordScreen}/>
                <Screen
                    name="ForgetPasswordScreen2"
                    component={ForgetPasswordScreen2}/>
                <Screen
                    name="ForgetPasswordScreen3"
                    component={ForgetPasswordScreen3}/>
                <Screen
                    name="PasswordUpdatedScreen"
                    component={PasswordUpdatedScreen}/>
                <Screen
                    name="SignUpScreen"
                    component={SignUpScreen}
                    // initialParams={{open:true}}
                    />
                <Screen
                        name="SignUpScreen2"
                        component={SignUpScreen2}/>
                <Screen
                        name="SignUpScreen3"
                        component={SignUpScreen3}/>
                <Screen
                        name="HomeScreen"
                        component={HomeScreen}/>
                <Screen
                        name="BottomTabBar"
                        component={BottomTabBar}/>
                <Screen
                        name="AddPostScreen1"
                        component={AddPostScreen1}/>
                <Screen
                    name="AddPostPhoto"
                    component={AddPostPhoto}/>
                <Screen
                    name="AddPostTagFriend"
                    component={AddPostTagFriend}
                />
                <Screen
                    name="AddPostFeelings"
                    component={AddPostFeelings}
                />
            </Navigator>
        </NavigationContainer>
    );
}

export default NavigationScreen;