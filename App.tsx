import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ListView from "./ListView";
import DetailView from "./Detail";

type RootStackParamList = {
    List: undefined
    Detail: { itemId: number };
};

const RootStack = createStackNavigator<RootStackParamList>();

export default function App() {
    return (
        <NavigationContainer>
            <RootStack.Navigator initialRouteName="List">
                <RootStack.Screen
                    name="List"
                    component={ListView}
                    options={{ title: "Home" }}
                />
                <RootStack.Screen
                    name="Detail"
                    component={DetailView}
                    options={{ title: "Detail" }}
                    
                />
            </RootStack.Navigator>
        </NavigationContainer>
    );
}
