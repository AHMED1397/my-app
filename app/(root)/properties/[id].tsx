import { View, Text } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

const Preoperty = () => {
  const { id } = useLocalSearchParams();

  return (
    <View>
      <Text>Preoperty :{id}</Text>
    </View>
  );
};

export default Preoperty;
