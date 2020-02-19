import React, { useState, useEffect } from "react"
import {
  FlatList,
  ActivityIndicator,
  Text,
  View,
  StyleSheet
} from "react-native"
const config = require("../../../config")
import {
  List,
  ListItem,
  Left,
  Right,
  Button,
  Content,
  Container,
  Header
} from "native-base"

const BillScreen = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [dataSource, setDataSource] = useState([])
  useEffect(() => {
    fetch(`${config.SERVER_API}/bill_detail?bill_no=b001`)
      .then(response => response.json())
      .then(responseJson => {
        setIsLoading(false)
        setDataSource(responseJson)
        console.log(responseJson)
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

  const netTotal = dataSource.reduce((price, item) => price + item.price, 0)

  return (
    <Container>
      <Header style={{ backgroundColor: "red" }}>
        <Text style={{ fontWeight: "bold", fontSize: 20, color: "white" }}>
          Net total ( {netTotal.toFixed(2)} )
        </Text>
      </Header>
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
                  {index + 1}
                </Text>
                <Text style={{ padding: 10 }}></Text>
                <Text style={{ padding: 10 }}>{item.menu_name}</Text>
              </Left>
              <Right>
                <Text style={{ color: "green", fontWeight: "bold" }}>
                  {item.price.toFixed(2)}
                </Text>
              </Right>
            </ListItem>
          ))}
        </List>
      </Content>
      <View style={{ justifyContent: "center", padding: 10 }}>
        <Button style={{ justifyContent: "center", backgroundColor: "blue" }}>
          <Text style={{ color: "white" }}>ยืนยันชำระเงิน</Text>
        </Button>
      </View>
    </Container>
  )
}

module.exports = BillScreen
