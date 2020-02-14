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
  Text
} from "native-base"
import FoodList from "./components/footer_tabs/food_menu/FoodList"
import TableList from "./components/footer_tabs/TableList"
import BillList from "./components/footer_tabs/BillList"
// import OrderBill from "./components/footer_tabs/OrderList"
import MyOrder from "./components/footer_tabs/MyOrder"

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
        {screen === 1 && <FoodList />}
        {screen === 2 && <TableList />}
        {screen === 3 && <BillList />}
        {screen === 4 && <MyOrder />}
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
            <Button vertical onPress={() => setScreen(3)} active={screen === 3}>
              <Icon name="paper" style={{ color: "blue" }} />
              <Text>Bill</Text>
            </Button>
            <Button vertical onPress={() => setScreen(4)} active={screen === 4}>
              <Icon name="clipboard" style={{ color: "blue" }} />
              <Text>Order</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    </Root>
  )
}
