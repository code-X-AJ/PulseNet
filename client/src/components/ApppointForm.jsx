import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function BasicExample() {
    return (
        <div className="m-auto w-[80%]">
            <div className='my-12'>
                <Form>
                    <Row>
                        <Col>
                            <Form.Group className="mb-3">
                                <Form.Label>Name:</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter Your Name"
                                    className="w-full"
                                />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3" controlId="formBasicEmail1">
                                <Form.Label>Email:</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter Your Email"
                                    className="w-full"
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group className="mb-3" controlId="formBasicEmail1">
                                <Form.Label>Address:</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter Your Address"
                                    className="w-full"
                                />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3" controlId="formBasicEmail1">
                                <Form.Label>Phone:</Form.Label>
                                <Form.Control
                                    type="tel"
                                    placeholder="Enter Your contact Number"
                                    className="w-full"
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group className="mb-3" controlId="formBasicEmail1">
                                <Form.Label>Date:</Form.Label>
                                <Form.Control
                                    type="date"
                                    placeholder="Enter Your Date for appointment"
                                    className="w-full"
                                />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3" controlId="formBasicEmail1">
                                <Form.Label>Time:</Form.Label>
                                <Form.Control
                                    type="time"
                                    placeholder="Enter Your time for appointment"
                                    className="w-full"
                                />
                            </Form.Group>
                        </Col>
                    </Row>

                    <div className="mt-4">
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </div>
                </Form>
            </div>
        </div>
    );
}

export default BasicExample;
