import React, { useState, useEffect } from "react"
import { ActivityIndicator, Text, View } from "react-native"
const config = require("../../../config")
import {
  List,
  ListItem,
  Left,
  Right,
  Content,
  Container,
  Button,
  Toast
} from "native-base"

const truncateData = () => {
  fetch(`${config.SERVER_API}/orders_detail/empty`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: {}
  })

  Toast.show({
    text: "Trunate order detail successfully :)",
    buttonText: "OK",
    buttonStyle: { backgroundColor: "#5cb85c" }
  })
}

const OrderScreen = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [dataSource, setDataSource] = useState([])

  useEffect(() => {
    fetch(`${config.SERVER_API}/orders_detail?order_no=00001`)
      .then(response => response.json())
      .then(responseJson => {
        setIsLoading(false)
        setDataSource(responseJson)
      })
      .catch(error => {
        console.error(error)
      })
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
      <Content>
        <List>
          {dataSource.map((item, index) => (
            <ListItem key={index}>
              <Left>
                <Text
                  style={{
                    padding: 10,
                    backgroundColor: "#eeeeee",
                    width: 45,
                    textAlign: "center"
                  }}
                >
                  #{index + 1}
                </Text>
                <Text style={{ padding: 10 }}></Text>
                <Text style={{ padding: 10 }}>{item.menu_name}</Text>
              </Left>
              <Right>
                <Text>Qty {item.qty}</Text>
                <Text style={{ color: "green", fontWeight: "bold" }}>
                  {item.price.toFixed(2)}
                </Text>
              </Right>
            </ListItem>
          ))}
        </List>
      </Content>
      <View style={{ justifyContent: "center", padding: 10 }}>
        <Button
          style={{ justifyContent: "center", backgroundColor: "green" }}
          onPress={() => truncateData()}
        >
          <Text style={{ color: "white" }}>ยืนยันรายการ</Text>
        </Button>
      </View>
    </Container>
  )
}

module.exports = OrderScreen
