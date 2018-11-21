/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import Header from "./src/components/Header";
import AlbumList from "./src/components/AlbumList";

// type Props = {};
//<Props>
export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header headerText={"Albums!"} />
        <AlbumList />
      </View>
    );
  }
}
