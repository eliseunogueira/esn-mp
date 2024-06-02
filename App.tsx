import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import "./global.css";
export default function App() {
  return (
    <View className="flex-1">
      <StatusBar style="auto" />
    </View>
  );
}
