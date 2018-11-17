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
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text
          onPress={() =>
            // You can bind showtoast result to state and toast will appear.
            // The state variable must be rendered in the outer container(Say a View).
            // Params
            //  first:Message for Toast (string)
            //  second:Duration to show toast(number), Optional
            this.setState({
              toast: showToast("A Toasting for the toast.", 10000)
            })
          }
          style={styles.instructions}
        >
          Click Me.. !
        </Text>
        {this.state.toast}
        {/*"Don't forget the above line."*/}
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
