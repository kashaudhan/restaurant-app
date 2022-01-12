import React, { useState, useEffect } from "react";
import yelp from "../api/yelp";

export default () => {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    searchApi("pasta");
  }, []);

  /**
   * Hit the yelp business search api with the given search term
   * @param {String} searchTerm term you want to search for
   */
  const searchApi = async (searchTerm) => {
    setIsLoading(true);
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "new york",
        },
      });
      setResults(response.data.businesses);
    } catch (error) {
      console.error(error);
      setErrorMessage("Something went wrong.😑");
    } finally {
      setIsLoading(false);
    }
  };
  return [searchApi, isLoading, results, errorMessage];
};
