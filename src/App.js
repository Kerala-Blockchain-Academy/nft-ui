import {
  Navbar,
  Container,
  Button,
  Form,
  FormControl,
  Tabs,
  Tab,
  Row,
  Col,
  Card,
} from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";

import './App.css';

function App() {

  useEffect(()=>{
    // enableMetaMask();
    getColorTokenDetails();
    getItemDetails();
  })

  const [nftValue, setnftValue] = useState("");
  const [colorTokenDetails, setColorTokenDetails] = useState([]);
  const [itemDetails, setItemDetails] = useState([]);

  let colorDetails = [{
    colorTokenValue: "#000000",
    nftOwner: "0x00000000000000000000",
    nftID: "1"
  }]

  let itemDetail = [{
    colorTokenValue: "#fffff6",
    nftSeller: "0x00000000000000000000",
    itemID: "1"
  }]

  colorDetails.map((colorDetail) => (console.log(colorDetail)));

  const nftValueChangeHandler = (event) => {
    setnftValue(event.target.value);
  };

  const enableMetaMask = async () => {
    // await ethereum.request({ method: "eth_requestAccounts" });
    // console.log(ethereum.selectedAddress);
  };

  const mintTokenHandler = async (event) => {
  };

  const getColorTokenDetails = async () => {
    setColorTokenDetails(colorDetails);
  };

  const putOnSale = async (id) => {
  };

  const getItemDetails = async () => {
    setItemDetails(itemDetail);
  };

  const buyToken = async (id) => {
  };

  return (
    <div style={{ maxWidth: "99.20%" }}>
      <Navbar bg="light" expand="sm">
        <Container fluid>
          <Navbar.Brand href="/">
            <b>🛒</b>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />

          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Hex Color Code"
              className="me-2"
              aria-label="hexCode"
              value={nftValue}
              onChange={nftValueChangeHandler}
            />
            <Button variant="outline-primary" onClick={mintTokenHandler}>
              Mint Token
            </Button>
          </Form>
        </Container>
      </Navbar>{" "}
      <br />
      <Tabs
        defaultActiveKey="nftList"
        id="uncontrolled-tab-example"
        className="mb-3"
        style={{ paddingLeft: "10px" }}
      >
        <Tab
          eventKey="nftList"
          title="Color Token Collection"
          style={{ paddingLeft: "10px" }}
        >
          <Row xs={1} md={4} className="g-4">
            {colorTokenDetails.map((colorDetail) => (
              <Col>
                <Card style={{ width: "20rem" }}>
                  <Card.Header
                    style={{
                      backgroundColor: colorDetail.colorTokenValue,
                      height: "3rem",
                    }}
                  ></Card.Header>
                  <Card.Body>
                    <Card.Title>
                      <b> {colorDetail.colorTokenValue} </b>
                    </Card.Title>

                    <Card.Text>
                      <b>Owner:</b> {colorDetail.nftOwner} <br />
                      <b>NFT ID:</b> {colorDetail.nftID}
                    </Card.Text>
                    <Button
                      variant="warning"
                      onClick={() => putOnSale(colorDetail.nftID)}
                    >
                      Sell Token
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          <br />
        </Tab>
        <Tab
          eventKey="marketPlace"
          title="Market"
          style={{ paddingLeft: "10px" }}
        >
          <Row xs={1} md={4} className="g-4">
            {itemDetails.map((itemDetail) => (
              <Col>
                <Card style={{ width: "20rem" }}>
                  <Card.Header
                    style={{
                      backgroundColor: itemDetail.colorTokenValue,
                      height: "3rem",
                    }}
                  ></Card.Header>
                  <Card.Body>
                    <Card.Title>
                      <b> {itemDetail.colorTokenValue} </b>
                    </Card.Title>

                    <Card.Text>
                      <b>Seller: </b> {itemDetail.nftSeller} <br />
                      <b>Price: </b> 1 Ether.
                    </Card.Text>
                    <Button variant="info" onClick={() => buyToken(itemDetail.itemID)}>Buy Token</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          <br />
        </Tab>
      </Tabs>
    </div>
  );
}

export default App;
