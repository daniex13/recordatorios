import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import item from './Item';
import datos from "./Datos";
import Button from "./Button";

export default function App() {
  handlePress = () =>{}
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Recordatorios</Text>
      </View>
      <View style={styles.view}>
        <Button title= 'Agregar' onPress={this.handlePress}/>
      </View>
      <FlatList data= {datos} renderItem={item}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  header: {
    height:100,
    borderBottomWidth:1,
    backgroundColor: "#ddd"
  },
  title:{
    textAlign: "center",
    marginTop: 50,
    fontSize: 28
  },view: {
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
});
