import React from "react";
import { View, Text,Button } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import Screen1 from './Home.js';
import Screen2 from './Register.js';
import Screen3 from './WriteDiary.js';
import Screen4 from './Upload.js';
import Screen5 from './LihatDiary.js';
import MainScreen from './Login.js';
const AppNavigator = createStackNavigator(
 {
 Main: MainScreen,
 Layar1: Screen1,
 Layar2: Screen2,
 Layar3: Screen3,
 Layar4: Screen4,
 Layar5: Screen5,
 },
 {
 initialRouteName: "Main"
 }
);
//All source code copyrighted by Dedy Darmawan
export default createAppContainer(AppNavigator);
