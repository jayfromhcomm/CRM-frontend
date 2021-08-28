//jshint esversion: 7

import { Button, Badge, Breadcrumb } from 'react-bootstrap';
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { TicketTable } from '../../components/ticket-table/TicketTable.comp';
import tickets from '../../assets/data/dummy-tickets.json';
import PageBreadcrumb from '../../components/breadcrumb/Breadcrumb.comp';


export const Dashboard = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <PageBreadcrumb page="Dashboard"/>
                </Col>
            </Row>
            <Row>
                <Col className="text-center mt-5 mb-2">
                    <Button variant="info" style={{fontSize:'2rem', 'padding': '10px 30px'}}>Add New Ticket</Button>
                </Col>
            </Row>
            {/* second row */}
            <Row>
                <Col className="text-center mb-2">
                    <div>Total Tickets: 50</div>
                    <div>Open Tickets: 10</div>
                </Col>
            </Row>
            {/* third row title */}
            <Row>
                <Col className="mt-2 ">
                <Button variant="primary" className="mt-2 mb-2">
                    New Tickets 
                    <Badge bg="secondary">9</Badge>
                    <span className="visually-hidden">unread messages</span>
                </Button>
                <Button variant="secondary" className="mt-2 mb-2">
                    All Tickets 
                    <Badge bg="primary">9</Badge>
                    <span className="visually-hidden">unread messages</span>
                </Button>

                    
                </Col>
            </Row>
            <hr />

             {/* fourth row dashboard */}
             <Row>
                <Col className="recent-ticket">
                <TicketTable tickets={tickets} />
                </Col>
            </Row>
        </Container>
    );
};


