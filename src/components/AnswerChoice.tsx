// AnswerChoice.js
import React from 'react';
import { View, Text, Pressable, StyleSheet, PressableProps } from 'react-native';
type AnswerChoiceProps = {
    choiceText: string;
    onPress: PressableProps['onPress'];
  };
const AnswerChoice = ({ choiceText, onPress } : AnswerChoiceProps) => {
  return (
    <Pressable style={styles.choiceContainer} onPress={onPress}>
      <Text style={styles.choiceText}>{choiceText}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  choiceContainer: {
    width:"auto",
    backgroundColor: '#009688', // Set your desired background color
    padding: 20,
    margin:10,
    borderRadius: 8,
  },
  choiceText: {
    color: 'white', // Set your desired text color
    fontSize: 16,
    fontFamily: 'ProtestRiot',
  },
});

export default AnswerChoice;
