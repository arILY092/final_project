import React, { Component } from "react";
import {Container, Tab, Nav, Row, Col} from 'react-bootstrap'

export default class About extends Component {
    render(){
        return(
            <Container>
                <Tab.Container id="ledt-tabs-example defaultActiveKey="first>
                    <Row>
                        <Col sm={3}>
                            <Nav variant="pills" className="flex-column mt-2">
                                <Nav.Item>
                                    <Nav.Link eventKey="first" > Cardio Equipment </Nav.Link>
                                </Nav.Item>

                                <Nav.Item>
                                    <Nav.Link eventKey="second" > Strength Training Machines </Nav.Link>
                                </Nav.Item>

                                <Nav.Item>
                                    <Nav.Link eventKey="third" > Functional Equipment </Nav.Link>
                                </Nav.Item>

                                <Nav.Item>
                                    <Nav.Link eventKey="fourth" > Nutrition & Supplements </Nav.Link>
                                </Nav.Item>

                                <Nav.Item>
                                    <Nav.Link eventKey="fifth" > Maintenance & Repair </Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content className="mt-3">
                                <Tab.Pane eventKey="first">
                                    <img src="https://www.builthq.com.au/wp-content/uploads/2021/07/cardio-endurance.jpg"/>
                                    < p style={{ fontSize: '18px' }} >Our Cardio Equipment section offers a wide range of machines designed to boost 
                                        endurance and enhance cardiovascular health. Explore a world of innovative and 
                                        effective solutions for your cardio training regimen.
                                    </p>


                                </Tab.Pane>

                                <Tab.Pane eventKey="second">
                                    <img src="https://us.123rf.com/450wm/lioputra/lioputra2305/lioputra230500124/204065098-man-doing-machine-hack-squat-exercise-flat-vector-illustration-isolated-on-white-background.jpg?ver=6"/>                                    
                                    <p style={{ fontSize: '18px' }} >Discover a comprehensive range of strength training machines designed 
                                        to enhance muscle development and overall body strength. Dive into a 
                                        collection that's tailored for effective and robust workouts.
                                    </p>

                                </Tab.Pane>

                                <Tab.Pane eventKey="third">
                                    <img src="https://www.ukgymequipment.com/images/ignite-neoprene-studio-dumbbells-p154-60245_thumb.jpg"/>
                                    <p style={{ fontSize: '18px' }} >
                                    Explore our curated selection of functional equipment, meticulously designed to improve mobility, agility, 
                                    and overall functional fitness. Elevate your workouts with versatile tools that cater to a dynamic training approach.
                                    </p>
                                </Tab.Pane>

                                <Tab.Pane eventKey="fourth">
                                    <img src="https://web.prairieathletic.com/wp-content/uploads/2019/06/best-black-friday-supplements-deals-2017_orig.jpg"/>
                                    <p style={{ fontSize: '18px' }} >Delve into our Nutrition & Supplements range, where quality meets effectiveness. 
                                    From essential nutrients to performance-enhancing supplements, find what fuels your fitness journey and optimizes your results.
                                    </p>
                                </Tab.Pane>

                                <Tab.Pane eventKey="fifth">
                                    <img src="https://limblecmms.com/wp-content/uploads/Know-The-Difference-Between-Repair-And-Maintenance.png"/>
                                    <p style={{ fontSize: '18px' }} >Ensure the longevity of your fitness equipment with our specialized Maintenance & Repair services. 
                                    Trust in our expertise to keep your machines in top-notch condition, ensuring consistent and safe workouts.
                                    </p>
                                </Tab.Pane>
                            </Tab.Content>
                         </Col>
                    </Row>
                </Tab.Container>
            </Container>
        )
    }
}
