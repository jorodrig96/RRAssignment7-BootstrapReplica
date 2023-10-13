import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from "react-bootstrap/Col"


export default function StoreItems () {
    return (
        <>
        <h2 className='browse-stores'>Browse stores in Houston</h2>
        <br />
    <Container>
      <Row>
      <Col md={4}>
        <img src="https://www.instacart.com/image-server/60x60/filters:fill(FFF,true):format(webp)/www.instacart.com/assets/domains/warehouse/logo/12/2774c343-1319-4720-a54f-0c46e93f956c.png" roundedCircle />
            <h5 style={{ fontWeight: "bold" }}>ALDI</h5>
            <p>Delivery * Pickup</p>
        </Col>
        <Col md={{ span: 4, offset: 4 }}>
        <img src="https://www.instacart.com/image-server/72x/www.instacart.com/assets/domains/warehouse/logo/279/b6a0666c-e18e-4be3-a7a9-22def804a290.png" roundedCircle />
        <h5 style={{ fontWeight: "bold" }}>Sprouts Farmers Market</h5>
        <p>Delivery * Pickup</p>
        </Col>
      </Row>
      <br />
      <Row>
      <Col md={4}>
        <img src="https://www.instacart.com/image-server/72x/www.instacart.com/assets/domains/warehouse/logo/290/627b03bd-1ef8-4d74-8f3d-346f7f6d18a5.png" roundedCircle />
            <h5 style={{ fontWeight: "bold" }}>Vons</h5>
            <p>Delivery Only</p>
        </Col>
        <Col md={{ span: 4, offset: 4 }}>
        <img src="https://www.instacart.com/image-server/72x/www.instacart.com/assets/domains/warehouse/logo/648/25d6c55a-67f5-4689-a8b2-9e349d80a04a.png" roundedCircle />
        <h5 style={{ fontWeight: "bold" }}>Target</h5>
        <p>Pickup</p>
        </Col>
      </Row>
      <br/>
      <Row>
      <Col md={4}>
            <img src="https://www.instacart.com/image-server/72x/www.instacart.com/assets/domains/warehouse/logo/233/ca07b011-2df2-4e1d-bdef-e47d2d0f24d7.png" roundedCircle />
            <h5 style={{ fontWeight: "bold" }}>Albertsons</h5>
            <p>Delivery * Pickup</p>
        </Col>
        <Col md={{ span: 4, offset: 4 }}>
            <img src="https://www.instacart.com/image-server/72x/www.instacart.com/assets/domains/warehouse/logo/161/02dde074-d001-40fc-8d04-319bb80af9df.png" roundedCircle />
            <h5 style={{ fontWeight: "bold" }}>Stater Bros.</h5>
            <p>Delivery * Pickup</p>
        </Col>
      </Row>
      <br />
    </Container>
 </>
    );
}