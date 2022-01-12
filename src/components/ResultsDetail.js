import React from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'

export default function ResultsDetail({result}) {
  return (
    <View style={styles.result}>
      <Image style={styles.image} source={{uri: result.image_url}}/>
      <Text style={styles.name}>{result.name}</Text>
      <Text>{result.rating} Stars({result.review_count})</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  result: {
    marginRight: 10,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 4,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 14,
  }
})