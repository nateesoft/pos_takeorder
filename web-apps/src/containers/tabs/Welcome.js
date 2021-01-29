import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import styled from 'styled-components'
const QRCode = require("qrcode.react")

const ButtonLink = styled(Link)`
  text-decoration: none;
  padding: 10px;
  background-color: chocolate;
  color: white;
  border: 1px solid;
`;

const DivContainer = styled.div`
  margin: 10px;
`;

const URL = window.location

const Welcome = () => {
  useEffect(() => {
    return () => {
    }
  }, [])
  return (
    <div align="center">
      <h1>Welcome Page</h1>
      <QRCode value={`${URL}`} />
      <h2>Scan this QR CODE</h2>
      <h3>URL: <a href={`${URL}`}>{`${URL}`}</a></h3>
      <DivContainer>
        <ButtonLink to={`/management_group`}>ADD GROUP</ButtonLink>
        <ButtonLink to={`/management_product`}>ADD PRODUCT</ButtonLink>
      </DivContainer>
    </div>
  )
}

export default Welcome
