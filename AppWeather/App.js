import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState, useEffect } from "react";
import { Feather } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { MainCard } from "./components/MainCard";

export function App() {
  const [darkTheme, setDarkTheme] = useState(true);
  const [currentTemperature, setCurrentTemperature] = useState("27");
  const [location, setLocation] = useState("BR, Fortaleza");

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: darkTheme ? "#232634" : "#f2f2f2",
      alignItems: "center",
    },
    temperature: {
      alignItems: "center",
      flexDirection: "row",
      marginTop: 10,
    },
    temperatureText: {
      fontSize: 50,
      color: darkTheme ? "#e0e0e0" : "black",
    },
    refreshButton: {
      position: "absolute",
      margin: 30,
      alignSelf: "flex-start",
    },
  });

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.refreshButton}>
        <EvilIcons
          name="refresh"
          size={30}
          color={darkTheme ? "white" : "black"}
        />
      </TouchableOpacity>

      <Feather name="sun" style={{ marginTop: 55 }} size={40} color="orange" />
      <View style={styles.temperature}>
        <Text style={styles.temperatureText}>{currentTemperature}</Text>
        <Text style={[styles.temperatureText, { fontSize: 14 }]}>°C</Text>
      </View>

      <View style={styles.cardView}>
        <MainCard title={"Bom dia"}></MainCard>
      </View>
    </View>
  );
}
