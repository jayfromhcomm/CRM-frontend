//jshint esversion:7

import { Button } from 'react-bootstrap';
import React from 'react';
import { Container, Row, Col, Form } from "react-bootstrap";
import PropTypes from 'prop-types';

export const ResetPassword = ({ handleOnChange, handleOnResetSubmit, formSwitcher, email, password }) => {
    return (
        <Container>
            <Row>
                <Col>
                <h1 className="text-info text-center">Please enter your email address</h1>
                <hr />
                <Form autoComplete="off" onSubmit={handleOnResetSubmit} >
                    <Form.Group>
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control 
                            type="email"
                            name="email"
                            value={email}
                            onChange={handleOnChange}
                            placeholder="Enter Email"
                            
                        />
                    </Form.Group>
                   

                    <Button type="submit">Reset Password</Button>

                </Form>
                <hr />
                </Col>
            </Row>
            <Row>
                <Col>
                    <a href="#!" onClick={()=>formSwitcher('login')}>Login now</a>
                </Col>
            </Row>
        </Container>
    )
};

ResetPassword.propTypes = {
    handleOnChange: PropTypes.func.isRequired,
    handleOnResetSubmit: PropTypes.func.isRequired,
    formSwitcher: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired,
};
