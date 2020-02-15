import React from "react"
import { Tabs, Tab, ScrollableTab, Icon, TabHeading, Text } from "native-base"
import Recommend from "./Recommend"
import Appitizer from "./Appitizer"
import Beef from "./Beef"
import Beverage from "./Beverage"
import Burger from "./Burger"
import Chicken from "./Chicken"
import Delivery from "./Delivery"
import Dessert from "./Dessert"
import Fish from "./Fish"
import Kids from "./Kids"
import Pork from "./Pork"
import Premiumsteak from "./Premiumsteak"
import Salad from "./Salad"
import Soup from "./Soup"
import Spaghetti from "./Spaghetti"
import Yourway from "./Yourway"
import ListMenuItem from "./contents/ListMenuItem"

const MenuScreen = props => {
  const { config } = props

  const addMenu = (code, name, price) =>
    fetch(`${config.SERVER_API}/orders/create`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ code, name, price })
    })

  return (
    <Tabs renderTabBar={() => <ScrollableTab />}>
      <Tab
        heading={
          <TabHeading>
            <Icon name="star" />
            <Text>Recommend</Text>
          </TabHeading>
        }
      >
        <Recommend onAddOrder={addMenu} {...props} />
      </Tab>
      <Tab heading="Appitizer">
        <Appitizer
          ListMenuItem={ListMenuItem}
          onAddOrder={addMenu}
          {...props}
        />
      </Tab>
      <Tab heading="Beef">
        <Beef ListMenuItem={ListMenuItem} onAddOrder={addMenu} {...props} />
      </Tab>
      <Tab heading="Beverage">
        <Beverage ListMenuItem={ListMenuItem} onAddOrder={addMenu} {...props} />
      </Tab>
      <Tab heading="Burger">
        <Burger ListMenuItem={ListMenuItem} onAddOrder={addMenu} {...props} />
      </Tab>
      <Tab heading="Chicken">
        <Chicken ListMenuItem={ListMenuItem} onAddOrder={addMenu} {...props} />
      </Tab>
      <Tab heading="Delivery">
        <Delivery ListMenuItem={ListMenuItem} onAddOrder={addMenu} {...props} />
      </Tab>
      <Tab heading="Dessert">
        <Dessert ListMenuItem={ListMenuItem} onAddOrder={addMenu} {...props} />
      </Tab>
      <Tab heading="Fish">
        <Fish ListMenuItem={ListMenuItem} onAddOrder={addMenu} {...props} />
      </Tab>
      <Tab heading="Kids">
        <Kids ListMenuItem={ListMenuItem} onAddOrder={addMenu} {...props} />
      </Tab>
      <Tab heading="Pork">
        <Pork ListMenuItem={ListMenuItem} onAddOrder={addMenu} {...props} />
      </Tab>
      <Tab heading="Premiumsteak">
        <Premiumsteak
          ListMenuItem={ListMenuItem}
          onAddOrder={addMenu}
          {...props}
        />
      </Tab>
      <Tab heading="Salad">
        <Salad ListMenuItem={ListMenuItem} onAddOrder={addMenu} {...props} />
      </Tab>
      <Tab heading="Soup">
        <Soup ListMenuItem={ListMenuItem} onAddOrder={addMenu} {...props} />
      </Tab>
      <Tab heading="Spaghetti">
        <Spaghetti
          ListMenuItem={ListMenuItem}
          onAddOrder={addMenu}
          {...props}
        />
      </Tab>
      <Tab heading="Yourway">
        <Yourway ListMenuItem={ListMenuItem} onAddOrder={addMenu} {...props} />
      </Tab>
    </Tabs>
  )
}

export default MenuScreen
