import React, { useState, useEffect } from "react";
import { StyleSheet, View, ActivityIndicator } from "react-native";
import PeopleList from "../components/PeopleList";

const AppContainer = props => {
  const [people, setPeople] = useState([]);
  const [errorMessage, seterrorMessage] = useState("");
  const [isFetching, setIsFetching] = useState(true);

  const fetchRandomPeopleAPI = async () => {
    try {
      let response = await fetch("https://randomuser.me/api/?results=15");
      let json = await response.json();
      setPeople(json.results);
      setIsFetching(false);
    } catch (error) {
      seterrorMessage(error);
    }
  };

  useEffect(() => {
    fetchRandomPeopleAPI();
  }, []);

  let content = <PeopleList people={people} />;
  if (isFetching) {
    content = <ActivityIndicator size="large" />;
  }
  return <View style={styles.container}>{content}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#093339"
  }
});

export default AppContainer;
