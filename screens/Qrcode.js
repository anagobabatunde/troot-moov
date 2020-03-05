import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { Camera } from 'expo-camera';
import { Ionicons } from '@expo/vector-icons';

export default function App({ navigation }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={{ flex: 1 }}>
                  <TouchableOpacity onPress={() => navigation.navigate('Home')} style={{height: '15%', width: '10%', justifyContent: 'center', alignItems: 'center', position: 'absolute', zIndex: 10}}>
<Ionicons name="ios-arrow-back" style={{fontSize: 40}}/>
</TouchableOpacity>
        <View style={{width: 'auto', height:'auto', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
        <Image
        style={{height: 65, width: 65}}
          source={require('../assets/scan.png')}
        />
            <Text style={{fontSize: 15, paddingTop: 10}}>
                1 € pour démarrer et 0,17 €/minute commencé
            </Text>
        </View>
      <Camera style={{ flex: 1 }} type={type}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'transparent',
            flexDirection: 'row',
          }}>
          <TouchableOpacity
            style={{
              flex: 0.1,
              alignSelf: 'flex-end',
              alignItems: 'center',
            }}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}>
          </TouchableOpacity>
        </View>
      </Camera>
      <View style={{width: 'auto', height:'auto', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
            <Text style={{fontSize: 50, paddingTop: 10}}>
                Scaner
            </Text>
        </View>
    </View>
  );
}