
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
import AddPostAddLocation from "./AddPostAddLocation";

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
                    key={1}
                    name="StartScreen"
                    component={StartScreen}/>
                <Screen
                    key={2}
                    name="SignInScreen"
                    component={SignInScreen}/>
                <Screen
                    key={3}
                    name="PhotoSelectedScreen"
                    component={PhotoSelectedScreen}/>
                <Screen
                    key={4}
                    name="ForgetPasswordScreen"
                    component={ForgetPasswordScreen}/>
                <Screen
                    key={5}
                    name="ForgetPasswordScreen2"
                    component={ForgetPasswordScreen2}/>
                <Screen
                    name="ForgetPasswordScreen3"
                    key={6}
                    component={ForgetPasswordScreen3}/>
                <Screen
                    name="PasswordUpdatedScreen"
                    key={7}
                    component={PasswordUpdatedScreen}/>
                <Screen
                    name="SignUpScreen"
                    key={8}
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
                        key={7}
                        name="HomeScreen"
                        component={HomeScreen}/>
                <Screen
                        name="BottomTabBar"
                        key={8}
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
                <Screen
                    name="AddPostAddLocation"
                    component={AddPostAddLocation}
                />
            </Navigator>
        </NavigationContainer>
    );
}

export default NavigationScreen;