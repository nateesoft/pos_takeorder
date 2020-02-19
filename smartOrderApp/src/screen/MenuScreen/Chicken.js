import React, { useState, useEffect } from "react"
import { Content } from "native-base"
import { ActivityIndicator, View } from "react-native"

const Chicken = props => {
  const { config, onAddOrder, ListMenuItem } = props
  const [isLoading, setIsLoading] = useState(true)
  const [menus, setMenus] = useState([])
  useEffect(() => {
    fetch(`${config.SERVER_API}/product/g05`)
      .then(response => response.json())
      .then(responseJson => {
        setIsLoading(false)
        setMenus(responseJson)
      })
      .catch(error => {
        console.error(error)
      })
  }, [])

  if (isLoading) {
    return (
      <View style={{ flex: 1, padding: 20 }}>
        <ActivityIndicator />
      </View>
    )
  }

  return (
    <Content>
      <ListMenuItem menus={menus} submit={onAddOrder} {...props} />
    </Content>
  )
}

export default Chicken
