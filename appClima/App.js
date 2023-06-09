import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import MainCard from "./components/MainCard/index";
import InfoCard from "./components/InfoCard/index";
import * as Location from 'expo-location';
import getCurrentWeather from "./api/ConsultApi";


export default function App() {

  const [darkTheme, setDarkTheme] = useState(true);
  const [currentTemperature, setCurrentTemperature] = useState("27");
  const [location, setLocation] = useState("BR, São Paulo");
  const [currentHour, setCurrentHour] = useState("12:00");

  const [wind, setWind] = useState("65");
  const [humidity, setHumidity] = useState("65");
  const [tempMin, setTempMin] = useState("21");
  const [tempMax, setTempMax] = useState("28");
  const [locationCoords ,setLocationCoords] = useState([]);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: darkTheme ?  "#232634" : "#F2F2F2",
      alignItems: "center",
    },
    temperature: {
      alignItems: "center",
      flexDirection: "row",
      marginTop: 10,
    },
    temperatureText: {
      color: darkTheme ? "#E0E0E0" : "black",
      fontSize: 50,
    },
    refreshButton: {
      position: "absolute",
      margin: 30,
      alignSelf: "flex-start",
    },
    cardView: {
      color: darkTheme ? "white" : "black",
      margin: 10,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
    },
    info: {
      alignItems: "center",
      backgroundColor: darkTheme ? "#393E54" : "#8F8F8F",
      borderRadius: 20,
      width: 350,
      height: 230,
    },
    infoText: {
      color: darkTheme ? "#E0E0E0" : "white",
      margin: 15,
      fontSize: 20,
      fontWeight: "bold",
    },
    infoCards: {
      flexDirection: "row",
      flexWrap: "wrap",
    },
    themeButton: {
      margin: 10,
      marginLeft: 300,
      alignItems: "center",
      justifyContent: "center",
      width: 50,
      height: 50,
      borderRadius: 25,
    },
    squareButton: {
      backgroundColor: darkTheme ? "#F2F2F2" : "#8F8F8F",
      justifyContent: "center",
      borderRadius: 20,
      marginRight: 20,
      width: 50,
      height: 25,
    },
    circleButton: {
      backgroundColor: darkTheme ? "#232634" : "#232644",
      alignSelf: darkTheme ? "flex-end" : "flex-start",
      margin: 5,
      width: 20,
      height: 20,
      borderRadius: 50,
    },
  });

  async function setCurrentWeather() {
    await getLocation(location)

    const data = await getCurrentWeather(locationCoords)

    setCurrentTemperature(data[0])
    setTempMin(data[1])
    setTempMax(data[2])
    setLocation(data[3])
    setWind(data[4])
  } 

  async function getLocation(){
    let {status} = await Location.requestBackgroundPermissionsAsync()
    if(status !== 'granted') {
    } else {
      location = await Location.getCurrentPositionAsync({})
      await setLocationCoords(location.coords)
      console.log(location)
    }
  }

  useEffect(()=> {
    setCurrentWeather()
  }, []);
  
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={()=> setCurrentWeather()} style={styles.refreshButton}>
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

      <Text style={[styles.temperatureText, { fontSize: 14 }]}>
        {location}, {currentHour}
      </Text>

      <View style={styles.cardView}>
        <MainCard
          title={"Manhã"}
          backgroundColor={darkTheme ? "#FF873D" : "#CC6E30"}
          temperature={"21°"}
          icon={"morning"}
        ></MainCard>
        <MainCard
          title={"Tarde"}
          backgroundColor={darkTheme ? "#D29600" : "#FCC63F"}
          temperature={"24°"}
          icon={"afternoon"}
        ></MainCard>
        <MainCard
          title={"Noite"}
          backgroundColor={darkTheme ? "#008081" : "#38B7B8"}
          temperature={"20°"}
          icon={"night"}
        ></MainCard>
      </View>

      <View style={styles.info}>
        <Text style={styles.infoText}>Informações adicionais</Text>
        <View style={styles.infoCards}>
          <InfoCard title={"Vento"} value={wind + " m/h"}></InfoCard>
          <InfoCard title={"Humidade"} value={humidity + " %"}></InfoCard>
          <InfoCard title={"Temp. Min"} value={tempMin}></InfoCard>
          <InfoCard title={"Temp. Max"} value={tempMax}></InfoCard>
        </View>
      </View>

      <View style={styles.themeButton}>
        <View style={styles.squareButton}>
          <TouchableOpacity
            style={styles.circleButton}
            onPress={() =>
              darkTheme ? setDarkTheme(false) : setDarkTheme(true)
            }
          ></TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

