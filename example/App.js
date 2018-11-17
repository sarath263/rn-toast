/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, TextInput } from "react-native";
import showToast from "rn-fixed-toast";

type Props = {};
export default class App extends Component<Props> {
  constructor() {
    super();
    this.state = {
      toast: showToast(null),
      text: ""
    };
  }
  UNSAFE_componentDidMount() {
    // This is the main implementaion.. you can call showtoast wherever you want.
    this.setState({ toast: showToast("A Toasting to toast.", 10000) });
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text
          onPress={() =>
            this.setState({ toast: showToast("A Toasting to toast.", 10000) })
          }
          style={styles.instructions}
        >
          To get started, edit App.js
        </Text>
        {this.state.toast}
        {"Don't forget the above line."}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
