import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "./nearbyjobcard.style";
import { checkImageURL } from "../../../../utils";

const NearbyJobCard = ({ job, handleNavigate }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={handleNavigate}>
      <TouchableOpacity style={styles.logoContainer}>
        <Image
          source={{ uri: job.employer_logo }}
          // source={{
          //   uri: checkImageURL(job.employer_logo)
          //     ? job.employer_logo
          //     : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiCFMln37p-514J3EApmwdydLhLMCL1yxwcQ&usqp=CAU",
          // }}
          resizeMode="contain"
          style={styles.logoImage}
        />
      </TouchableOpacity>

      <View style={styles.textContainer}>
        <Text style={styles.jobName} numberOfLines={1}>
          {job.job_title}
        </Text>
        <Text style={styles.jobType} numberOfLines={1}>
          {job.employer_brand}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default NearbyJobCard;
