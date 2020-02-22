import React, { useState, useEffect } from "react"
import {
  Animated,
  ActivityIndicator,
  Text,
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  TouchableHighlight
} from "react-native"
const config = require("../../../config")
import {
  List,
  ListItem,
  Left,
  Right,
  Content,
  Container,
  Button,
  Toast,
  Icon,
  Col
} from "native-base"
import { SwipeListView, SwipeRow } from "react-native-swipe-list-view"

const OrderScreen = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [dataSource, setDataSource] = useState([])

  const onAddItem = uid => {
    fetch(`${config.SERVER_API}/orders_detail/${uid}/delete`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: {}
    })

    initData()
  }

  const onDeleteItem = uid => {
    fetch(`${config.SERVER_API}/orders_detail/${uid}/delete`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: {}
    })

    initData()
  }

  const sendOrderToPOS = () => {
    fetch(`${config.SERVER_API}/orders_detail/empty`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: {}
    })

    Toast.show({
      text: "ส่งข้อมูลเข้า POS เรียบร้อยแล้ว",
      buttonText: "OK",
      buttonStyle: { backgroundColor: "#5cb85c" }
    })

    initData()
  }

  const initData = () => {
    fetch(`${config.SERVER_API}/orders_detail?order_no=00001`)
      .then(response => response.json())
      .then(responseJson => {
        setIsLoading(false)
        setDataSource(responseJson)
      })
      .catch(error => {
        console.error(error)
      })
  }

  useEffect(() => {
    initData()
  }, [])

  if (isLoading) {
    return (
      <View style={{ flex: 1, padding: 20 }}>
        <ActivityIndicator />
      </View>
    )
  }

  return (
    <Container>
      <View>
        <Text
          style={{
            color: "green",
            fontSize: 20,
            textAlign: "center",
            backgroundColor: "blue",
            color: "white",
            padding: 5,
            textAlignVertical: "center"
          }}
        >
          หน้าจอรายการสินค้าที่สั่ง
        </Text>
      </View>
      <SwipeListView
        data={dataSource}
        renderItem={(data, index) => (
          <TouchableHighlight
            onPress={() => console.log("You touched me")}
            style={styles.rowFront}
            underlayColor={"#AAA"}
          >
            <View style={styles.standaloneRowFront}>
              <Text>
                รหัส {data.item.menu_code}{" "}
                <Text style={{ fontWeight: "bold" }}>
                  {data.item.menu_name}
                </Text>{" "}
                ราคา {data.item.price} จำนวน {data.item.qty} รายการ
              </Text>
            </View>
          </TouchableHighlight>
        )}
        renderHiddenItem={(data, rowMap) => (
          <View style={styles.standaloneRowBack}>
            <Button success onPress={() => onAddItem(data.item.uid)}>
              <Icon name="add" />
            </Button>
            <Button danger onPress={() => onDeleteItem(data.item.uid)}>
              <Icon name="trash" />
            </Button>
          </View>
        )}
        leftOpenValue={65}
        rightOpenValue={-65}
      />
      <View style={{ justifyContent: "center" }}>
        <Button
          style={{ justifyContent: "center", backgroundColor: "green" }}
          onPress={() => sendOrderToPOS()}
        >
          <Text style={{ color: "white", fontSize: 20 }}>ยืนยันรายการ</Text>
        </Button>
      </View>
      {/* 
      <Content>
        <View style={styles.container}>
          {dataSource.map((item, index) => (
            <SwipeRow leftOpenValue={75} rightOpenValue={-75} key={index}>
              <View style={styles.standaloneRowBack}>
                <Text style={styles.backTextWhite}>
                  <Icon name="add" />
                </Text>
                <Button danger onPress={() => onDeleteItem(item.uid)}>
                  <Icon name="trash" />
                </Button>
              </View>
              <View style={styles.standaloneRowFront}>
                <Text>
                  รหัส {item.menu_code}{" "}
                  <Text style={{ fontWeight: "bold" }}>{item.menu_name}</Text>{" "}
                  ราคา {item.price} จำนวน {item.qty} รายการ
                </Text>
              </View>
            </SwipeRow>
          ))}
        </View>
      </Content>
       */}
    </Container>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    height: 20
  },
  standalone: {
    marginTop: 30,
    marginBottom: 30
  },
  standaloneRowFront: {
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    borderColor: "#dddddd",
    borderBottomWidth: 1
  },
  standaloneRowBack: {
    alignItems: "center",
    backgroundColor: "#ffffff",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15
  },
  backTextWhite: {
    color: "#FFF"
  },
  rowFront: {
    alignItems: "center",
    backgroundColor: "#CCC",
    borderBottomColor: "black",
    borderBottomWidth: 1,
    justifyContent: "center"
  },
  rowBack: {
    alignItems: "center",
    backgroundColor: "#DDD",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 15
  },
  backRightBtn: {
    alignItems: "center",
    bottom: 0,
    justifyContent: "center",
    position: "absolute",
    top: 0,
    width: 75
  },
  backRightBtnLeft: {
    backgroundColor: "blue",
    right: 75
  },
  backRightBtnRight: {
    backgroundColor: "red",
    right: 0
  },
  controls: {
    alignItems: "center",
    marginBottom: 30
  },
  switchContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 5
  },
  switch: {
    alignItems: "center",
    borderWidth: 1,
    borderColor: "black",
    paddingVertical: 10,
    width: Dimensions.get("window").width / 4
  },
  trash: {
    height: 25,
    width: 25
  }
})

module.exports = OrderScreen
