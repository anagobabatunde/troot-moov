import React, { useState } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function button() {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <AntDesign name="reload1" size={35} color="black"/>
      </TouchableOpacity>
      
        <TouchableOpacity>
        <MaterialCommunityIcons name="target" size={45} color="black"/>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flexDirection: 'column',
      width: 50,
      height: 100,
      backgroundColor: 'red',
      borderColor: 'black',
      borderWidth: 4
    },
})