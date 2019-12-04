import React from "react";
import { StyleSheet, Text, View, FlatList, Modal, TextInput} from "react-native";
import { Item, Button, Input} from "./components/Index";

export default class App extends React.Component{
  state = {
    data: [],
    isVisible: false,
    text: ""
  };
  handlePress = () => {
    this.setState({ isVisible: true})
  };
  handleChange = text => this.setState({ text });

  handleSave = () => {
    const { text, data } =this.state
    const datos =[{ key: Math.random().toString(), title: text}].concat(data);
    this.setState({
      data: datos,
      isVisible: false,
      text: ""
    })
  }

  render() {
    const { data } = this.state;
      return (
      <View style={[styles.container, styles.gray]}>
        <View style={styles.header}>
          <Text style={styles.title}>Recordatorios</Text>
        </View>
        <View style={styles.view}>
          <Button title="Agregar" onPress={this.handlePress} />
        </View>
        <FlatList data={data} renderItem={Item} />
        <Modal animationType="slide" visible={this.state.isVisible}>
          <View style={[styles.container,styles.center]}>
            <Text style={styles.modalTitle}>Ingrese recordatorio</Text>
            <Input 
              onChangeText={this.handleChange} 
              placeholder="Recordatorio"
              value={this.state.text}
            />
            <Button title="Guardar" onPress={this.handleSave}/>
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  center:{
    justifyContent: 'center',
    alignItems: 'center'
  },
  header: {
    height: 100,
    borderBottomWidth: 1,
    backgroundColor: "#ddd"
  },
  title: {
    textAlign: "center",
    marginTop: 50,
    fontSize: 28,
    fontFamily: 'open-sans-bold'
  },
  view: {
    height: 50,
    margin: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  gray: {
    backgroundColor: "#eee"
  },
  modalTitle:{
    fontSize: 28
  },
});
