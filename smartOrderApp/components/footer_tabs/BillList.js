import React from "react"
import { View, Text } from "native-base"
import { SwipeListView } from "react-native-swipe-list-view"

const BillList = () => {
  const listViewData = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15"
  ]
  return (
    <SwipeListView
      data={listViewData}
      renderItem={(data, rowMap) => (
        <View style={styles.rowFront}>
          <Text>I am {data.item} in a SwipeListView</Text>
        </View>
      )}
      renderHiddenItem={(data, rowMap) => (
        <View style={styles.rowBack}>
          <Text>Left</Text>
          <Text>Right</Text>
        </View>
      )}
      leftOpenValue={75}
      rightOpenValue={-75}
    />
  )
}

const styles = {
  rowFront: {
    alignItems: "center",
    backgroundColor: "pink",
    borderBottomColor: "black",
    borderBottomWidth: 1,
    justifyContent: "center",
    height: 50
  },
  rowBack: {
    alignItems: "center",
    backgroundColor: "#DDD",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 15
  }
}

export default BillList
