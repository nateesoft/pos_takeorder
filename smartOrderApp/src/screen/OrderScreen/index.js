import React from "react"
import { ActivityIndicator, Text, View, StyleSheet } from "react-native"
const config = require("../../../config")
import {
  List,
  ListItem,
  Left,
  Right,
  Content,
  Container,
  Form,
  Item,
  Input,
  Label,
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

export default class OrderScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isLoading: true }
  }

  componentDidMount() {
    return fetch(`${config.SERVER_API}/orders_detail?order_no=00001`)
      .then(response => response.json())
      .then(responseJson => {
        this.setState(
          {
            isLoading: false,
            dataSource: responseJson
          },
          function() {}
        )
      })
      .catch(error => {
        console.error(error)
      })
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, padding: 20 }}>
          <ActivityIndicator />
        </View>
      )
    }

    const netTotal = this.state.dataSource.reduce(
      (price, item) => price + item.price,
      0
    )

    return (
      <Container>
        <Content>
          <List>
            {this.state.dataSource.map((item, index) => (
              <ListItem id={index}>
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
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44
  }
})
