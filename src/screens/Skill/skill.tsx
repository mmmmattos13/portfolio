import React from 'react';
import { View, Text} from 'react-native';
import { Foto } from '../../component/foto';
import { styles } from './style';
import { AntDesign } from '@expo/vector-icons';

export default function Skill() {  

  
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Foto />
        <Text style={styles.name}>Matheus Motta</Text>
        <View style={styles.buttonsContainer}>
          <Text style={styles.text}>
            React Native: <AntDesign name="star" size={24} color="green" />            
         </Text>          
          <Text style={styles.text}> 
            CSS: <AntDesign name="star" size={24} color="green" />          
          </Text>
          <Text style={styles.text}>
            Python: <AntDesign name="star" size={24} color="green" />          
         </Text>          
          <Text style={styles.text}> 
            MySQL: <AntDesign name="star" size={24} color="green" />          
          </Text>
        </View>
      </View>        
    </View>
  );
}
