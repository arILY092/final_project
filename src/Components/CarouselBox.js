import React, { Component } from "react";
import Carousel from 'react-bootstrap/Carousel'
import pic1Img from '../assets/scrol1.jpg'; 
import pic2Img from '../assets/scrol2.jpg'; 
import pic3Img from '../assets/scrol3.jpg'; 

import { CarouselCaption } from "react-bootstrap";

export default class CarouselBox extends Component {
    render(){
        return(
           <Carousel>
            <Carousel.Item>
                <img 
                className="d-block w-100"
                src={pic1Img}
                alt="Pic1"
                />
                <Carousel.Caption>
                <h1 style={{ fontSize: '3rem', ...styledH1 }}>Comprehensive Solutions</h1>
                <h1 style={styledH1}> for fitness clubs and gyms </h1>

                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img 
                className="d-block w-100"
                src={pic2Img}
                alt="Pic2"
                />
                <Carousel.Caption>
                <h1 style={{ fontSize: '3rem', ...styledH1 }}>PRECOR® P82 Console </h1>
                <h1 style={styledH1}> Proven effectiveness for fitness clubs </h1>

                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img 
                className="d-block w-100"
                src={pic3Img}
                alt="Pic2"
                />
                <Carousel.Caption>

                <h1 style={{ fontSize: '3rem', ...styledH1 }}>Jump </h1>
                <h1 style={styledH1}> Changes the approach to workouts </h1>

                </Carousel.Caption>
            </Carousel.Item>

           </Carousel>

        )
    }
}

const styledH1 = {
    WebkitTextStroke: '1px black',  
    color: 'white',                
};
