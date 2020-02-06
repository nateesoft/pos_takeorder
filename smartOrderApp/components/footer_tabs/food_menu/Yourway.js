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
  "https://www.jeffersteak.com/img/menu/yourway/yourway1.jpg",
  "https://www.jeffersteak.com/img/menu/yourway/yourway2.jpg",
  "https://www.jeffersteak.com/img/menu/yourway/yourway3.jpg",
  "https://www.jeffersteak.com/img/menu/yourway/yourway4.jpg",
  "https://www.jeffersteak.com/img/menu/yourway/yourway5.jpg",
  "https://www.jeffersteak.com/img/menu/yourway/yourway6.jpg",
  "https://www.jeffersteak.com/img/menu/yourway/yourway7.jpg",
  "https://www.jeffersteak.com/img/menu/yourway/yourway8.jpg",
  "https://www.jeffersteak.com/img/menu/yourway/yourway9.jpg",
  "https://www.jeffersteak.com/img/menu/yourway/yourway10.jpg",
  "https://www.jeffersteak.com/img/menu/yourway/yourway11.jpg",
  "https://www.jeffersteak.com/img/menu/yourway/yourway12.jpg",
  "https://www.jeffersteak.com/img/menu/yourway/yourway13.jpg",
  "https://www.jeffersteak.com/img/menu/yourway/yourway14.jpg",
  "https://www.jeffersteak.com/img/menu/yourway/yourway15.jpg",
  "https://www.jeffersteak.com/img/menu/yourway/yourway16.jpg",
  "https://www.jeffersteak.com/img/menu/yourway/yourway17.jpg",
  "https://www.jeffersteak.com/img/menu/yourway/yourway18.jpg",
  "https://www.jeffersteak.com/img/menu/yourway/yourway19.jpg",
  "https://www.jeffersteak.com/img/menu/yourway/yourway20.jpg",
  "https://www.jeffersteak.com/img/menu/yourway/yourway21.jpg",
  "https://www.jeffersteak.com/img/menu/yourway/yourway22.jpg",
  "https://www.jeffersteak.com/img/menu/yourway/yourway23.jpg",
  "https://www.jeffersteak.com/img/menu/yourway/yourway24.jpg",
  "https://www.jeffersteak.com/img/menu/yourway/yourway25.jpg"
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
                <Text>Yourway { index +1 }</Text>
                <Text note numberOfLines={1}>
                  Super smart food so yummy
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
