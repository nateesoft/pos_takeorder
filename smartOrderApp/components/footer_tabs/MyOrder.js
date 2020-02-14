import React from "react"
import {
  FlatList,
  ActivityIndicator,
  Text,
  View,
  StyleSheet
} from "react-native"
const config = require("../../config/index")
import {
  List,
  ListItem,
  Left,
  Right,
  Icon,
  Content,
  Container,
  Header,
  Footer
} from "native-base"

export default class MyOrder extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isLoading: true }
  }

  componentDidMount() {
    return fetch(`${config.SERVER_API}/orders`)
      .then(response => response.json())
      .then(responseJson => {
        this.setState(
          {
            isLoading: false,
            dataSource: responseJson.orderList
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
        <Header style={{ backgroundColor: "red" }}>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 20,
              color: "white"
            }}
          >
            Net total ( {netTotal.toFixed(2)} )
          </Text>
        </Header>
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
                  <Text style={{ padding: 10 }}>{item.code}</Text>
                  <Text style={{ padding: 10 }}></Text>
                  <Text style={{ padding: 10 }}>{item.name}</Text>
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
      </Container>
      // </View>
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
