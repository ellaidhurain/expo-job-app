import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
  RefreshControl,
} from "react-native";
import { Stack, useRouter, useSearchParams } from "expo-router";
import { useCallback, useState } from "react";
import {
  Company,
  JobAbout,
  JobFooter,
  JobTabs,
  ScreenHeaderBtn,
  Specifics,
} from "../../components";
import { COLORS, SIZES, icons } from "../../constants";

const data = [
  {
    job_id: 1,
    employer_logo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZV3MNzQKTE8gSyUoz4pUeclZhsrhjeys3MA&usqp=CAU",
    employer_name: "TCS",
    job_title: "React Js developer",
    job_country: "India",
  },
  {
    job_id: 2,
    employer_logo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLqFJ9Puvo60UFg0jhQ250fBqWkYno7kzO0Q&usqp=CAU",
    employer_name: "INFOSYS",
    job_title: "React Native developer",
    job_country: "India",
  },
  {
    job_id: 3,
    employer_logo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiCFMln37p-514J3EApmwdydLhLMCL1yxwcQ&usqp=CAU",
    employer_name: "CTS",
    job_title: "Node Js developer",
    job_country: "India",
  },
];

const tabs = ["About", "Qualification", "Details"];

const points = [
  { qualification: "React Js developer", job_description:"Good Communication", details:"create a reusable code" },

];

const JobDetails = () => {
  const params = useSearchParams(); // these capture the page id dynamically and automatically
  const router = useRouter();
  const isLoading = false;
  const error = false;
  const [refreshing, setRefreshing] = useState(false);
  const [activeTab, setActiveTab] = useState(tabs[0]);

  // const { data, isLoading, error, refetch } = useFetch('job-details',{
  // job_id:params.id
  // });

  const onRefresh = useCallback(() =>{
    setRefreshing(true)
    // refetch()
    setRefreshing(false)
  },[])

  const search_data = () => {
    const jobId = parseInt(params.id, 10);
    return data.filter((item) => item.job_id === jobId);
  };

  const result = search_data();


  const displayTabContent = () => {
    switch (activeTab) {
      case "About":
        return <JobAbout title="About" info={points ?? 'N/A'}/>;
      case "Qualification":
        return <Specifics title="Qualification" points={points ?? "N/A"} />;
      case "Details":
        return <Specifics title="Details" points={points ?? "N/A"} />;
      default:
        break;
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerBackVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn
              iconUrl={icons.left}
              dimension="60%"
              handlePress={() => router.back()}
            />
          ),
          headerRight: () => (
            <ScreenHeaderBtn iconUrl={icons.share} dimension="60%" />
          ),
          headerTitle: "",
        }}
      />
      <>
        <ScrollView
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          {isLoading ? (
            <ActivityIndicator size="large" color={COLORS.primary} />
          ) : error ? (
            <Text>Something went wrong</Text>
          ) : data.length === 0 ? (
            <Text>No data</Text>
          ) : (
            <View style={{ padding: SIZES.medium, paddingBottom: 100 }}>
              <Company
                companyLogo={result[0].employer_logo}
                jobTitle={result[0].job_title}
                companyName={result[0].employer_name}
                location={result[0].job_country}
              />
              <JobTabs
                tabs={tabs}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />
              {displayTabContent()}
            </View>
          )}
        </ScrollView>

        <JobFooter url="https://careers.google.com/jobs/results"/>
      </>
    </SafeAreaView>
  );
};

export default JobDetails;
