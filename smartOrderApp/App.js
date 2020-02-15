import React, { useState } from "react"
import {
  Container,
  Header,
  Button,
  Icon,
  Left,
  Body,
  Title,
  Right,
  Root,
  Footer,
  FooterTab,
  Text,
  Badge
} from "native-base"
import MenuScreen from "./src/screen/MenuScreen"
import TableScreen from "./src/screen/TableScreen"
import BillScreen from "./src/screen/BillScreen"
import OrderScreen from "./src/screen/OrderScreen"
const config = require("./config")

export default function App() {
  const [screen, setScreen] = useState(1)
  return (
    <Root>
      <Container>
        <Header hasSegment backgroundColor="#eeeeee">
          <Left>
            <Button transparent>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Jeffer Steak & Seafood</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name="search" />
            </Button>
          </Right>
        </Header>
        {screen === 1 && <MenuScreen config={config} />}
        {screen === 2 && <TableScreen />}
        {screen === 3 && <OrderScreen />}
        {screen === 4 && <BillScreen />}
        <Footer>
          <FooterTab>
            <Button vertical onPress={() => setScreen(1)} active={screen === 1}>
              <Icon name="apps" style={{ color: "blue" }} />
              <Text>Menu</Text>
            </Button>
            <Button vertical onPress={() => setScreen(2)} active={screen === 2}>
              <Icon name="grid" style={{ color: "blue" }} />
              <Text>Table</Text>
            </Button>
            <Button
              badge
              vertical
              onPress={() => setScreen(3)}
              active={screen === 3}
            >
              <Badge>
                <Text>2</Text>
              </Badge>
              <Icon name="paper" style={{ color: "blue" }} />
              <Text>Order</Text>
            </Button>
            <Button vertical onPress={() => setScreen(4)} active={screen === 4}>
              <Icon name="clipboard" style={{ color: "blue" }} />
              <Text>Bill</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    </Root>
  )
}
