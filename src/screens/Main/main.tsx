import React from 'react';
import { View, Text, TouchableOpacity, Linking } from 'react-native';
import { Foto } from '../../component/foto';
import { styles } from './style';

export default function Main({ navigation } : any) {

  function navToSkill(){
    navigation.navigate('Skill');
  }
  
  const openLinkedIn = () => {
    Linking.openURL('https://www.linkedin.com/in/matheus-motta-8ab782210/');
  };

  const openGitHub = () => {
    Linking.openURL('https://github.com/mmmmattos13');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Foto />
        <Text style={styles.name}>Matheus Motta</Text>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.button} onPress={openLinkedIn}>
            <Text style={styles.buttonText}>LinkedIn</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={openGitHub}>
            <Text style={styles.buttonText}>GitHub</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => alert('Send Email')}>
            <Text style={styles.buttonText}>E-mail</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={navToSkill}>
            <Text style={styles.buttonText}>Skills</Text>
          </TouchableOpacity>
        </View>
      </View>        
    </View>
  );
}
