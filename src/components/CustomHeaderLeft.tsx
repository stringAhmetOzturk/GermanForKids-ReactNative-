import { Ionicons } from "@expo/vector-icons";
import { Alert, Pressable, useColorScheme } from "react-native";
import Colors from "../constants/Colors";
import { useNavigation } from "expo-router";

const CustomHeaderLeft = ({ withPopup = false }) => {
  const navigate = useNavigation();
  const colorScheme = useColorScheme();

  const showPopup = () => {
    Alert.alert(
      'Confirmation',
      'Are you sure you want to leave the game?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Leave',
          onPress: () => navigate.goBack(),
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <Pressable onPress={withPopup ? showPopup : () => navigate.goBack()}>
      <Ionicons
        name="chevron-back-outline"
        size={25}
        color={Colors[colorScheme ?? 'light'].text}
      />
    </Pressable>
  );
};

export default CustomHeaderLeft;
