import React, { Component } from "react";
import { StyleSheet, FlatList, Text, Image, View } from "react-native";
import PropTypes from "prop-types";

const PeopleList = props => {
  const keyExtractor = item => item.email;

  const renderItem = ({ item }) => {
    const { name, picture, cell, email } = item;

    return (
      <View>
        <View style={styles.cardContainerStyle}>
          <View style={{ paddingRight: 5 }}>
            <Text style={styles.cardTextStyle}>
              {name.first} {name.last} {"\n"}
              {cell} {"\n"}
              {email}
            </Text>
          </View>
          <Image
            style={styles.faceImageStyle}
            source={{ uri: picture.medium }}
          />
        </View>
      </View>
    );
  };

  return (
    <FlatList
      style={{ flex: 1 }}
      data={props.people}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
    />
  );
};

PeopleList.propTypes = {
  people: PropTypes.array
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#093339"
  },
  cardContainerStyle: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 20,
    backgroundColor: "#4e8087",
    padding: 10
  },
  faceImageStyle: {
    width: 65,
    height: 65
  },
  cardTextStyle: {
    color: "white",
    textAlign: "left"
  }
});

export default PeopleList;
