import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { Storage } from "expo-storage";

import { useDispatch, useSelector } from "react-redux";
import { logout } from "./../actions/auth";

const Home = ({ navigation }) => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logout()).then((response) => {
      if (response.status === "success") {
        navigation.replace("LogIn");
      }
    });
  };

  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        height: "100%",
        width: "100%",
      }}
    >
      <Text style={{ fontSize: 16 }}>Welcome {state.user}</Text>
      <TouchableOpacity style={styles.loginBtn} onPress={() => onLogout()}>
        <Text style={styles.loginButton}>LOGOUT</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  loginBtn: {
    width: "85%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#FF5466",
  },
});
