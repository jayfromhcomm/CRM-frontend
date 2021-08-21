//jshint esversion: 7
 import React from 'react';
import { Table } from 'react-bootstrap';
 
 export const TicketTable = ({tickets}) => {
     return (
         <Table striped bordered hover>
             <thead>
                 <tr>
                     <th>Ticket #</th>
                     <th>Priority</th>
                     <th>Reporter</th>
                     <th>Subject</th>
                     <th>Status</th>
                     <th>Last Modified</th>
                 </tr>
             </thead>

             {/* table body possible ticket component */}
             <tbody>
             {tickets.length ? 
             tickets.map((row)=>(
                <tr key={row.id}>
                     <td>{row.id}</td>
                     <td>{row.priority}</td>
                     <td>{row.reporter}</td>
                     <td>{row.reporter}</td>
                     <td>{row.status}</td>
                     <td>{row.created}</td>
                 </tr>)
             ): 
             <tr>
                     <td colSpan="4" className="text-center">No tickets found</td>
                     
                 </tr>
                
             }
               
                
             </tbody>
         </Table>
     );
 };
 