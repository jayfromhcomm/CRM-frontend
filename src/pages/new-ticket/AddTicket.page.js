//jshint esversion:9
import React, {useState} from 'react';
import { useEffect } from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import { NewTicket } from '../../components/add-ticket-form/NewTicket.comp';
import PageBreadcrumb from '../../components/breadcrumb/Breadcrumb.comp';

const initialFormData = {
    subject:"Issue Type",
    issueDate: null,
    details: "Add details here.",
};

export const AddTicket = () => {

    const [formData, setFormData] = useState(initialFormData);
    useEffect(() => {}, [formData]);

    const handleOnChange = (e) => {
        const {name1, value} = e.target;
        
        

        setFormData({
            ...initialFormData,
            [name1]: value
        });
    };

    
    const handleOnSubmit = e => {
        e.preventDefault();
        console.log('Form submitted');
    };

    return (
       <Container>
           <Row>
               <Col>
                   <PageBreadcrumb page="New Ticket" />
               </Col>
           </Row>

           <Row>
               <Col>
                   <NewTicket 
                   handleOnChange={handleOnChange} 
                   handleOnSubmit={handleOnSubmit}
                    formDt={formData}
                   />
               </Col>
           </Row>
       </Container>
    )
};
