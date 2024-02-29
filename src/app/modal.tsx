import { Pressable, StyleSheet, Switch, useColorScheme } from "react-native";
import {useMusic } from "../providers/MusicPlayerContext";
import { Text, View } from "@/components/Themed";
import Colors from "../constants/Colors";
import RNPickerSelect from 'react-native-picker-select';
import i18n from "i18next";
import { useTranslation } from "react-i18next";

export default function ModalScreen() {
  const { t } = useTranslation("settings");
  const changeLanguage = (val:string)=>{
    i18n.changeLanguage(val)
  }
  const colorScheme = useColorScheme();
  const {changeMusicStatus,val} = useMusic();
  return (
    <View>
      <View style={[styles.container,{backgroundColor:colorScheme=="dark" ? Colors.light.background:Colors.dark.tabIconDefault}]}>
        <Text style={[styles.title,{color:colorScheme=="dark" ? Colors.dark.background:Colors.light.background}]}>{t("language")}</Text>
        <RNPickerSelect
          style={pickerSelectStyles}
          value={i18n.language} // Kullanıcının seçtiği dilin değerini buraya ekleyin
          placeholder={{}}
            onValueChange={(value) => changeLanguage(value)}
            items={[
                { label: "English",value:"en"},
                { label: 'Deutsch', value: 'de' },
                { label: 'Türkçe', value: 'tr' },
            ]}
        />
      </View>
      <View style={[styles.container,{backgroundColor:colorScheme=="dark" ? Colors.light.background:Colors.dark.tabIconDefault}]}>
        <Text style={[styles.title,{color:colorScheme=="dark" ? Colors.dark.background:Colors.light.background}]}>{t("music")}</Text>
        <Switch
          trackColor={{ false: "#000000", true: "#ababab" }}
          thumbColor={val ? "#000000" : "#ababab"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={changeMusicStatus}
          value={val}
        />
      </View>
    </View>
  );
}

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    fontStyle:"italic"
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    paddingRight: 30, // to ensure the text is never behind the icon
  },
});

const styles = StyleSheet.create({
  container: {
    minHeight:60,
    borderRadius: 10,
    padding: 10,
    margin:5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 16,
    fontWeight:"bold",
    fontFamily:'ProtestRiot'
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
