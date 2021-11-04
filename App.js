import React, { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const addGoalHandler = (goal) => {
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      { key: Math.random().toString(), value: goal },
    ]);
  };

  const onRemoveGoalHandler = (id) => {
    setCourseGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.key !== id);
    });
  };

  return (
    <View style={styles.screen}>
      <GoalInput addGoal={addGoalHandler} />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={(itemData) => (
          <GoalItem
            id={itemData.item.key}
            children={itemData.item.value}
            onDelete={onRemoveGoalHandler} // or we can bind(this, itemData.item.key) here and remove bind method in GoalItem
          />
        )}
      />
    </View>
  );

  // return (
  //   <View
  //     style={{
  //       padding: 50,
  //       flexDirection: "row",
  //       width: "80%",
  //       height: 300,
  //       justifyContent: "space-between",
  //       alignItems: "stretch",
  //     }}
  //   >
  //     <View
  //       style={{
  //         backgroundColor: "red",
  //         // width: 100,
  //         // height: 100,
  //         flex: 1, //now this child View component can get as much as space of the parent it can
  //         justifyContent: "center",
  //         alignItems: "center",
  //       }}
  //     >
  //       <Text>1</Text>
  //     </View>
  //     <View
  //       style={{
  //         backgroundColor: "blue",
  //         // width: 100,
  //         // height: 100,
  //         flex: 1, // if flex to 2, it will take double space from the first one.
  //         justifyContent: "center",
  //         alignItems: "center",
  //       }}
  //     >
  //       <Text>2</Text>
  //     </View>
  //     <View
  //       style={{
  //         backgroundColor: "green",
  //         // width: 100,
  //         // height: 100,
  //         flex: 1,
  //         justifyContent: "center",
  //         alignItems: "center",
  //       }}
  //     >
  //       <Text>3</Text>
  //     </View>
  //   </View>
  // );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
});
