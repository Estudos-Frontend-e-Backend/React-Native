import React from "react";
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";

const MainCard = (props) => {
  const Icon = () => {
    if (props.icon === "morning") {
      return (
        <Feather name="sun" style={styles.cardIcon} size={40} color="white" />
      );
    }
    if (props.icon === "afternoon") {
      return (
        <Fontisto name="day-cloudy" style={styles.cardIcon} size={40} color="white" />
      );
    }
    if (props.icon === "night") {
      return (
        <Feather name="cloud-rain" style={styles.cardIcon} size={40} color="white" />
      );
    }
  };

  const styles = StyleSheet.create({
    temperature: {
      alignItems: "center",
      flexDirection: "row",
      marginTop: 10,
    },
    refreshButton: {
      position: "absolute",
      margin: 30,
      alignSelf: "flex-start",
    },
    card: {
      backgroundColor: props.backgroundColor,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 10,
      margin: 10,
      width: 110,
      height: 210,
    },
    text: {
      color: "white",
      margin: 15,
      fontSize: 20,
    },
    cardView: {},
    cardIcon: {
      color: "white",
      margin: 15,
    },
  });

  return (
    <View style={styles.card}>
      <Text style={styles.text}>{props.title}</Text>
      <Icon></Icon>
      <Text style={styles.text}>{props.temperature}</Text>
    </View>
  );
};

export default MainCard;
