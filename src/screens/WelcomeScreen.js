import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <Image source={require("../../assets/images/welcome1.png")} />

      <Text style={{ color: "red", fontWeight: "bold", fontSize: 22 }}>
        50k+ Premium Recipes
      </Text>
      <Text
        style={{
          color: "#3c444c",
          fontSize: 44,
          fontWeight: "bold",
          marginBottom: 20,
          marginTop: 30,
        }}
      >
        Cook Like A Chef
      </Text>
      <TouchableOpacity
        onPress={() => navigation.navigate("RecipeList")}
        style={{
          backgroundColor: "#f96163",
          borderRadius: 18,
          paddingVertical: 18,
          width: "80%",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: "#fff",
            fontWeight: "500",
            fontSize: 18,
          }}
        >
          Let's Go
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default WelcomeScreen;
