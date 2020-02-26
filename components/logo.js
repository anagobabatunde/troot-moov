import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

export default function logo() {
  return (
      <View style={{flex: 1, alignItems: 'center', paddingTop: 30}}>
          <Image source={require('../assets/logo.png')} style={{margin: "auto", width: 150, height: 100,alignItems: 'center'}}/>
      </View>
  );
}