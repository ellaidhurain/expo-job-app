import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { useState } from "react";
import styles from "./popularjobs.style";
import { useRouter } from "expo-router";
import useFetch from "../../../hook/useFetch";
import { COLORS, SIZES } from "../../../constants";
import PopularJobCard from "../../common/cards/popular/PopularJobCard";
import profile from "../../../constants/images";

const data = [
  {
    job_id: 1,
    employer_logo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZV3MNzQKTE8gSyUoz4pUeclZhsrhjeys3MA&usqp=CAU",
    employer_brand: "TCS",
    job_title: "React Js developer",
  },
  {
    job_id: 2,
    employer_logo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLqFJ9Puvo60UFg0jhQ250fBqWkYno7kzO0Q&usqp=CAU",
    employer_brand: "INFOSYS",
    job_title: "React Native developer",
  },
  {
    job_id: 3,
    employer_logo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiCFMln37p-514J3EApmwdydLhLMCL1yxwcQ&usqp=CAU",
    employer_brand: "CTS",
    job_title: "Node Js developer",
  },
];

const Popularjobs = () => {
  const router = useRouter();
  const isLoading = false;
  const error = false;

  // const { isLoading, error, refetch } = useFetch("search", {
  //   query: "React Developer",
  //   num_pages:1
  // });

  const [selectedJobs, setSelectedJobs] = useState();
  const handleCardPress = (item) =>{

  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular Jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" color={COLORS.primary} />
        ) : error ? (
          <Text>There is an error</Text>
        ) : (
          <FlatList
            data={data}
            renderItem={({ item }) => <PopularJobCard item={item} />}
            keyExtractor={(item) => item?.job_id}
            contentContainerStyle={{ columnGap: SIZES.medium }}
            horizontal
          />
        )}
      </View>
    </View>
  );
};

export default Popularjobs;
