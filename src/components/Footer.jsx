import React from 'react';
import {Card} from "react-bootstrap"
import "../style/footer.css"


const Footer = () => {
    return (
        <Card  className='Footer'>
      <Card.Header>Solo Cogo International Comp.</Card.Header>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>

          </p>
          <footer className="blockquote-footer">
          ©2022  Solo Cogo International UY, Inc.<cite title="Source Title"> All rights reserved.</cite>
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
    );
};

export default Footer;