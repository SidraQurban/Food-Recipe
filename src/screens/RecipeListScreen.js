import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import CategoriesList from "../components/CategoriesList";
import RecipeCard from "../components/RecipeCard";

function RecipeListScreen() {
  return (
    <SafeAreaView style={{ flex: 1, marginTop: 40, marginHorizontal: 15 }}>
      {/* Render header */}
      <Header headerText={"Hi, There!"} headerIcon={"bell-o"} />

      {/* Search bar */}
      <SearchBar icon="search" placeholder={"Enter your fav recipe "} />

      {/* Categories */}
      <View style={{ marginTop: 22 }}>
        <Text style={{ fontSize: 22, fontWeight: "bold" }}>Categories</Text>

        {/* CategoriesList */}
        <CategoriesList />
      </View>

      {/* RecipeList */}
      <View style={{ marginTop: 22, flex: 1 }}>
        <Text style={{ fontSize: 22, fontWeight: "bold" }}>Recipes</Text>

        <RecipeCard />
      </View>
    </SafeAreaView>
  );
}

export default RecipeListScreen;
