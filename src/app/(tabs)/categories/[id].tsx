import { View, Text, useColorScheme, StyleSheet, Pressable } from "react-native";
import React from "react";
import { Link, Stack, useLocalSearchParams } from "expo-router";
import HardLevelCard from "@/src/components/HardLevelCard";

const CategoryDetail = () => {
  const { id } = useLocalSearchParams();
  return (
    <View style={styles.container}>
      <HardLevelCard props={{categoryId:id.toString(),levelName:"Easy"}}/>
      <HardLevelCard props={{categoryId:id.toString(),levelName:"Medium"}}/>
      <HardLevelCard props={{categoryId:id.toString(),levelName:"Hard"}}/>
    </View>
  );
};

export default CategoryDetail;

const styles = StyleSheet.create({
  container:{
    flex:1,
    padding:10,
    width:"auto",
  }
})