import React from "react"
import {
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right
} from "native-base"
import { Image } from "react-native"

const Recommend = props => {
  const { config, onAddOrder } = props

  const host_url = `${config.THUMBNAIL}`
  const host_full_url = `${config.FULL_IMG}`
  const menus = [
    {
      id: 1,
      uri: `${host_url}/appitizer/appitizer1.jpg`,
      uri_full: `${host_full_url}/appitizer/appitizer1.jpg`,
      name: "Recommend 01",
      price: 199.0,
      description: "เมนูแนะนำ",
      isLike: 10,
      isComment: 12
    },
    {
      id: 2,
      uri: `${host_url}/beef/beef1.jpg`,
      uri_full: `${host_full_url}/beef/beef1.jpg`,
      name: "Recommend 02",
      price: 169.0,
      description: "เมนูแนะนำ",
      isLike: 5,
      isComment: 3
    },
    {
      id: 3,
      uri: `${host_url}/burger/burger1.jpg`,
      uri_full: `${host_full_url}/burger/burger1.jpg`,
      name: "Recommend 03",
      price: 179.0,
      description: "เมนูแนะนำ",
      isLike: 6,
      isComment: 2
    },
    {
      id: 4,
      uri: `${host_url}/Chicken/Chicken1.jpg`,
      uri_full: `${host_full_url}/Chicken/Chicken1.jpg`,
      name: "Recommend 04",
      price: 399.0,
      description: "เมนูแนะนำ",
      isLike: 8,
      isComment: 1
    },
    {
      id: 5,
      uri: `${host_url}/appitizer/appitizer5.jpg`,
      uri_full: `${host_full_url}/appitizer/appitizer5.jpg`,
      name: "Recommend 05",
      price: 299.0,
      description: "เมนูแนะนำ",
      isLike: 1,
      isComment: 1
    }
  ]

  return (
    <Content>
      {menus.map((item, index) => (
        <Card>
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
}

export default Recommend
