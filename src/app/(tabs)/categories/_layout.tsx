import React from "react";
import { Link, Stack } from "expo-router";
import { Pressable, useColorScheme } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Colors from "@/src/constants/Colors";
import CustomHeaderLeft from "@/src/components/CustomHeaderLeft";

const MenuStack = () => {
  const colorScheme = useColorScheme();
  return (
    <Stack>
      <Stack.Screen name="index" options={{
        title: "Learn German",
        headerTitleStyle: { fontFamily: "ProtestRiot" },
        headerRight: () => (
          <Link href="/modal" asChild>
            <Pressable>
              {({ pressed }) => (
                <Ionicons
                  name="settings-outline"
                  size={25}
                  color={Colors[colorScheme ?? "light"].text}
                  style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                />
              )}
            </Pressable>
          </Link>
        ),
      }} />
      <Stack.Screen name="[id]"
       options={{
        title: "Difficulty ",
        headerBackTitleVisible:false,
        headerTitleStyle: { fontFamily: "ProtestRiot" },
        headerLeft: (props) => <CustomHeaderLeft {...props} withPopup={false}/>,
      
      }}
      />
     
    </Stack>
  );
};

export default MenuStack;
