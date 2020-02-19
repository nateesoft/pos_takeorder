import React from "react"
import { Tabs, Tab, ScrollableTab, Toast } from "native-base"
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
import showMenuItem from "./contents/ListMenuItem"
import showCardMenuItem from "./contents/ShowCardMenuItem"

const MenuScreen = props => {
  const { config } = props

  const addMenu = (code, name, price) => {
    const order_no = "00001"
    const table_code = "01"
    const emp_code = "001"
    const cust_count = 1
    const item_count = 1
    const total_amount = 199

    // fetch(`${config.SERVER_API}/orders/create`, {
    //   method: "POST",
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify({
    //     order_no,
    //     table_code,
    //     emp_code,
    //     cust_count,
    //     item_count,
    //     total_amount
    //   })
    // })

    Toast.show({
      text: `คุณเลือกรายการนี้แล้ว code=${code},name=${name},price=${price}`,
      buttonText: "OK",
      buttonStyle: { backgroundColor: "#5cb85c" }
    })

    fetch(`${config.SERVER_API}/orders_detail/create`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        index: order_no + "/" + code,
        order_no,
        menu_code: code,
        menu_name: name,
        price,
        qty: 1,
        total_amount: price
      })
    })
  }

  return (
    <Tabs renderTabBar={() => <ScrollableTab />}>
      <Tab heading="Recommend">
        <Recommend
          ListMenuItem={showCardMenuItem}
          onAddOrder={addMenu}
          {...props}
        />
      </Tab>
      <Tab heading="Appitizer">
        <Appitizer
          ListMenuItem={showMenuItem}
          onAddOrder={addMenu}
          {...props}
        />
      </Tab>
      <Tab heading="Beef">
        <Beef ListMenuItem={showMenuItem} onAddOrder={addMenu} {...props} />
      </Tab>
      <Tab heading="Beverage">
        <Beverage ListMenuItem={showMenuItem} onAddOrder={addMenu} {...props} />
      </Tab>
      <Tab heading="Burger">
        <Burger ListMenuItem={showMenuItem} onAddOrder={addMenu} {...props} />
      </Tab>
      <Tab heading="Chicken">
        <Chicken ListMenuItem={showMenuItem} onAddOrder={addMenu} {...props} />
      </Tab>
      <Tab heading="Delivery">
        <Delivery ListMenuItem={showMenuItem} onAddOrder={addMenu} {...props} />
      </Tab>
      <Tab heading="Dessert">
        <Dessert ListMenuItem={showMenuItem} onAddOrder={addMenu} {...props} />
      </Tab>
      <Tab heading="Fish">
        <Fish ListMenuItem={showMenuItem} onAddOrder={addMenu} {...props} />
      </Tab>
      <Tab heading="Kids">
        <Kids ListMenuItem={showMenuItem} onAddOrder={addMenu} {...props} />
      </Tab>
      <Tab heading="Pork">
        <Pork ListMenuItem={showMenuItem} onAddOrder={addMenu} {...props} />
      </Tab>
      <Tab heading="Premiumsteak">
        <Premiumsteak
          ListMenuItem={showMenuItem}
          onAddOrder={addMenu}
          {...props}
        />
      </Tab>
      <Tab heading="Salad">
        <Salad ListMenuItem={showMenuItem} onAddOrder={addMenu} {...props} />
      </Tab>
      <Tab heading="Soup">
        <Soup ListMenuItem={showMenuItem} onAddOrder={addMenu} {...props} />
      </Tab>
      <Tab heading="Spaghetti">
        <Spaghetti
          ListMenuItem={showMenuItem}
          onAddOrder={addMenu}
          {...props}
        />
      </Tab>
      <Tab heading="Yourway">
        <Yourway ListMenuItem={showMenuItem} onAddOrder={addMenu} {...props} />
      </Tab>
    </Tabs>
  )
}

export default MenuScreen
