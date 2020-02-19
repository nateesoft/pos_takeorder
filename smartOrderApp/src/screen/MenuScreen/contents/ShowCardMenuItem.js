import React from "react"
import {
  Button,
  Text,
  Left,
  Body,
  Right,
  Content,
  Card,
  Thumbnail,
  CardItem,
  Icon
} from "native-base"
import { Image } from "react-native"

const ShowCardMenuItem = props => (
  <Content>
    {props.menus.map((item, index) => (
      <Card key={index}>
        <CardItem>
          <Left>
            <Thumbnail source={{ uri: item.uri }} />
            <Body>
              <Text>{item.name}</Text>
              <Text note>{item.description}</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem cardBody>
          <Image
            source={{ uri: item.uri_full }}
            style={{ height: 200, width: null, flex: 1 }}
          />
        </CardItem>
        <CardItem>
          <Left>
            <Button transparent>
              <Icon active name="thumbs-up" />
              <Text>{item.isLike} Likes</Text>
            </Button>
          </Left>
          <Body>
            <Button transparent>
              <Icon active name="chatbubbles" />
              <Text>{item.isComment} Comments</Text>
            </Button>
          </Body>
          <Right>
            <Button
              success
              onPress={() => onAddOrder(item.id, item.name, item.price)}
            >
              <Text>Add</Text>
            </Button>
          </Right>
        </CardItem>
      </Card>
    ))}
  </Content>
)

export default ShowCardMenuItem
