import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function  Profile({navigation}) {
    return (
      <View style={styles.container}>
          <TouchableOpacity onPress={() => navigation.navigate('Settings')} style={{height: '15%', width: '10%', justifyContent: 'center', alignItems: 'center', position: 'absolute', zIndex: 10}}>
<Ionicons name="ios-arrow-back" style={{fontSize: 40}}/>
</TouchableOpacity>
          <View style={styles.header}></View>
          <Image style={styles.avatar} source={{uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'}}/>
          <View style={styles.body}>
            <View style={styles.bodyContent}>
              <View style={styles.buttonContainer}>
                <Text>Nom : Albert</Text>  
              </View>              
              <View style={styles.buttonContainer}>
                <Text>Prenom : Alain</Text>  
              </View>
              <View style={styles.buttonContainer}>
                <Text>Adresse :  23 rue de la paix</Text>  
              </View>       
              <View style={styles.buttonContainer}>
                <Text>Numéro :  0651093711</Text>  
              </View>       
              <View style={styles.buttonContainer}>
                <Text>Carte banquaire :  *************98489</Text>  
              </View>       
              <View style={styles.buttonContainer}>
                <Text>Mot de passe :  *****</Text>  
              </View>     
            </View>
        </View>
      </View>
    );
}
const styles = StyleSheet.create({
    header:{
      backgroundColor: "#F1C626",
      height:150,
    },
    avatar: {
      width: 130,
      height: 130,
      borderRadius: 63,
      borderWidth: 4,
      borderColor: "white",
      marginBottom:10,
      alignSelf:'center',
      position: 'absolute',
      marginTop:90
    },
    name:{
      fontSize:22,
      color:"#FFFFFF",
      fontWeight:'600',
    },
    body:{
      marginTop:40,
    },
    bodyContent: {
      flex: 1,
      alignItems: 'center',
      padding:30,
    },
    name:{
      fontSize:28,
      color: "#696969",
      fontWeight: "600"
    },
    info:{
      fontSize:16,
      color: "#00BFFF",
      marginTop:10
    },
    description:{
      fontSize:16,
      color: "#696969",
      marginTop:10,
      textAlign: 'center'
    },
    buttonContainer: {
      marginTop:10,
      height:45,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom:20,
      width:250,
      borderRadius:30,
      backgroundColor: "#F1C626",
    },
  });