import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker,Circle } from 'react-native-maps';
import scooterData from "../scooter/data"
import borneData from "../scooter/borne"
import Logo from "../components/logo";
import Button from "../components/button"

export default class HomeScreen extends React.Component {
  render() {
    console.log(scooterData[0]);
    return (
      <View style={{flex: 1}}>
        <MapView
        style={{ flex: 1 }}
        // provider={PROVIDER_GOOGLE}
        showsUserLocation
        initialRegion={{
          latitude: 48.898750,
          longitude: 2.093590,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421}}
          >
          {borneData.map((borne, i) => (
            <Circle
            key={i}
            center={borne.pos}
            radius={borne.radius}
            fillColor="rgba(235, 210, 52, 1)"
            strokeColor="rgba(0,0,0,1)"
            zIndex={2}
            strokeWidth={2}
            />
            ))}
            <View>
              <Logo/>
            </View>
          {scooterData.map((scooter, i) => (
            <Marker
            key={i}
            tileSize={0}
            coordinate={scooter}
            image={require('../scooter/ddf.png')}
            title={"FR"}
            description={"DFRZ"}
            />
            ))}
          {/* <View style={{alignItems: 'flex-end', justifyContent: 'flex-end'}}>
          <Button/>
          </View> */}
          {/* <View style={styles.buttonContainer}>
            <View style={styles.bubble}>
            <Text>Scanner et rouler</Text>
            </View>
          </View> */}
          </MapView>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    marginVertical: 20,
    backgroundColor: 'transparent',
  },
  bubble: {
    flex: 1,
    backgroundColor: 'rgba(235, 210, 52,0.7)',
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 20,
  },

})