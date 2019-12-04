import React from "react";
import * as Font from "expo-font";
import { 
          Text, 
          View
        } from "react-native";
import Applications from "./src/Index"

export default class App extends React.Component{
  state = {
    fontLoaded: false,
  };

  async componentDidMount(){
    await Font.loadAsync({
        'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
    })
    this.setState({ fontLoaded: true })
  }

  render() {
    const { fontLoaded } = this.state;
    if(!fontLoaded){
      return <View><Text>Cargando fuente...</Text></View>
    }
      return (
        <Applications />
    );
  }
}
