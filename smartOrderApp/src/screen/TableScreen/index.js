import React, { Component } from "react"
import {
  Container,
  Content,
  List,
  ListItem,
  Text,
  Grid,
  Col,
  Row,
  Icon
} from "native-base"
import { StyleSheet } from "react-native"
export default class TableScreen extends Component {
  render() {
    return (
      <Container>
        <Content>
          <List>
            <ListItem itemDivider>
              <Text>Zone A</Text>
            </ListItem>
            <ListItem>
              <Grid>
                <Row>
                  <Col style={styles.myColA}>
                    <Text>1</Text>
                    <Icon name="people" style={{ color: "blue" }} />
                  </Col>
                  <Col style={styles.myColA}>
                    <Text>2</Text>
                  </Col>
                  <Col style={styles.myColA}>
                    <Text>3</Text>
                  </Col>
                </Row>
              </Grid>
            </ListItem>
            <ListItem itemDivider>
              <Text>Zone B</Text>
            </ListItem>
            <ListItem>
              <Grid>
                <Row>
                  <Col style={styles.myColB}>
                    <Text style={{ color: "white" }}>1</Text>
                    <Icon name="people" />
                  </Col>
                  <Col style={styles.myColB}>
                    <Text style={{ color: "white" }}>2</Text>
                  </Col>
                  <Col style={styles.myColB}>
                    <Text style={{ color: "white" }}>3</Text>
                    <Icon name="people" />
                  </Col>
                </Row>
              </Grid>
            </ListItem>
            <ListItem itemDivider>
              <Text>Zone C</Text>
            </ListItem>
            <ListItem>
              <Grid>
                <Row>
                  <Col style={styles.myColC}>
                    <Text style={{ color: "white" }}>1</Text>
                  </Col>
                  <Col style={styles.myColC}>
                    <Text style={{ color: "white" }}>2</Text>
                    <Icon name="people" style={{ color: "white" }} />
                  </Col>
                  <Col style={styles.myColC}>
                    <Text style={{ color: "white" }}>3</Text>
                  </Col>
                </Row>
                <Row>
                  <Col style={styles.myColC}>
                    <Text style={{ color: "white" }}>4</Text>
                  </Col>
                  <Col style={styles.myColC}>
                    <Text style={{ color: "white" }}>5</Text>
                  </Col>
                  <Col style={styles.myColC}>
                    <Text style={{ color: "white" }}>6</Text>
                  </Col>
                </Row>
              </Grid>
            </ListItem>
            <ListItem itemDivider>
              <Text>Zone D</Text>
            </ListItem>
            <ListItem>
              <Grid>
                <Row>
                  <Col style={styles.myColD}>
                    <Text>1</Text>
                    <Icon name="people" />
                  </Col>
                  <Col style={styles.myColD}>
                    <Text>2</Text>
                  </Col>
                  <Col style={styles.myColD}>
                    <Text>3</Text>
                    <Icon name="people" />
                  </Col>
                </Row>
                <Row>
                  <Col style={styles.myColD}>
                    <Text>4</Text>
                    <Icon name="people" />
                  </Col>
                  <Col style={styles.myColD}>
                    <Text>5</Text>
                  </Col>
                  <Col style={styles.myColD}>
                    <Text>6</Text>
                  </Col>
                </Row>
              </Grid>
            </ListItem>
          </List>
        </Content>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  myColA: {
    height: 100,
    borderWidth: 1,
    backgroundColor: "pink",
    borderColor: "#bbbbbb"
  },
  myColB: {
    height: 100,
    borderWidth: 1,
    backgroundColor: "green",
    borderColor: "#bbbbbb"
  },
  myColC: {
    height: 100,
    borderWidth: 1,
    backgroundColor: "blue",
    borderColor: "#bbbbbb"
  },
  myColD: {
    height: 100,
    borderWidth: 1,
    backgroundColor: "yellow",
    borderColor: "#bbbbbb"
  }
})
