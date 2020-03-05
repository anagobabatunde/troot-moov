import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker,Circle } from 'react-native-maps';
import scooterData from "../scooter/data"
import borneData from "../scooter/borne"
import Logo from "../components/logo";
import Button from "../components/button"
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class HomeScreen extends React.Component {
  render() {
    console.log(scooterData[0]);
    return (
      <View style={{flex: 1}}>
        <MapView
        style={{ flex: 1}}
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
          {/* <Button/> */}
          </MapView>
          <TouchableOpacity style={styles.buttonContainer} onPress={() => this.props.navigation.push('Qrcode')}>
            <View style={styles.bubble}>
            <Text>Scanner et rouler</Text>
            </View>
          </TouchableOpacity>
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
    backgroundColor: 'rgba(255, 195, 77,1)',
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },

})