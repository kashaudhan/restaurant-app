import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

export default function SearchScreen({ navigation }) {
  const [term, setTerm] = useState("");
  const [searchApi, isLoading, results, errorMessage] = useResults();

  const filterResultsByPrice = (price) => {
    return results.filter((item) => item.price == price);
  };

  return (
    <>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      {isLoading ? (
        <Text>Loading...</Text>
      ) : (
        <Text>Total items found: {results.length}</Text>
      )}
      <ScrollView style={{ marginHorizontal: 10 }}>
        <ResultsList
          results={filterResultsByPrice("$")}
          title="Cost Effective"
          navigation={navigation}
        />
        <ResultsList
          results={filterResultsByPrice("$$")}
          title="Bit Pricier"
          navigation={navigation}
        />
        <ResultsList
          results={filterResultsByPrice("$$$")}
          title="Premium"
          navigation={navigation}
        />
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({});
