import { Pressable, Text, StyleSheet, Image, ActivityIndicator } from 'react-native'
import React from 'react'
import { CategoryType } from '../types'
import Colors from '../constants/Colors'
import { Link } from 'expo-router'


type CategoryItemProps = {
  category:CategoryType
}

const CategoryItem = ({ category }: CategoryItemProps) => {
  const imagePath = category.image
  console.log(imagePath)
  return (
    <Link href={`/categories/${category.id}`} asChild>
      <Pressable style={styles.container}>
        <Image source={imagePath} style={styles.image} />
        <Text style={styles.categoryName}>{category.categoryName}</Text>
      </Pressable>
    </Link>
  );
};

export default CategoryItem

const styles = StyleSheet.create({
    container:{
      flex:1,
      alignItems:"center",
      justifyContent:"center",
      backgroundColor:"#004AAD",
      borderRadius:10,
      position: 'relative',
    },
    categoryName:{
      position: 'absolute',
      color:"#FDEEC7",
      fontSize:20,
      fontWeight:"bold",
      fontFamily:"ProtestRiot"
    },
    image:{
      opacity:0.5,
      width:"100%",
      height:"auto",
      aspectRatio:1,
      objectFit:"cover",
      borderRadius:10
    }
})