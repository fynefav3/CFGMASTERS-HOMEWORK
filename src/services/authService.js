import AsyncStorage from "@react-native-async-storage/async-storage";

const logIn = async (user) => {
  const { username, password } = user;

  if (username === "" || password === "") {
    alert("Fields are empty");
  } else {
    const value = await AsyncStorage.getItem("user");

    if (value === null) {
      return {
        status: "error",
        message: "You are redirecting to home page",
      };
    } else {
      var data = JSON.parse(value);

      if (username === data.username && password === data.password) {
        return {
          status: "success",
          message: "You are redirecting to home page",
          user: username,
        };
      } else {
        return {
          status: "error",
          message: "You are redirecting to home page",
        };
      }
    }
  }
};

const signUp = async (user) => {
  const { username, password } = user;

  await AsyncStorage.setItem("user", JSON.stringify(user));

  return {
    status: "success",
    message: "You Have been registered",
    user: username,
  };
};

const logOut = async () => {
  //   AsyncStorage.clear();
  return {
    status: "success",
    message: "You are logged out",
  };
};

export default {
  logIn,
  logOut,
  signUp,
};
