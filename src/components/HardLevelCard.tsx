import { View, Text, Pressable, StyleSheet, Animated } from 'react-native';
import React, { useEffect, useRef } from 'react';
import { Link, useFocusEffect } from 'expo-router';
import { HardLevelCardType } from '../types';

type HardLevelCardProps = {
  props: HardLevelCardType;
};

const HardLevelCard = (props: HardLevelCardProps) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000, // 3 seconds
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  useFocusEffect(() => {
    // Reset the animation on focus (e.g., when coming back from another screen)
    fadeAnim.setValue(0);
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  });

  return (
    <Link href={`/categories/game`} asChild>
      <Pressable>
        <Animated.View
          style={[
            styles.cardContainer,
            {
              opacity: fadeAnim,
            },
          ]}
        >
          <Text style={styles.cardText}>{props.props.levelName}</Text>
        </Animated.View>
      </Pressable>
    </Link>
  );
};

export default HardLevelCard;

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#FF5C00',
    padding: 20,
    margin: 10,
    width: 'auto',
    height: 'auto',
    borderRadius: 10,
  },
  cardText: {
    color: '#FDEEC7',
    fontFamily: 'ProtestRiot',
    fontSize: 24,
  },
});
