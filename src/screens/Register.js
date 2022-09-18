import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { Storage } from "expo-storage";
import { useDispatch } from "react-redux";

import { login, signUp } from "./../actions/auth";

export default function Register({ navigation }) {
  const [fullname, setFullname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const onRegister = () => {
    let user = {
      username: username,
      password: password,
    };

    dispatch(signUp(user))
      .then((response) => {
        if (response.status == "success") {
          navigation.replace("Home");
        }
      })
      .catch((error) => {});
  };

  const haveAccount = () => {
    navigation.navigate("LogIn");
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.imageContainer}
        source={require("../../assets/logo.png")}
      />
      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Enter Fullname"
          placeholderTextColor="#003f5c"
          onChangeText={(fullname) => setFullname(fullname)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Username"
          placeholderTextColor="#003f5c"
          onChangeText={(username) => setUsername(username)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Enter Password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
      <TouchableOpacity style={styles.loginBtn} onPress={() => onRegister()}>
        <Text style={styles.loginButton}>REGISTER</Text>
      </TouchableOpacity>

      <View
        style={{
          flexDirection: "row",
          width: "80%",
          marginTop: 20,
          justifyContent: "center",
        }}
      >
        <Text>Already have an account? </Text>
        <TouchableOpacity onPress={() => haveAccount()}>
          <Text style={styles.loginText}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    height: "30%",
    width: "70%",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 40,
  },
  inputView: {
    backgroundColor: "#F5f5f5",
    borderRadius: 30,
    width: "85%",
    height: 50,
    marginBottom: 20,
    paddingHorizontal: 10,
    fontSize: 12,
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
  },
  passwordRecovery: {
    height: 20,
    marginBottom: 10,
    fontWeight: "bold",
  },
  loginBtn: {
    width: "85%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#FF5466",
  },
  loginButton: {
    fontWeight: "bold",
  },
  loginText: {
    color: "#ff0000",
    fontWeight: "bold",
    fontSize: 14,
  },
});
