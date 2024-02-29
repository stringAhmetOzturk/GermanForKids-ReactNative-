import { View, Text, Image, StyleSheet, Pressable, useColorScheme, Alert, FlatList } from 'react-native';
import React from 'react';
import { Link, Stack, useNavigation } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import Colors from '@/src/constants/Colors';
import CustomHeaderLeft from '@/src/components/CustomHeaderLeft';
import AnswerChoice from '@/src/components/AnswerChoice';

const GameScreen = () => {
  const imagePath = require("../../../../assets/images/categories/colors.jpg")
  const handleAnswerPress = (selectedChoice: string) => {
    // Implement your logic here based on the selected answer
    Alert.alert('Selected Answer', `You selected: ${selectedChoice}`);
  };

  const answerChoices = [
    { id: '1', choiceText: 'Choice 1' },
    { id: '2', choiceText: 'Choice 2' },
    { id: '3', choiceText: 'Choice 3' },
    { id: '4', choiceText: 'Choice 4' },
  ];
  return (
    <View style={styles.container}>
      <Stack.Screen
    
        options={{
          gestureEnabled:false,
          title: 'Learn German',
          headerBackTitleVisible: false,
          headerLeft: (props) => <CustomHeaderLeft {...props} withPopup={true} />,
          headerTitleStyle: { fontFamily: 'ProtestRiot' },
    
        }}
      />
      <View style={styles.time}>
        <Text>Time</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image source={imagePath} style={styles.image} />
      </View>
      <View style={styles.answers}>
      <FlatList
          contentContainerStyle={styles.listContent}
          data={answerChoices}
          keyExtractor={(item) => item.id}
          numColumns={2} // Set the number of columns in the grid
          renderItem={({ item }) => (
            <AnswerChoice choiceText={item.choiceText} onPress={() => handleAnswerPress(item.choiceText)} />
          )}
        />
      </View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  time: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    flex:5,
    borderRadius:10,
    padding:10
  },
  image:{
    opacity:0.5,
    width:"100%",
    height:"auto",
    aspectRatio:1,
    objectFit:"cover",
    borderRadius:10
  },
  answers: {
    flex: 3,
    padding:10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  listContent:{
    alignItems:"center",
    backgroundColor: 'yellow',
  }
});
