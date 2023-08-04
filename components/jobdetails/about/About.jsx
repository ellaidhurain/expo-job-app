import React from "react";
import { View, Text } from "react-native";

import styles from "./about.style";

const About = ({ info }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headText}>About the Job:</Text>
      {info?.map((item, index) => (
        <View style={styles.contentBox} key={index + index}>
          <Text style={styles.contextText}>{item.job_description}</Text>
        </View>
      ))}
    </View>
  );
};

export default About;
