import React from "react";
import { StyleSheet, TextInput, View, Button, Text } from "react-native";

export default function App() {
  // return (
  //   <View style={{ padding: 50 }}>
  //     <View
  //       style={{
  //         flexDirection: "row",
  //         justifyContent: "space-between",
  //         alignItems: "center",
  //       }}
  //     >
  //       <TextInput
  //         placeholder="Course Goal"
  //         style={{
  //           padding: 15,
  //           borderBottomColor: "black",
  //           borderBottomWidth: 2,
  //           width: "80%",
  //         }}
  //       />
  //       <Button title="ADD" />
  //     </View>
  //     <View></View>
  //   </View>
  // );

  return (
    <View
      style={{
        padding: 50,
        flexDirection: "row",
        width: "80%",
        height: 300,
        justifyContent: "space-between",
        alignItems: "stretch",
      }}
    >
      <View
        style={{
          backgroundColor: "red",
          // width: 100,
          // height: 100,
          flex: 1, //now this child View component can get as much as space of the parent it can
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>1</Text>
      </View>
      <View
        style={{
          backgroundColor: "blue",
          // width: 100,
          // height: 100,
          flex: 1, // if flex to 2, it will take double space from the first one.
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>2</Text>
      </View>
      <View
        style={{
          backgroundColor: "green",
          // width: 100,
          // height: 100,
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>3</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
