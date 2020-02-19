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
    {props.menus.map((item, index) => {
      return (
        <ListItem key={index} thumbnail onPress={() => showContent(item.name)}>
          <Left>
            <Thumbnail
              square
              source={{ uri: props.config.THUMBNAIL + item.img_url }}
            />
          </Left>
          <Body>
            <Text>
              {item.name} ${item.price}
            </Text>
            <Text note numberOfLines={1}>
              {item.description}
            </Text>
          </Body>
          <Right>
            <Button
              success
              onPress={() => props.submit(item.code, item.name, item.price)}
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
