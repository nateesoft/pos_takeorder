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
            <Thumbnail
              source={{ uri: props.config.THUMBNAIL + item.img_url_thumbnail }}
            />
            <Body>
              <Text>{item.name}</Text>
              <Text note>{item.description}</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem cardBody>
          <Image
            source={{ uri: props.config.FULL_IMG + item.img_url }}
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
              onPress={() => props.onAddOrder(item.code, item.name, item.price)}
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
