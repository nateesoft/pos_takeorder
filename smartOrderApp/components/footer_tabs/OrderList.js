import React from "react"
import { View, Text, Icon, Button, Container, Content, Body } from "native-base"
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
    <Container>
      <Content>
        <Body>
          <Text>Test</Text>
        </Body>
      </Content>
      <Content>
        <SwipeListView
          data={listViewData}
          renderItem={(item, index) => (
            <View style={styles.rowFront} id={index}>
              <Text>I am {item.name} in a SwipeListView</Text>
            </View>
          )}
          renderHiddenItem={(data, rowMap) => (
            <View style={styles.rowBack}>
              <Button danger onPress={() => alert("Trash")}>
                <Icon active name="trash" />
              </Button>
              <Button success onPress={() => alert("Add")}>
                <Icon active name="add" />
              </Button>
            </View>
          )}
          leftOpenValue={65}
          rightOpenValue={-55}
        />
      </Content>
    </Container>
  )
}

const styles = {
  rowFront: {
    alignItems: "center",
    backgroundColor: "#ffffff",
    borderBottomColor: "black",
    borderBottomWidth: 1,
    justifyContent: "center",
    height: 50
  },
  rowBack: {
    alignItems: "center",
    backgroundColor: "#ffffff",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 15
  }
}

export default OrderList
