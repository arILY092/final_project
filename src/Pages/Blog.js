import React, { Component } from "react";
import { Card, Container, Col, Row, ListGroup } from "react-bootstrap";

export default class Blog extends Component {
    render() {
        return (
            <Container>
                <Row>

                    {/* Колонка для блоков */}
                    <Col md="9">
                       
                       {/* Первый блок */}
                <Row className="my-4">
                    <Col md={12}>
                        <Card className="m-5 d-flex align-items-center" style={{ border: '1px solid white' }}>
                            <Row className="g-0">
                                <Col md={3} className="text-center">
                                    <img
                                        width={150}
                                        height={150}
                                        className="mr-3"
                                        src="https://hips.hearstapps.com/hmg-prod/images/dumbbells-gym-64a3f4bc2fe31.jpg"
                                        alt="Blog Logo"
                                    />
                                </Col>
                                <Col md={9}>
                                    <Card.Body className="p-0 ps-2">
                                        <h5 className="mb-1">News and Updates</h5>
                                        <p className="mt-0">
                                        Discover our latest innovations in fitness equipment this month, 
                                        blending cutting-edge technology with groundbreaking design. We're also 
                                        rolling out an enhanced service program, offering extended warranties and
                                         technical assistance to all our valued clients. Dive into our most recent 
                                         blog post, where we unpack the top fitness industry trends for 2023 and how 
                                         they could reshape your fitness journey.
                                        </p>
                                    </Card.Body>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>


                {/* Второй блок */}
                <Row className="my-4">
                    <Col md={12}>
                        <Card className="m-5 d-flex align-items-center" style={{ border: '1px solid white' }}>
                            <Row className="g-0">
                                <Col md={3} className="text-center">
                                    <img
                                        width={150}
                                        height={150}
                                        className="mr-3"
                                        src="https://img.freepik.com/premium-photo/iron-dumbbells-before-old-wooden-wall_1004691-1824.jpg?size=626&ext=jpg&ga=GA1.1.1413502914.1696896000&semt=ais"
                                        alt="Blog Logo"
                                    />
                                </Col>
                                <Col md={9}>
                                    <Card.Body className="p-0 ps-2">
                                        <h5 className="mb-1">Tips and Recommendations</h5>
                                        <p className="mt-0">
                                        Elevate your workout routine with our expert tips on selecting the perfect equipment for 
                                        your home gym setup. Nutrition is key to achieving your fitness milestones; explore our 
                                        curated guide to a balanced diet specifically tailored for those leading an active lifestyle.
                                         Our team of experts is here to guide you, from equipment maintenance to mastering proper exercise 
                                         techniques, ensuring you achieve optimal results.
                                        </p>
                                    </Card.Body>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>

                  {/* Третий блок */}
                <Row className="my-4">
                    <Col md={12}>
                        <Card className="m-5 d-flex align-items-center" style={{ border: '1px solid white' }}>
                            <Row className="g-0">
                                <Col md={3} className="text-center">
                                    <img
                                        width={150}
                                        height={150}
                                        className="mr-3"
                                        src="https://w0.peakpx.com/wallpaper/59/997/HD-wallpaper-barbell-gym-bodybuilding-concepts-gym-concepts-weight-training-weightlifting-powerlifting.jpg"
                                        alt="Blog Logo"
                                    />
                                </Col>
                                <Col md={9}>
                                    <Card.Body className="p-0 ps-2">
                                        <h5 className="mb-1">Interviews and Reviews</h5>
                                        <p className="mt-0">
                                        Our head trainer recently sat down for an enlightening interview, offering invaluable 
                                        insights into crafting effective workout regimens tailored for beginners. Curious about 
                                        real-world experiences? Dive into our customer reviews section to learn how our equipment 
                                        has helped users achieve their fitness goals. Stay tuned for an upcoming interview with industry-leading experts who will share their expertise, insights, and tips for a healthier lifestyle.
                                        </p>
                                    </Card.Body>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>

             </Col>


                  
                        <Card bg="light">
                            <Card.Body>
                                <Card.Title>Side widget</Card.Title>
                                <Card.Text>
                                Stay updated with the latest news and promotions from our store! Subscribe to our newsletter and receive exclusive discounts and offers.                                </Card.Text>
                            </Card.Body>
                        </Card>
                    

                </Row>
            </Container>
        );
    }
}
