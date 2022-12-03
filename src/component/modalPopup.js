import { Row, Modal, Button, Form, Col } from "react-bootstrap";
import React from 'react';
import {useState,useRef} from 'react';

function ModalpopupFunc(props){
    const [isShow, invokeModal] = useState(true);    
    console.log(props);
    const initModal = () => {
      return invokeModal(false)
    }
    return (
        <>
            <Button variant="success" onClick={initModal}>
                Open Modal
            </Button>
            <Modal show={isShow}>
                <Modal.Header closeButton onClick={initModal}>
                <Modal.Title>React Modal Popover Example</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Modal.Body>
                <Modal.Footer>
                <Button variant="danger" onClick={initModal}>
                    Close
                </Button>
                <Button variant="dark" onClick={initModal}>
                    Store
                </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}


export default ModalpopupFunc;
