import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { styles } from './style';
import { AntDesign } from '@expo/vector-icons';

export function Foto() {
  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.circle}>
            <AntDesign name="user" size={80} color="black" />
        </TouchableOpacity>        
    </View>
  );
}