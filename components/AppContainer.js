import React, { useState, useEffect } from "react";
import { StyleSheet, View, ActivityIndicator } from "react-native";
import { connect } from "react-redux";

import PeopleList from "../components/PeopleList";
import { fetchPeople } from "../redux/actions/peopleActions";

const AppContainer = props => {
  useEffect(() => {
    props.fetchPeople();
  }, []);

  let content = <PeopleList people={props.randomPeople.people} />;
  if (props.randomPeople.isFetching) {
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

const mapStateToProps = state => {
  return {
    randomPeople: state
  };
};

export default connect(mapStateToProps, { fetchPeople })(AppContainer);
