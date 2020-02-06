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
  Content
} from "native-base"

const menus = [
  "https://www.jeffersteak.com/img/menu/dessert/dessert1.jpg",
  "https://www.jeffersteak.com/img/menu/dessert/dessert2.jpg",
  "https://www.jeffersteak.com/img/menu/dessert/dessert3.jpg",
  "https://www.jeffersteak.com/img/menu/dessert/dessert4.jpg"
]
const Appitizer = () => {
  return (
    <Content>
      <List>
        {menus.map((name, index) => {
          return (
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: name }} />
              </Left>
              <Body>
                <Text>Dessert { index +1 }</Text>
                <Text note numberOfLines={1}>
                  ของหวาน
                </Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>
          )
        })}
      </List>
    </Content>
  )
}

export default Appitizer
