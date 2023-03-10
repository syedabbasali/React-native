import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  FlatList,
  Touchable,
} from "react-native";
import { TouchableOpacity } from "react-native-web";
// import { Button } from 'react-native-web';

export default function App() {
  const [people, setPeople] = useState([
    { name: "Sultan", id: "1" },
    { name: "ibrahim", id: "2" },
    { name: "Syed", id: "3" },
    { name: "Sakib", id: "4" },
    { name: "Sulla", id: "5" },
    { name: "Majid", id: "6" },
    { name: "Aayush", id: "7" },
    { name: "Sahil", id: "8" },
    { name: "Quatib", id: "9" },
    { name: "Abhi", id: "10" },
    { name: "Abhi", id: "11" },

  ]);

  const pressHandler = (id) => {
    console.log(id);
    setPeople((prevPeople) => {
      return prevPeople.filter(person => person.id !=id)
    })
  }

  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        keyExtractor={(item) => item.id}
        data={people}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => pressHandler(item.id)}>
        <Text style={styles.item}>{item.name}</Text>
        </TouchableOpacity>
  )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 40,
    paddingHorizontal: 20,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: "pink",
    fontSize: 24,
    marginHorizontal: 10,
   
  },
});
