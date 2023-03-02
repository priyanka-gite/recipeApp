import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link} from "react-router-dom";

const NavbarComp = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container fluid>
                    <Navbar.Brand  as={Link} to={"/home"}>RecipesApp</Navbar.Brand>
                    <Navbar.Toggle aria-controls="RecipesApp" />
                    <Navbar.Collapse id="RecipesApp">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link as={Link} to={"/home"}>Home</Nav.Link>
                            {/*<Nav.Link as={Link} to={"/meals"}>Meals</Nav.Link>*/}
                            <NavDropdown title="MealType" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#action3">Breakfast</NavDropdown.Item>
                                <NavDropdown.Item href="#action3">Lunch</NavDropdown.Item>
                                <NavDropdown.Item href="#action3">Snack</NavDropdown.Item>
                                <NavDropdown.Item href="#action3">Teatime</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">
                                   Dinner
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action5">
                                    Something else here
                                </NavDropdown.Item>
                            </NavDropdown>

                            <NavDropdown title="Diet" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#action3">Balanced</NavDropdown.Item>
                                <NavDropdown.Item href="#action3">High-Fibre</NavDropdown.Item>
                                <NavDropdown.Item href="#action3">High-Protien</NavDropdown.Item>
                                <NavDropdown.Item href="#action3">Low-Carb</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">Low-fat
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action4">Low-fat
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action5">
                                    Something else here
                                </NavDropdown.Item>
                            </NavDropdown>

                            <NavDropdown title="Health" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#action3">Alcohol-cocktail</NavDropdown.Item>
                                <NavDropdown.Item href="#action3">Alcohol-free</NavDropdown.Item>
                                <NavDropdown.Item href="#action3">Celery-free</NavDropdown.Item>
                                <NavDropdown.Item href="#action3">Crustacean-free</NavDropdown.Item>
                                <NavDropdown.Item href="#action3">egg-free</NavDropdown.Item>
                                <NavDropdown.Item href="#action3">fish-free</NavDropdown.Item>
                                <NavDropdown.Item href="#action3">fodmap-free</NavDropdown.Item>
                                <NavDropdown.Item href="#action3">gluten-free</NavDropdown.Item>
                                <NavDropdown.Item href="#action3">immunosupporative</NavDropdown.Item>
                                <NavDropdown.Item href="#action3">keto-friendly</NavDropdown.Item>
                                <NavDropdown.Item href="#action3">kidney-friendly</NavDropdown.Item>
                                <NavDropdown.Item href="#action3">low-fat-abs</NavDropdown.Item>
                                <NavDropdown.Item href="#action3">low-pottasium</NavDropdown.Item>
                                <NavDropdown.Item href="#action3">low-sugar</NavDropdown.Item>
                                <NavDropdown.Item href="#action3">lupine-free</NavDropdown.Item>
                                <NavDropdown.Item href="#action3">
                                    DASH
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action5">
                                    Something else here
                                </NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="CuisineType" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#action3">American</NavDropdown.Item>
                                <NavDropdown.Item href="#action3">Asian</NavDropdown.Item>
                                <NavDropdown.Item href="#action3">British</NavDropdown.Item>
                                <NavDropdown.Item href="#action3">Caribbean</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">
                                    Chinese
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action4">
                                    Indian
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action5">
                                    Something else here
                                </NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Dishtype" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#action3">Bread</NavDropdown.Item>
                                <NavDropdown.Item href="#action3">Cereals</NavDropdown.Item>
                                <NavDropdown.Item href="#action3">Main course</NavDropdown.Item>
                                <NavDropdown.Item href="#action3">Pankcake</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">
                                    Salad
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action4">
                                    Sandwiches
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action4">
                                    Soup
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action4">
                                    Starter
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action5">
                                    Something else here
                                </NavDropdown.Item>
                            </NavDropdown>
                            {/*<Nav.Link as={Link} to={"/cuisines"}>Cuisines</Nav.Link>*/}
                            <Nav.Link as={Link} to={"/register"}>Register</Nav.Link>
                            <Nav.Link as={Link} to={"/login"}>Login</Nav.Link>
                            <Nav.Link href="#" disabled>
                                Link
                            </Nav.Link>
                        </Nav>
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavbarComp;