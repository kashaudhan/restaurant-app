import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import ResultsDetail from "./ResultsDetail";

export default function ResultsList({ title, results }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {title}({results.length})
      </Text>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={results}
        keyExtractor={(results) => results.id}
        renderItem={({item}) => {
          return <ResultsDetail result={item}/>
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  container: {
    marginBottom: 10,
  }
});
