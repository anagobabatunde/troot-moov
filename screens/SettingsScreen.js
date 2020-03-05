import React from "react";
import { ExpoConfigView } from "@expo/samples";
import { View, TouchableOpacity, Text, ScrollView } from "react-native";
import * as Font from 'expo-font';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { createStackNavigator, NavigationContainer } from 'react-navigation';

export default function SettingsScreen({ navigation }) {
  /**
   * Go ahead and delete ExpoConfigView and replace it with your content;
   * we just wanted to give you a quick view of your config.
   */
  return (
    <ScrollView style={{flex: 1}}>
      <View style={{justifyContent: 'space-between', flex: 1}}>
      <TouchableOpacity style={{backgroundColor: '#FFFFFF', width: 'auto', height: 50, flexDirection: 'row', alignItems: 'center',height: 70}} onPress={() => navigation.push('Compte')}>
      <MaterialCommunityIcons name="face-profile" size={32} color="black"/>
      <Text style={{fontFamily: 'PingFangHK-Semibold', fontSize: 15, paddingLeft: 70}}>Mon compte</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{backgroundColor: '#F1C626', width: 'auto', height: 50, flexDirection: 'row', alignItems: 'center',height: 70}} onPress={() => navigation.push('Compte')}>
      <FontAwesome name="euro" size={32} color="black" style={{paddingLeft: 5}}/>
      <Text style={{fontFamily: 'PingFangHK-Semibold', fontSize: 15, paddingLeft: 85}}>Payement</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{backgroundColor: '#FFFFFF', width: 'auto', height: 50, flexDirection: 'row', alignItems: 'center', height: 70}} onPress={() => navigation.push('Compte')}>
      <AntDesign name="gift" size={32} color="black"/>
      <Text style={{fontFamily: 'PingFangHK-Semibold', fontSize: 15, paddingLeft: 70}}>Trajet gratuit</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{backgroundColor: '#F1C626', width: 'auto', height: 50, flexDirection: 'row', alignItems: 'center', height: 70}} onPress={() => navigation.push('Compte')}>
      <AntDesign name="question" size={32} color="black"/>
      <Text style={{fontFamily: 'PingFangHK-Semibold', fontSize: 15, paddingLeft: 70}}>Comment rouler</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{backgroundColor: 'FFFFFF', width: 'auto', height: 50, flexDirection: 'row', alignItems: 'center', height: 70}} onPress={() => navigation.push('Compte')}>
      <MaterialCommunityIcons name="hard-hat" size={32} color="black"/>
      <Text style={{fontFamily: 'PingFangHK-Semibold', fontSize: 15, paddingLeft: 70}}>Sécurité</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{backgroundColor: '#F1C626', width: 'auto', height: 50, flexDirection: 'row', alignItems: 'center', height: 70}} onPress={() => navigation.push('Chartre')}>
      <MaterialCommunityIcons name="newspaper" size={32} color="black"/>
      <Text style={{fontFamily: 'PingFangHK-Semibold', fontSize: 15, paddingLeft: 70}}>Chartre</Text>
      </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

SettingsScreen.navigationOptions = {
  title: "TrottMoov"
};
