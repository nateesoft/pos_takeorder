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

const FoodList = () => {
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
        <Recommend />
      </Tab>
      <Tab heading="Appitizer">
        <Appitizer />
      </Tab>
      <Tab heading="Beef">
        <Beef />
      </Tab>
      <Tab heading="Beverage">
        <Beverage />
      </Tab>
      <Tab heading="Burger">
        <Burger />
      </Tab>
      <Tab heading="Chicken">
        <Chicken />
      </Tab>
      <Tab heading="Delivery">
        <Delivery />
      </Tab>
      <Tab heading="Dessert">
        <Dessert />
      </Tab>
      <Tab heading="Fish">
        <Fish />
      </Tab>
      <Tab heading="Kids">
        <Kids />
      </Tab>
      <Tab heading="Pork">
        <Pork />
      </Tab>
      <Tab heading="Premiumsteak">
        <Premiumsteak />
      </Tab>
      <Tab heading="Salad">
        <Salad />
      </Tab>
      <Tab heading="Soup">
        <Soup />
      </Tab>
      <Tab heading="Spaghetti">
        <Spaghetti />
      </Tab>
      <Tab heading="Yourway">
        <Yourway />
      </Tab>
    </Tabs>
  )
}

export default FoodList
