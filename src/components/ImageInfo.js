import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form'

export default function ImgageInfo() {
  return (

    <Card>

        <div className="card-Image" >
      <Card.Img 
                src="https://www.instacart.com/image-server/x428/www.instacart.com/assets/homepage/homepage_background_full_m3_cropped-8d2d286263821da7decd7c61fb1db1eb0e3dec13e0c356277d6d3cb7484c024a.jpg" 
                />
                </div>
      <Card.ImgOverlay>
        <div className='order-Groceries'>
            <Card.Title>Order groceries for delivery </Card.Title>
            </div>
            <div className="pick-up">
            <Card.Title>Or pickup today</Card.Title>
            </div>
            <div className='whatever-want'>
        <Card.Text>
            Whatever you want from local stores, brought right to your door.
        </Card.Text>
        </div>
        <div className='form-input' >
        <Form.Control  type="text" placeholder="Enter your address" />
        </div>
      </Card.ImgOverlay>
    </Card>
  );
}
