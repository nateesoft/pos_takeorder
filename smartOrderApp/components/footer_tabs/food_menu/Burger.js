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
  "https://www.jeffersteak.com/img/menu/burger/burger1.jpg",
  "https://www.jeffersteak.com/img/menu/burger/burger2.jpg",
  "https://www.jeffersteak.com/img/menu/burger/burger3.jpg",
  "https://www.jeffersteak.com/img/menu/burger/burger4.jpg",
  "https://www.jeffersteak.com/img/menu/burger/burger5.jpg",
  "https://www.jeffersteak.com/img/menu/burger/burger6.jpg"
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
                <Text>Burger { index +1 }</Text>
                <Text note numberOfLines={1}>
                  เบอร์เกอร์
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
