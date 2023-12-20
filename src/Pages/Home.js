import React, { Component } from "react";
import CarouselBox from "../Components/CarouselBox";
import Carousel from 'react-bootstrap/Carousel';
import { Container, Card, Button, CardGroup } from "react-bootstrap";

export default class Home extends Component {
    render(){
        return(
            <>
            <CarouselBox  /> 
           <Container>
            <h2 className="text-center m-4"> Our bestsellers! </h2>
            <CardGroup className="m-4">

                <Card bg="warning" border="dark">
                <Card.Img variant="top"
                src="http://mfitness.kz/upload/iblock/1d1/1d15815210f207a4cf09f027d9519216.jpg"
                />
                <Card.Body>
                    <Card.Title>Circle Fitness M8 E Plus</Card.Title>
                    <Card.Text>
                    The Circle Fitness M8 E Plus treadmill features an 18.5-inch digital TFT LCD console, dimensions of 215 x 92 x 157 cm, and supports users up to 182 kg. 
                    It offers diverse workout programs, a built-in fan and an emergency stop feature.
                    </Card.Text>
                    <Button variant="primary">More details</Button>
                </Card.Body>
                </Card>

                <Card bg="success" border="dark">
                <Card.Body>
                    <Card.Title>Balanced Body Rialto™ Reformer</Card.Title>
                    <Card.Text>
                    The 739-000 Pilates Reformer features a handcrafted body made of maple wood, 
                    aluminum legs with a powder-coated finish, and a non-slip platform.   
                    It offers five resistance levels with varying springs and is designed by Balanced Body.
                    </Card.Text>
                    <Button variant="primary">More details</Button>
                </Card.Body>
                <Card.Img variant="bottom"
                src="http://mfitness.kz/upload/iblock/5ca/5ca05b3bc0dbfb906072da6a858a1b01.jpg"
                />
                </Card>

                <Card bg="info"border="dark">
                <Card.Img variant="top"
                src="http://mfitness.kz/upload/iblock/271/27147396c42baa13768e298d81617d92.jpg"
                />
                <Card.Body>
                    <Card.Title>PRECOR DPL601</Card.Title>
                    <Card.Text>
                    The PRECOR DPL601 incline leg press machine offers a 45° angle for effective workouts. 
                    It features a three-position anatomical seat for optimal support, an enlarged curved working platform.      
                    </Card.Text>
                    <Button variant="primary">More details</Button>
                </Card.Body>
                </Card>

            </CardGroup>
           </Container>
            </>
           
        )
    }
}
