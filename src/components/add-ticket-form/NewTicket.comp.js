//jshint esversion:7
import { Alert, Row, Col } from 'react-bootstrap';
import React from 'react';
import {Form,Button} from 'react-bootstrap';
import PropTypes from 'prop-types';

import './add-ticket-form.style.css';

export const NewTicket = ({handleOnSubmit, handleOnChange, formDt}) => {
    console.log(formDt);
    return (
        <Alert mt-3 className="add-new-ticket" bg-light>
            <h1 className="text-info text-center">Add New Ticket</h1>
            <hr />
            <Form  autoComplete="off" onSubmit={handleOnSubmit} >
                    {/* subject */}
                    <Form.Group as={Row}>
                        <Form.Label column sm={3}>
                            Subject
                        </Form.Label>
                        <Col sm={9}>
                            <Form.Control 
                                type="text"
                                name1="subject"
                                // value={formDt.subject}
                                onChange={handleOnChange}
                                placeholder="Subject"
                                required
                            />
                        </Col>
                        
                    </Form.Group>
                    {/* Date */}
                    <Form.Group as={Row}>
                        <Form.Label column sm={3}>Issue Found</Form.Label>
                        <Col sm={9}>
                            <Form.Control 
                                type="date"
                                name1="issueDate"
                                // value={formData.issueDate}
                                onChange={handleOnChange}
                                required
                                
                            />
                        </Col>
                       
                    </Form.Group>
                    {/* ticket details */}
                    <Form.Group>
                        <Form.Label>Details</Form.Label>
                        <Form.Control 
                            as="textarea"
                            type="text"
                            name1="details"
                            // value={formData.details}
                            onChange={handleOnChange}
                            required
                            
                        />
                    </Form.Group>

                    <Button type="submit" variant="info" block="true">Create Ticket</Button>

                </Form>
        </Alert>
    );
};


NewTicket.propTypes = {
    handleOnSubmit:PropTypes.func.isRequired,
    handleOnChange: PropTypes.func.isRequired,
    formDt: PropTypes.object.isRequired
};



