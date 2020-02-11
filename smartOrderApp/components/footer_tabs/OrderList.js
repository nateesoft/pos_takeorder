import React from "react"
import { View, Text } from "native-base"
import { SwipeListView } from "react-native-swipe-list-view"

const OrderList = () => {
  const listViewData = [
    { id: 1, name: "A" },
    { id: 2, name: "B" },
    { id: 3, name: "C" },
    { id: 4, name: "D" },
    { id: 5, name: "E" }
  ]
  return (
    <SwipeListView
      data={listViewData}
      renderItem={(item, index) => (
        <View style={styles.rowFront} id={index}>
          <Text>I am {item.name} in a SwipeListView</Text>
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
    backgroundColor: "orange",
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

export default OrderList
