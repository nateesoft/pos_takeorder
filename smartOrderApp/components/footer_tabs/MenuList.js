import React from "react"
import { FlatList, ActivityIndicator, Text, View } from "react-native"

export default class MenuList extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isLoading: true }

    fetch("http://172.20.10.5:5000/tables")
      .then(response => response.json())
      .then(responseJson => {
        this.setState(
          {
            isLoading: false,
            dataSource: responseJson.tableList
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

    return (
      <View style={{ flex: 1, paddingTop: 20 }}>
        <FlatList
          data={this.state.dataSource}
          renderItem={({ item }) => (
            <Text>
              {item.title}, {item.releaseYear}
            </Text>
          )}
          keyExtractor={({ id }, index) => id}
        />
      </View>
    )
  }
}
