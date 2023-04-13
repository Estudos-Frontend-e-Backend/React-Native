import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState, useEffect } from "react";
import { Feather } from "@expo/vector-icons";


export function MainCard(props){

    const styles = StyleSheet.create({
        card: {
            backgroundColor: 'red',
           justifyContent: 'center',
           alignItems: 'center',
           borderRadius: 20, 
        },
        temperature: {
          alignItems: 'center',
          flexDirection: 'row',
          marginTop: 10,
        },
        refreshButton: {
          position: 'absolute',
          margin: 30,
          alignSelf: 'flex-start',
        },
      });


    return(
        <View style={styles.card}>
            <Text style={styles.cardTitle}>Manha</Text>
            <Feather name="sun" style={{ marginTop: 55 }} size={40} color="orange" />
            <Text>21°C</Text>
        </View>
    )
}