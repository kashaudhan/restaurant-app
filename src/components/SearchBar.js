import React from 'react'
import { View, Text, StyleSheet } from "react-native";
import { Feather } from '@expo/vector-icons';

export default function SearchBar() {
  return (
    <View style={styles.background}>
      <Text>Search Bar</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#F0EEEE',
    height: 50,
    borderRadius: 8,
    marginHorizontal: 15,
  }
})
