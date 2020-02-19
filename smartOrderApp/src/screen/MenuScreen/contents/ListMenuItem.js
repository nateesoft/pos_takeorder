import React from "react"
import {
  Button,
  Text,
  Left,
  Body,
  Right,
  List,
  ListItem,
  Thumbnail,
  Toast
} from "native-base"

const showContent = order =>
  Toast.show({
    text: `You select: ${order}`,
    buttonText: "OK",
    buttonStyle: { backgroundColor: "#5cb85c" }
  })

const ListMenuItem = props => (
  <List>
    {props.menus.map((name, index) => {
      return (
        <ListItem key={index} thumbnail onPress={() => showContent(name.name)}>
          <Left>
            <Thumbnail square source={{ uri: name.uri }} />
          </Left>
          <Body>
            <Text>
              {name.name} ${name.price}
            </Text>
            <Text note numberOfLines={1}>
              {name.description}
            </Text>
          </Body>
          <Right>
            <Button
              success
              onPress={() => props.submit(name.id, name.name, name.price)}
            >
              <Text>Add</Text>
            </Button>
          </Right>
        </ListItem>
      )
    })}
  </List>
)

export default ListMenuItem
